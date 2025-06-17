import Link from "next/link";
import NewItem from "./new-item";




export default function WeekFivePage() {



    return (
        <main> 
            <NewItem />
            <div className="flex justify-center mt-10">
                <Link href="/" className="
                    rounded 
                    w-fit
                    px-2
                    h-10 
                    bg-blue-500 
                    text-center
                    text-white 
                    border-2 
                    mt-2
                    pt-2
                    border-blue-500 
                    hover:bg-blue-800 
                    hover:border-blue-200
                    col-span-2">Back to Home</Link>
            </div>
        </main>
    )
}