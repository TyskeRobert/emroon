'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function GlossONP({ id }: { id: string }) {
    if (!id) return null;

    const [data, setData]: [any, any] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://onp.ku.dk/json/onp/${id}`)
            .then(res => res.json())
            .then(data => {
                setData(data);
                setLoading(false);
            });
    }, []);

    if (isLoading) return <p>Loading ...</p>
    if (!data) return <p>No ONP lemma with the ID {id} could be found.</p>

    const text = (
        <div className='my-2 p-5 rounded-md bg-gray-50'>
            <ul className='list-disc list-inside'>
                {data.senses?.map((item: any) => (
                    <li key={`sense-${data.senses.indexOf(item)}`}>
                        {item["x-onpdef"]}
                    </li>
                ))}
            </ul>
            <p className='text-right text-gray-600'>
                Gloss(es) retrieved from{' '}
                <Link 
                    href={`https://onp.ku.dk/onp/onp.php?${id}`} 
                    target='_blank'
                    className='text-green-600'
                >
                    ONP
                </Link>
            </p>
        </div>
    );

    return data.senses?.length ? text : null;
}