import Link from "next/link"; // Import the Link component from Next.js
export default function StudentInfo() { // Main component for student information
    return (
        <div>
            <h2>George (Jimmy) SABO</h2>
            <Link href="https://github.com/SummerShorts676/cprg306-assignments.git">
            GitHub Repository - Click me!!!!</Link>
            <br />
            <br />
            <Link href="/">Back to Home</Link>
        </div>
    );
}