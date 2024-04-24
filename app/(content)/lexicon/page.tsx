import { Suspense } from "react";

import LexiconTable from "@/app/ui/lexicon/table";
import { LexiconTableSkeleton } from "@/app/ui/skeletons";
import Pagination from "@/app/ui/lexicon/pagination";
import Search from "@/app/ui/search";

import { fetchLexiconPages } from "@/app/lib/data";

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
    const totalPages = await fetchLexiconPages(query);

    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className="text-2xl">Lexicon</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Search lexicon ..."/>
            </div>
            <Suspense key={query + currentPage} fallback={<LexiconTableSkeleton/>}>
                <LexiconTable query={query} currentPage={currentPage} />
            </Suspense> 
            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPages} /> 
            </div>
        </div>
    );
}