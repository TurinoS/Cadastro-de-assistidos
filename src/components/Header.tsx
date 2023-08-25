import Link from "next/link";

export default function Header() {
  return (
    <header className="text-center py-4 bg-[var(--dark)] font-bold" style={{boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)"}}>
      <Link href="/" className="text-3xl text-[var(--orange)]">
        Centro Social Santa Rita de Cássia
      </Link>
    </header>
  );
}
