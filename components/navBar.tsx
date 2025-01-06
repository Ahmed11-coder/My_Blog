import Link from "next/link";
export default function NevBar() {
    return (
        <>
            <nav className="bg-slate-500/35 flex p-5">
                <div className="container flex items-center mx-auto">
                    <div>
                        <Link href="/"><h1 className="text-2xl font-bold">Blog</h1></Link>
                    </div>
                    <ul className="flex items-center w-fit [&>li]:ml-10">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/create">
                                Create New Blog
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}