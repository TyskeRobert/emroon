import Image from 'next/image';
import { UpdateInvoice, DeleteInvoice } from '@/app/ui/lexicon/buttons';
import InvoiceStatus from '@/app/ui/lexicon/status';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchFilteredForms, fetchFilteredLemmata } from '@/app/lib/data';
import { FormLink, LemmaLink, ONPLink } from '@/app/ui/links';
import { partsOfSpeech, prettifyMorph } from '@/app/lib/vocabularies';

export async function LexiconTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const lemmata = await fetchFilteredLemmata(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {lemmata?.map((lemma) => (
              <div
                key={lemma.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center text-sm text-gray-500">
                      <div>{lemma.id}</div>
                      <div className="absolute right-12">
                        <ONPLink id={lemma.linkonp}/>
                      </div>
                    </div>
                    <p>
                      <LemmaLink id={lemma.id}/>
                      <i>{lemma.entry}</i>,{' '}
                      {partsOfSpeech.get(lemma.pos) || `Unknown part of speech: ${lemma.pos}`} 
                    </p>
                  </div>
                  {/*
                  <InvoiceStatus status={invoice.status} />
                  */}
                </div>
                {/*
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {formatCurrency(invoice.amount)}
                    </p>
                    <p>{formatDateToLocal(invoice.date)}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateInvoice id={invoice.id} />
                    <DeleteInvoice id={invoice.id} />
                  </div>
                </div>
                */}
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 w-1 font-medium sm:pl-6">
                  ID
                </th>
                <th scope="col" className="px-3 py-5 w-1 font-medium">
                  Entry
                </th>
                <th scope="col" className="px-3 py-5 w-60 font-medium">
                  Part of speech
                </th>
                <th scope="col" className="px-3 py-5 w-60 font-medium">
                  ONP
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                </th>
                {/*
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
                */}
              </tr>
            </thead>
            <tbody className="bg-white">
              {lemmata?.map((lemma) => (
                <tr
                  key={lemma.id}
                  className={`
                    w-full 
                    border-b 
                    py-3 
                    text-sm 
                    last-of-type:border-none 
                    [&:first-child>td:first-child]:rounded-tl-lg 
                    [&:first-child>td:last-child]:rounded-tr-lg 
                    [&:last-child>td:first-child]:rounded-bl-lg 
                    [&:last-child>td:last-child]:rounded-br-lg
                  `}
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p className="text-gray-500">{lemma.id}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <LemmaLink id={lemma.id}/>
                    <i>{lemma.entry}</i>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {partsOfSpeech.get(lemma.pos) || `Unknown part of speech: ${lemma.pos}`}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <ONPLink id={lemma.linkonp}/>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                  </td>
                  {/*
                  <td className="whitespace-nowrap px-3 py-3">
                    <InvoiceStatus status={invoice.status} />
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateInvoice id={invoice.id} />
                      <DeleteInvoice id={invoice.id} />
                    </div>
                  </td>
                  */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export async function FormsTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const forms = await fetchFilteredForms(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {forms?.map((form) => (
              <div
                key={form.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex w-full items-center justify-between border-b pb-4">
                  <div className="w-full">
                    <div className="mb-2 flex items-center text-sm text-gray-500">
                      <div>{form.id}</div>
                    </div>
                    <div className="w-full">
                      <div>
                        <FormLink id={form.id}/>
                        <i>{form.norm}</i>
                      </div>
                      <div className="w-full flex justify-between items-center">
                        <div className="px-8 font-mono text-xs">{prettifyMorph(form.pos, form.morph)}</div>
                        <div className="text-right">
                          <LemmaLink id={form.lemmaid} label={form.entry}/>{", "}
                          {form.pos}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  ID
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Norm
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Morphology
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Lemma
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {forms?.map((form) => (
                <tr
                  key={form.id}
                  className={`
                    w-full 
                    border-b 
                    py-3 
                    text-sm 
                    last-of-type:border-none 
                    [&:first-child>td:first-child]:rounded-tl-lg 
                    [&:first-child>td:last-child]:rounded-tr-lg 
                    [&:last-child>td:first-child]:rounded-bl-lg 
                    [&:last-child>td:last-child]:rounded-br-lg
                  `}
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p className="text-gray-500">{form.id}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <FormLink id={form.id}/>
                    <i>{form.norm}</i>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3 font-mono text-xs">
                    {prettifyMorph(form.pos, form.morph)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <LemmaLink id={form.lemmaid} label={form.entry}/>,{' '}
                    {form.pos}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
