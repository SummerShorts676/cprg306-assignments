import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl pb-5">CPRG 306: Web Development 2 - Assignments</h1>
      <ul>
        <li><Link href="/week-2" className="text-cyan-600 underline hover:text-cyan-300">Week 2 - Assignment</Link></li>
        <li><Link href="/week-3" className="text-cyan-600 underline hover:text-cyan-300">Week 3 - Assignment</Link></li>
        <li><Link href="/week-4" className="text-cyan-600 underline hover:text-cyan-300">Week 4 - Assignment</Link></li>
        <li><Link href="/week-5" className="text-cyan-600 underline hover:text-cyan-300">Week 5 - Assignment</Link></li>
        <li><Link href="/week-6" className="text-cyan-600 underline hover:text-cyan-300">Week 6 - Assignment</Link></li>
        <li><Link href="/week-7" className="text-cyan-600 underline hover:text-cyan-300">Week 7 - Assignment</Link></li>
        <li><Link href="/week-8" className="text-cyan-600 underline hover:text-cyan-300">{/*Week 8 - Assignment*/}</Link></li>
        <li><Link href="/week-9" className="text-cyan-600 underline hover:text-cyan-300">{/*Week 9 - Assignment*/}</Link></li>
        <li><Link href="/week-10" className="text-cyan-600 underline hover:text-cyan-300">{/*Week 10 - Assignment*/}</Link></li>
      </ul>
    </main>
  );
}
