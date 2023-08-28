'use client'

import { usePathname } from "next/navigation";
import Link from "next/link";
import logo from "../assets/6971c6c2_1_cropped.png"
import Image from "next/image";

interface HeaderProps {
  loginPage?: boolean
}

export default function Header({ loginPage }: HeaderProps) {
  const pathname  = usePathname()

  return (
    <header className="flex items-center justify-between px-16 py-4 bg-[var(--dark)] font-bold sticky top-0" style={{boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)"}}>
      <div className="flex items-center gap-1">
        <Image src={logo} alt="logo" width={90} className="rounded-lg" />
        <p className="text-3xl text-[var(--orange)]">
          Centro Social Santa Rita de Cássia
        </p>
      </div>
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
