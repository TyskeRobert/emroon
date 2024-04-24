import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

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

export function LemmaLink({ id }: { id: string }) {
    return (
        <Link href={`/lexicon/${id}`}>
            <ArrowRightCircleIcon className="w-6 inline"/>
        </Link>
    );
}