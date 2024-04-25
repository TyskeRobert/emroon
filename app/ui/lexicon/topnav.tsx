import NavLinks from "@/app/ui/lexicon/nav-links";

export default function TopNav() {
    return (
        <div className="flex flex-row pb-2 gap-2">
            {/*
            <div className={`
                rounded-md 
                p-3
                pr-10
                bg-gray-50 
                text-green-700
                text-sm
                font-medium
            `}>
                Choose list:
            </div>
            */}
            <NavLinks/>
            <div className="hidden md:block w-auto grow rounded-md bg-gray-50"/>
        </div>
    )
} 