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
  CEP: string;
  rua: string,
        n: string,
        bairro: string,
        cidade: string,
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
  historico: [
    {
        data: string;
        descricao: string;
    }
  ];
};

type AppContextType = {
    beneficiaries: Beneficiary[];
    removeBeneficiary: (id: number) => void;
};

export const AppContext = createContext<AppContextType>({
    beneficiaries: [],
    removeBeneficiary: () => {},
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

      const removeBeneficiary = async (id: number) => {
        try {
          await fetch(`http://localhost:5000/assistidos/${id}`, {
            method: "DELETE",
          });
    
          setBeneficiaries((prevBeneficiaries) =>
            prevBeneficiaries.filter((beneficiary) => beneficiary.id !== id)
          );
        } catch (error) {
          console.error("Erro ao remover o beneficiário:", error);
        }
      };

  return <AppContext.Provider value={{ beneficiaries, removeBeneficiary }}>{children}</AppContext.Provider>;
}
