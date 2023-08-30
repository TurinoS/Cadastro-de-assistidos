"use client";

import Header from "@/components/Header";
import InfoField from "@/components/InfoField";
import { useContext, useEffect, useState } from "react";
import { AppContext, Beneficiary } from "@/context/AppContext";
import { differenceInYears } from 'date-fns';
import Link from "next/link";
import { BiSolidEditAlt } from 'react-icons/bi';

interface BeneficiaryPageProps {
  params: {
    id: string;
  };
}

export default function BeneficiaryPage({ params }: BeneficiaryPageProps) {
  const { beneficiaries } = useContext(AppContext);
  const [newDate, setNewDate] = useState('');
  const [newHistory, setNewHistory] = useState('');
  const [historyUpdated, setHistoryUpdated] = useState(false)

  useEffect(() => {
    setHistoryUpdated(false);
  }, [historyUpdated]);

  const beneficiary = beneficiaries.find((b) => b.id === Number(params.id));

  if (!beneficiary) {
    return <div className="text-4xl text-center mt-20">Carregando...</div>;
  }

async function addHistoryToBeneficiary(beneficiaryToUpdate: any, newHistory: string, newDate: string) {
  try {
    
    const historyItem = {
      data: newDate,
      descricao: newHistory,
    };

    beneficiaryToUpdate.historico.push(historyItem);

    const updateResponse = await fetch(`https://ancient-occipital-gigantoraptor.glitch.me/assistidos/${beneficiaryToUpdate.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(beneficiaryToUpdate),
    });

    if (updateResponse.ok) {
      console.log("Histórico adicionado com sucesso!");
    } else {
      console.error("Falha ao adicionar histórico");
    }
  } catch (error) {
    console.error("Ocorreu um erro:", error);
  }
}

const handleSubmit = async () => {
  await addHistoryToBeneficiary(beneficiary, newHistory, newDate);
};

async function removeHistoryFromBeneficiary(historyItemToRemove: any) {
  try {
    if (beneficiary) {
      beneficiary.historico  = beneficiary.historico.filter(
        (item: any) => item.data !== historyItemToRemove.data || item.descricao !== historyItemToRemove.descricao
      ) as Beneficiary['historico'];

      const updateResponse = await fetch(
        `https://ancient-occipital-gigantoraptor.glitch.me/assistidos/${beneficiary.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(beneficiary),
        }
      );

      if (updateResponse.ok) {
        console.log("Histórico removido com sucesso!");
      } else {
        console.error("Falha ao remover histórico");
      }
    } else {
      console.error("Beneficiário não definido");
    }
  } catch (error) {
    console.error("Ocorreu um erro:", error);
  }
}

