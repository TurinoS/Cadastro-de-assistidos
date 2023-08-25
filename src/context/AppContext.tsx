"use client";

import { ReactNode, createContext, useEffect, useState } from "react";

type Beneficiary = {
  id: number;
  nome: string;
  telefone: string;
  RG: string;
  CPF: string;
  cadastroUnico: string;
  nascimento: string;
  endereco: string;
  nomeDaMae: string;
  nomeDoPai: string;
  estadoCivil: string;
  conjuge: {
    nome: string;
    telefone: string;
    nascimento: string;
  };
  dependentes: [
    {
      nome: string;
      telefone: string;
      nascimento: string;
    }
  ];
};

type AppContextType = {
    beneficiaries: Beneficiary[],
};

export const AppContext = createContext<AppContextType>({
    beneficiaries: []
});

export function AppcontextProvider({ children }: { children: ReactNode }) {
    const [beneficiaries, setBeneficiaries] = useState<Beneficiary[]>([])

    useEffect(() => {
        async function fetchData() {
          const data = await fetch(`http://localhost:5000/assistidos`);
          const dataJason = await data.json();
          setBeneficiaries(dataJason);
        }
        fetchData();
      }, []);

  return <AppContext.Provider value={{ beneficiaries }}>{children}</AppContext.Provider>;
}
