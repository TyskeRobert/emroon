import Image from "next/image";
import Link from "next/link";

export default function ONPLink({ id }: { id: string}) {
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