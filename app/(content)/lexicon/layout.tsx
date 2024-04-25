import TopNav from "@/app/ui/lexicon/topnav";

export default function Page({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <div className="flex w-full pb-5 items-center justify-between">
                <h1 className="text-2xl">Lexicon</h1>
            </div>
            <div>
                <TopNav/>
            </div>
            <div>{children}</div>
        </div>
    );
}