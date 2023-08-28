"use client";

import { ReactNode, createContext, useEffect, useState } from "react";

export type Beneficiary = {
  id: number;
  nome: string;
  telefone: string;
  RG: string;
  CPF: string;
  cadastroUnico: string;
  nascimento: string;
  CEP: string;
  rua: string;
  n: string;
  bairro: string;
  cidade: string;
  nomeDaMae: string;
  nomeDoPai: string;
  estadoCivil: string;
  conjuge: {
    nome: string;
    telefone: string;
    nascimento: string;
  };
  numeroDeDependentes: string;
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
  allBeneficiaries: Beneficiary[];
  setAddBeneficiary: React.Dispatch<React.SetStateAction<boolean>>;
  setBeneficiaries: React.Dispatch<React.SetStateAction<Beneficiary[]>>;
  removeBeneficiary: (id: number) => void;
};

export const AppContext = createContext<AppContextType>({
  beneficiaries: [],
  allBeneficiaries: [],
  setAddBeneficiary: () => {},
  setBeneficiaries: () => {},
  removeBeneficiary: () => {},
});

export function AppcontextProvider({ children }: { children: ReactNode }) {
  const [beneficiaries, setBeneficiaries] = useState<Beneficiary[]>([]);
  const [allBeneficiaries, setAllBeneficiaries] = useState<Beneficiary[]>([]);
  const [addBeneficiary, setAddBeneficiary] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(`http://localhost:5000/assistidos`);
      const dataJason = await data.json();
      setBeneficiaries(dataJason);
      setAllBeneficiaries(dataJason);
    }
    fetchData();
  }, [addBeneficiary]);

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

  return (
    <AppContext.Provider
      value={{
        beneficiaries,
        allBeneficiaries,
        setAddBeneficiary,
        setBeneficiaries,
        removeBeneficiary,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
