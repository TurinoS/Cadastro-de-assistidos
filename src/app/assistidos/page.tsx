'use client'

import Header from "@/components/Header";
import Input from "@/components/Input";
import TableRow from "@/components/TableRow";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";

export default function Beneficiaries() {
  const { beneficiaries } = useContext(AppContext)
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center p-8">
        <div className="font-bold bg-[var(--medium)] text-[var(--dark)] rounded-xl flex gap-4 pl-4 pr-2 py-2">
          <Input
            type="text"
            innerText="Pesquisar:"
            label="name"
            placeholder="Digite o nome do assistido"
            className="flex gap-4 items-center"
          />
          <button
            className="rounded-xl font-bold bg-[var(--dark)] text-[var(--light)] py-2 px-4 hover:text-[var(--orange)] transition duration-400 hover:scale-105"
            style={{ boxShadow: "4px 4px 6px rgba(0, 0, 0, 0.4)" }}
          >
            Pesquisar
          </button>
        </div>
        <table className="my-8 border-collapse border-2 border-[var(--bg)]">
            <thead className="bg-[var(--dark)] text-[var(--medium)]">
                <tr>
                    <th className="border border-[var(--bg)] w-300 py-1">
                        Nome
                    </th>
                    <th className="border border-[var(--bg)] w-20 py-2 px-4">
                        Nascimento
                    </th>
                    <th className="border border-[var(--bg)] py-2 px-4">
                        X
                    </th>
                </tr>
            </thead>
            {beneficiaries.map((beneficiary) => (
              <TableRow birth={beneficiary.nascimento} name={beneficiary.nome} id={beneficiary.id} key={beneficiary.id} />
            ))}
          
        </table>
      </main>
    </>
  );
}
