"use client";

import Header from "@/components/Header";
import Input from "@/components/Input";
import TableRow from "@/components/TableRow";
import { useContext, useState } from "react";
import { AppContext } from "@/context/AppContext";

export default function Beneficiaries() {
  const { beneficiaries, setBeneficiaries, allBeneficiaries } =
    useContext(AppContext);
  const [searchText, setSearchText] = useState("");

  const search = (name: string) => {
    setBeneficiaries(allBeneficiaries);

    if (searchText.length > 0) {
      const filteredBeneficiaries = allBeneficiaries.filter((beneficiary) =>
        beneficiary.nome.toLowerCase().includes(name.toLowerCase())
      );
      setBeneficiaries(filteredBeneficiaries);
    } else {
      const filteredBeneficiaries = allBeneficiaries;
      setBeneficiaries(filteredBeneficiaries);
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center p-8">
        <div
          className="font-bold bg-[var(--medium)] text-[var(--dark)] rounded-xl grid grid-cols-2 gap-4 pl-4 pr-2 py-2 w-4/5"
          style={{ gridTemplateColumns: "3fr 1fr" }}
        >
          <Input
            type="text"
            innerText="Pesquisar:"
            label="name"
            placeholder="Digite o nome do assistido"
            className="flex gap-4 items-center w-full"
            classNameInput="w-full"
            onChange={handleSearchChange}
          />
          <button
            className="rounded-xl font-bold bg-[var(--dark)] text-[var(--light)] py-2 px-6 hover:text-[var(--orange)] transition duration-400 hover:scale-105"
            style={{ boxShadow: "4px 4px 6px rgba(0, 0, 0, 0.4)" }}
            onClick={() => search(searchText)}
          >
            Pesquisar/Resetar
          </button>
        </div>
        <table className="my-8 border-collapse border-2 border-[var(--bg)] w-4/5">
          <thead className="bg-[var(--dark)] text-[var(--medium)]">
            <tr>
              <th className="border border-[var(--bg)] w-300 py-1">Nome</th>
              <th className="border border-[var(--bg)] w-20 py-2 px-4">
                Nascimento
              </th>
              <th className="border border-[var(--bg)] w-26 py-2 px-4">CPF</th>
              <th className="border border-[var(--bg)] py-2 px-4">X</th>
            </tr>
          </thead>
          {beneficiaries.map((beneficiaries) => (
            <TableRow
              birth={beneficiaries.nascimento.replace(/-/g, "/")}
              name={beneficiaries.nome}
              id={beneficiaries.id}
              CPF={beneficiaries.CPF}
              key={beneficiaries.id}
            />
          ))}
        </table>
      </main>
    </>
  );
}
