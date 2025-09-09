import Link from "next/link";

export default function StudentInfo() {
    return (
        <div>
            <p>Rei Uyeno</p>
            <Link className="text-cyan-600 underline hover:text-cyan-300" href="https://github.com/Sine-Uyeno/cprg306-assignments">https://github.com/Sine-Uyeno/cprg306-assignments</Link>
        </div>
    );   
}