function calculateAge(dateOfBirth: any) {
  const birthDate = new Date(dateOfBirth);
  const currentDate = new Date();
  
  const ageInYears = differenceInYears(currentDate, birthDate);

  return ageInYears.toString();
}

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[var(--light)] py-4 px-24">
        <div className="flex gap-6 items-center justify-center">
          <h2 className="text-5xl my-6 mb-10 font-bold text-[var(--dark)] underline capitalize">
            {beneficiary.nome}
          </h2>
          <Link
            href={`/cadastrar/${params.id}`}
            className="pr-4 pl-2 py-2 border-2 border-[var(--dark)] rounded-xl font-bold bg-[var(--medium)] text-[var(--dark)] hover:bg-[var(--dark)] hover:text-[var(--orange)] hover:border-[var(--orange)] transition duration-400"
          >
            <span className="float-left mr-2 text-2xl"><BiSolidEditAlt /></span>Editar cadastro
          </Link>
        </div>

        <div className="flex flex-wrap border-2 border-[var(--white)] rounded-2xl">
          <div className="p-4 bg-[var(--light)] w-full p-2">
            <h3 className="font-bold text-2xl pb-2">Dados</h3>
            <div className="flex gap-4 flex-col">
              <div className="flex gap-2 flex-wrap">
                {beneficiary.nascimento && <InfoField name="Nascimento" info={beneficiary.nascimento.replace(/-/g, '/')} />}
                {beneficiary.telefone && <InfoField name="Telefone" info={beneficiary.telefone} />}
                {beneficiary.nomeDaMae && <InfoField name="Nome da mãe" info={beneficiary.nomeDaMae} />}
              </div>
              <div className="flex gap-2 flex-wrap">
                {beneficiary.RG && <InfoField name="RG" info={beneficiary.RG} />}
                {beneficiary.CPF && <InfoField name="CPF" info={beneficiary.CPF} />}
                {beneficiary.cadastroUnico && <InfoField name="Cadastro único" info={beneficiary.cadastroUnico} />}
              </div>
            </div>
          </div>
          <div className="p-4 bg-[var(--light)] w-full p-2">
            <h3 className="font-bold text-2xl pb-2">Renda</h3>
            <div className="flex gap-2 flex-wrap">
              {beneficiary.ocupacao && <InfoField name="Ocupação" info={beneficiary.ocupacao} />}
              {beneficiary.renda && <InfoField name="Renda familiar" info={beneficiary.renda} />}
            </div>
          </div>
          <div className="p-4 bg-[var(--light)] w-full p-2">
            <h3 className="font-bold text-2xl pb-2">Endereço</h3>
            <div className="flex gap-2 flex-wrap">
              {beneficiary.CEP && <InfoField name="CEP" info={beneficiary.CEP} />}
              {beneficiary.rua && <InfoField name="Rua" info={beneficiary.rua} />}
              {beneficiary.n && <InfoField name="nº" info={beneficiary.n} />}
              {beneficiary.bairro && <InfoField name="Bairro" info={beneficiary.bairro} />}
              {beneficiary.cidade && <InfoField name="Cidade" info={beneficiary.cidade} />}
            </div>
          </div>
          <div className="p-4 bg-[var(--light)] w-full p-2">
            <h3 className="font-bold text-2xl pb-2">Estado civil</h3>
            <div className="flex gap-2 flex-wrap">
              {beneficiary.estadoCivil && <InfoField name="Estado civil" info={beneficiary.estadoCivil} />}
              {beneficiary.estadoCivil === "Casado" && (
                <>
                  {beneficiary.conjuge.nome && <InfoField
                    name="Nome (cônjuge)"
                    info={beneficiary.conjuge.nome}
                  />}
                  {beneficiary.conjuge.telefone && <InfoField
                    name="Telefone (cônjuge)"
                    info={beneficiary.conjuge.telefone}
                  />}
                  {beneficiary.conjuge.nascimento && <InfoField
                    name="Data de nascimento"
                    info={beneficiary.conjuge.nascimento.replace(/-/g, '/')}
                  />}
                </>
              )}
            </div>
          </div>
          {beneficiary.dependentes.some((dependente) => dependente.nome.trim() !== "") && (
            <div className="p-4 bg-[var(--light)] w-full p-2">
              <h3 className="font-bold text-2xl pb-2">Dependentes</h3>
              <div className="flex flex-col gap-2 flex-wrap">
                {beneficiary.dependentes.map((dependente, index) => (
                  <>{dependente.nome != "" &&
                  <div key={index} className="flex gap-2 flex-wrap">
                    <InfoField name="Nome" info={dependente.nome} />
                    {dependente.nascimento && <InfoField name="Idade" info={`${calculateAge(dependente.nascimento)} anos`} />}
                    {dependente.telefone && <InfoField name="Telefone" info={dependente.telefone} />}
                    {dependente.nascimento && <InfoField name="Nascimento" info={dependente.nascimento.replace(/-/g, '/')} />}
                  </div>
                }</>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="p-4 w-full p-2 my-4 border-2 border-[var(--white)] rounded-2xl">
          <h3 className="font-bold text-3xl pb-2 text-center">Histórico</h3>
          <div className="grid grid-cols-2 gap-4" style={{ gridTemplateColumns: "2fr 1fr" }}>
            <div className="flex flex-col gap-2">
              {beneficiary.historico.slice().reverse().map((atendimento, index) => (
                <>
                {atendimento.data &&
                <div className="flex gap-1" key={index}>
                  <h4 className="p-4 bg-[var(--white)] rounded-xl font-bold">
                    {atendimento.data.replace(/-/g, '/')}
                  </h4>
                  <p className="p-4 bg-[var(--white)] rounded-xl">
                    {atendimento.descricao != "" && atendimento.descricao}
                  </p>
                  <button 
                    className="h-6 w-6 bg-[var(--white)] rounded-xl font-bold hover:bg-[var(--light-red)] text-center"
                    onClick={() => {
                      removeHistoryFromBeneficiary(atendimento);
                      setHistoryUpdated(true);
                    }}
                  >
                    x
                  </button>
                </div>
                }</>
              ))}
            </div>
            <form
              className="p-2 mr-10 bg-[var(--dark)] rounded-lg w-1/3 flex flex-col gap-2 justify-self-end"
              style={{ height: "402px", width: "335px" }}
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
                setHistoryUpdated(true);
                setNewHistory('');
                setNewDate('');
              }}
            >
              <div className="flex flex-col gap-1">
                <label
                  className="text-lg text-center font-bold text-[var(--white)]"
                  htmlFor="date"
                >
                  Último atendimento
                </label>
                <input
                  className="px-4 py-2 rounded-xl"
                  type="date"
                  name="date"
                  id="date"
                  onChange={(e) => setNewDate(e.target.value)}
                  value={newDate}
                />
              </div>
              <textarea
                placeholder="Descreva o atendimento"
                rows={10}
                className="px-4 py-2 rounded-xl"
                onChange={(e) => setNewHistory(e.target.value)}
                value={newHistory}
              />
              <input
                type="submit"
                value="Adicionar"
                className="px-4 py-2 border-2 border-[var(--dark)] rounded-xl font-bold bg-[var(--medium)] text-[var(--dark)] hover:bg-[var(--dark)] hover:text-[var(--orange)] hover:border-[var(--orange)] transition duration-400"
              />
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
