'use client'

import Header from "@/components/Header";
import Input from "@/components/Input";
import Link from "next/link";
import { useState } from 'react'

export default function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const USERNAME = "CSSR";
  const PASSWORD = "12345";
  
  return (
    <>
      <Header loginPage={true} />
      <main className="flex max-h-screen flex-col items-center p-24">
        <div
          className="flex flex-col gap-5 bg-[var(--light)] p-10 pb-6 rounded-xl"
          style={{ boxShadow: "4px 4px 6px rgba(0, 0, 0, 0.5)" }}
        >
          <h1 className="text-3xl text-center font-bold">Login</h1>
          <form className="flex flex-col gap-4">
            <Input
              type="text"
              innerText="Usuário"
              label="user"
              placeholder="Nome de usuário"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            <Input
              type="password"
              innerText="Senha"
              label="password"
              placeholder="Digite sua senha"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {userName === USERNAME && password === PASSWORD ? 
              <Link href='/assistidos'
                className="px-4 py-2 mt-4 text-center border-2 border-[var(--dark)] rounded-xl font-bold bg-[var(--medium)] text-[var(--dark)] hover:bg-[var(--dark)] hover:text-[var(--orange)] hover:border-[var(--orange)] transition duration-400"
                style={{ boxShadow: "4px 4px 6px rgba(0, 0, 0, 0.4)" }}
              >
                Entrar
              </Link> : 
              <p
                className="px-4 py-2 mt-4 text-center border-2 border-[var(--white)] rounded-xl font-bold bg-gray text-[var(--white)]"
              >
                Entrar
              </p>
            }
          </form>
        </div>
      </main>
    </>
  );
}
