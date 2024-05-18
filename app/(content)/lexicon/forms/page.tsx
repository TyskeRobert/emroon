import { Suspense } from "react";

import { FormsTable } from "@/app/ui/lexicon/tables";
import { FormsTableSkeleton } from "@/app/ui/skeletons";
import Pagination from "@/app/ui/lexicon/pagination";
import Search from "@/app/ui/search";
import { fetchFormsPages } from "@/app/lib/data";

export default async function Page({ 
    searchParams 
}: { 
    searchParams?: {
        query?: string;
        page?: string;
    };
}) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    const totalPages = await fetchFormsPages(query);

    return (
        <div className="w-full">
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Search forms ..."/>
            </div>
            <Suspense key={query + currentPage} fallback={<FormsTableSkeleton/>}>
                <FormsTable query={query} currentPage={currentPage} />
            </Suspense> 
            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPages} /> 
            </div>
        </div>
    );
}