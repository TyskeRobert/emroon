import { sql } from '@vercel/postgres';
import {
  CustomerField,
  CustomersTableType,
  InvoiceForm,
  LatestInvoiceRaw,
  LemmaTable,
  User,
  Revenue,
  FormWithLemma,
} from './definitions';
import { formatCurrency } from './utils';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchRevenue() {
  // Add noStore() here to prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).

  try {
    // Artificially delay a response for demo purposes.
    // Don't do this in production :)

    // console.log('Fetching revenue data...');
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    const data = await sql<Revenue>`SELECT * FROM revenue`;

    // console.log('Data fetch completed after 3 seconds.');

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}

export async function fetchLatestInvoices() {
  try {
    const data = await sql<LatestInvoiceRaw>`
      SELECT invoices.amount, customers.name, customers.image_url, customers.email, invoices.id
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      ORDER BY invoices.date DESC
      LIMIT 5`;

    const latestInvoices = data.rows.map((invoice) => ({
      ...invoice,
      amount: formatCurrency(invoice.amount),
    }));
    return latestInvoices;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest invoices.');
  }
}

export async function fetchInvoiceById(id: string) {
  try {
    const data = await sql<InvoiceForm>`
      SELECT
        invoices.id,
        invoices.customer_id,
        invoices.amount,
        invoices.status
      FROM invoices
      WHERE invoices.id = ${id};
    `;

    const invoice = data.rows.map((invoice) => ({
      ...invoice,
      // Convert amount from cents to dollars
      amount: invoice.amount / 100,
    }));

    return invoice[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoice.');
  }
}

export async function fetchCustomers() {
  try {
    const data = await sql<CustomerField>`
      SELECT
        id,
        name
      FROM customers
      ORDER BY name ASC
    `;

    const customers = data.rows;
    return customers;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all customers.');
  }
}

export async function fetchFilteredCustomers(query: string) {
  try {
    const data = await sql<CustomersTableType>`
		SELECT
		  customers.id,
		  customers.name,
		  customers.email,
		  customers.image_url,
		  COUNT(invoices.id) AS total_invoices,
		  SUM(CASE WHEN invoices.status = 'pending' THEN invoices.amount ELSE 0 END) AS total_pending,
		  SUM(CASE WHEN invoices.status = 'paid' THEN invoices.amount ELSE 0 END) AS total_paid
		FROM customers
		LEFT JOIN invoices ON customers.id = invoices.customer_id
		WHERE
		  customers.name ILIKE ${`%${query}%`} OR
        customers.email ILIKE ${`%${query}%`}
		GROUP BY customers.id, customers.name, customers.email, customers.image_url
		ORDER BY customers.name ASC
	  `;

    const customers = data.rows.map((customer) => ({
      ...customer,
      total_pending: formatCurrency(customer.total_pending),
      total_paid: formatCurrency(customer.total_paid),
    }));

    return customers;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch customer table.');
  }
}

export async function getUser(email: string) {
  try {
    const user = await sql`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0] as User;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

// My stuff

export async function fetchCardData() {
  noStore();
  try {
    const entriesCountPromise = sql`
      SELECT COUNT(*) 
      FROM lexicon
      WHERE
        NOT id='L0' AND
        NOT entry='?';
    `;
    const formsCountPromise = sql`
      SELECT COUNT(*) 
      FROM forms
      WHERE
        NOT formid='F0' AND
        NOT norm='?';
    `;
    /*
    const invoiceStatusPromise = sql`SELECT
         SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
         SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
         FROM invoices`;
    */

    const data = await Promise.all([
      entriesCountPromise,
      formsCountPromise
    ]);

    const totalEntries = Number(data[0].rows[0].count ?? '0');
    const totalForms = Number(data[1].rows[0].count ?? '0');

    return {
      totalEntries,
      totalForms
    };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
  }
}

const ITEMS_PER_PAGE = 10;
export async function fetchFilteredLemmata(
  query: string,
  currentPage: number
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  noStore();

  try {
    const lemmata = await sql<LemmaTable>`
      SELECT * 
      FROM lexicon
      WHERE 
        entry ILIKE ${`${query}%`} AND
        NOT entry='?' AND
        NOT id='L0'
      ORDER BY LOWER(entry) ASC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset};
    `;
    return lemmata.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch lemmata.');
  }
}

export async function fetchFilteredForms(
  query: string,
  currentPage: number
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  noStore();

  try {
    const forms = await sql<FormWithLemma>`
      SELECT forms.id, norm, morph, lemmaid, entry, pos, linkonp
      FROM forms JOIN lexicon ON forms.lemmaid = lexicon.id
      WHERE
        norm ILIKE ${`${query}%`} AND
        norm != '?' AND
        formid != 'F0'
      ORDER BY LOWER(norm) ASC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset};
    `;
    return forms.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch forms.');
  }
}

export async function fetchLexiconPages(query: string) {
  noStore();
  try {
    const count = await sql`
      SELECT COUNT(*)
      FROM lexicon
      WHERE 
        entry ILIKE ${`${query}%`} AND
        NOT entry='?' AND
        NOT id='L0';
    `;
    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of matching lexicon entries.');
  }
}

export async function fetchFormsPages(query: string) {
  noStore();
  try {
    const count = await sql`
      SELECT COUNT(*)
      FROM forms
      WHERE
        norm ILIKE ${`${query}%`} AND
        NOT norm='?' AND
        NOT id ILIKE '%F0';
    `;
    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of matching forms.');
  }
}

export async function fetchLemma(id: string) {
  try {
    const rawLemma = await sql`
      SELECT * 
      FROM lexicon
      WHERE id=${id};
    `;
    const rawForms = await sql`
      SELECT *
      FROM forms
      WHERE 
        lemmaid=${id} AND
        NOT formid='F0';
    `;

    const lemma = {
      id,
      entry: rawLemma.rows[0].entry,
      pos: rawLemma.rows[0].pos,
      linkONP: rawLemma.rows[0].linkonp,
      forms: rawForms.rows.map(form => {
        return {
          id: form.id,
          norm: form.norm,
          morph: form.morph
        };
      })
    };
    return lemma;

  } catch (error) {
    console.error('Database Error:', error);
    throw new Error(`Failed to fetch lemma "${id}".`);
  }
}

export async function fetchForm(id: string) {
  try {
    const rawForm = await sql`
      SELECT *
      FROM forms
      WHERE id=${id};
    `;

    const form = {
      id,
      norm: rawForm.rows[0].norm,
      morph: rawForm.rows[0].morph
    };
    return form;

  } catch (error) {
    console.error('Database Error:', error);
    throw new Error(`Failed to fetch form "${id}".`);
  }
}

/*
export async function fetchInvoicesPages(query: string) {
  try {
    const count = await sql`SELECT COUNT(*)
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE
      customers.name ILIKE ${`%${query}%`} OR
      customers.email ILIKE ${`%${query}%`} OR
      invoices.amount::text ILIKE ${`%${query}%`} OR
      invoices.date::text ILIKE ${`%${query}%`} OR
      invoices.status ILIKE ${`%${query}%`}
  `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of invoices.');
  }
}

export async function fetchFilteredInvoices(
  query: string,
  currentPage: number,
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const invoices = await sql<InvoicesTable>`
      SELECT
        invoices.id,
        invoices.amount,
        invoices.date,
        invoices.status,
        customers.name,
        customers.email,
        customers.image_url
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE
        customers.name ILIKE ${`%${query}%`} OR
        customers.email ILIKE ${`%${query}%`} OR
        invoices.amount::text ILIKE ${`%${query}%`} OR
        invoices.date::text ILIKE ${`%${query}%`} OR
        invoices.status ILIKE ${`%${query}%`}
      ORDER BY invoices.date DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return invoices.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}
*/