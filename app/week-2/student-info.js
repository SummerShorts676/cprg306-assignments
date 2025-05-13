import Link from "next/link"; // Import the Link component from Next.js
export default function StudentInfo() { // Main component for student information
    return (
        <div>
            <h2>George (Jimmy) Sabo</h2>
            <Link href="https://github.com/SummerShorts676/cprg306-assignments.git" className="text-cyan-600 underline hover:text-cyan-300">
            GitHub Repository - Click me!!!!</Link>
            <br />
            <br />
            <Link href="/" className="text-cyan-600 underline hover:text-cyan-300">Back to Home</Link>
        </div>
    );
}