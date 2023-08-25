'use client'

import { usePathname } from "next/navigation";
import Link from "next/link";

interface HeaderProps {
  loginPage?: boolean
}

export default function Header({ loginPage }: HeaderProps) {
  const pathname  = usePathname()

  return (
    <header className="flex items-center justify-between px-16 py-4 bg-[var(--dark)] font-bold" style={{boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)"}}>
      <p className="text-3xl text-[var(--orange)]">
        Centro Social Santa Rita de Cássia
      </p>
        {!loginPage ? 
      <nav className="flex gap-10">
          <Link href="/assistidos" className={`text-xl text-[var(--${pathname === '/assistidos' ? 'orange' : 'light'})]`}>Lista de assistidos</Link>
          <Link href="/cadastrar" className={`text-xl text-[var(--${pathname === '/cadastrar' ? 'orange' : 'light'})]`}>Página de cadastro</Link>
          <Link href="/" className="text-xl text-[var(--light)]">Sair</Link>
      </nav>
        : null}
        
    </header>
  );
}
