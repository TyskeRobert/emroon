import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

import { FormSimple } from "../lib/definitions";

export function ONPLink({ id }: { id: string}) {
    const link = (
        <Link href={`https://onp.ku.dk/onp/onp.php?${id}`} target="_blank">
            <Image 
                src="https://onp.ku.dk/onp/lib/img/onpbanner.jpg" 
                alt="ONP-banner"
                height={30}
                width={60}
            />
        </Link>
    );
    return id ? link : null;
}

export function LemmaLink({ id, label }: { id: string, label?: string }) {
    return (
        <Link href={`/lexicon/lemmata/${id}`} className="hover:text-green-700">
            {label ?
                <i>{label}</i> :
                <ArrowRightCircleIcon className="w-6 inline mr-2"/> 
            }
        </Link>
    );
}

export function FormLink({ id, label }: { id: string, label?: string }) {
    return (
        <Link href={`/lexicon/forms/${id}`} className="hover:text-green-700">
            {label ? 
                <i>{label}</i> :
                <ArrowRightCircleIcon className="w-6 inline mr-2"/>
            }
        </Link>
    )
}