"use client";

import Header from "@/components/Header";
import InfoField from "@/components/InfoField";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";

interface BeneficiaryProps {
  params: {
    id: string;
  };
}

export default function Beneficiary({ params }: BeneficiaryProps) {
  const { beneficiaries } = useContext(AppContext);

  const beneficiary = beneficiaries.find((b) => b.id === Number(params.id));

  if (!beneficiary) {
    return <div>Assistido não encontrado.</div>;
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[var(--light)] p-4">
        <div className="flex justify-center items-center gap-6 pb-6">
          <h2 className="text-4xl font-bold text-center text-[var(--dark)]">
            {beneficiary.nome}
          </h2>
          <p
            className="bg-[var(--bg)] py-2 px-4 rounded-3xl text-2xl"
            style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.25)" }}
          >
            {beneficiary.nascimento}
          </p>
        </div>

        <div className="flex flex-wrap">
          <div className="p-4 bg-[var(--light)] w-1/3 p-2 border-2 border-[var(--white)]">
            <h3 className="font-bold text-2xl pb-2">Contatos</h3>
            <div className="flex gap-2 flex-wrap">
              <InfoField name="Telefone" info={beneficiary.telefone} />
            </div>
          </div>
          <div className="p-4 bg-[var(--light)] w-1/3 p-2 border-2 border-[var(--white)]">
            <h3 className="font-bold text-2xl pb-2">Documentos</h3>
            <div className="flex gap-2 flex-wrap">
              <InfoField name="RG" info={beneficiary.RG} />
              <InfoField name="CPF" info={beneficiary.CPF} />
              <InfoField name="CU" info={beneficiary.cadastroUnico} />
            </div>
          </div>
          <div className="p-4 bg-[var(--light)] w-1/3 p-2 border-2 border-[var(--white)]">
            <h3 className="font-bold text-2xl pb-2">Pais</h3>
            <div className="flex gap-2 flex-wrap">
              <InfoField name="Nome da mãe" info={beneficiary.nomeDaMae} />
              <InfoField name="Nome do pai" info={beneficiary.nomeDoPai} />
            </div>
          </div>
          <div className="p-4 bg-[var(--light)] w-full p-2 border-2 border-[var(--white)]">
            <h3 className="font-bold text-2xl pb-2">Endereço</h3>
            <div className="flex gap-2 flex-wrap">
              <InfoField name="CEP" info={beneficiary.CEP} />
              <InfoField name="Rua" info={beneficiary.rua} />
              <InfoField name="nº" info={beneficiary.n} />
              <InfoField name="Bairro" info={beneficiary.bairro} />
              <InfoField name="Cidade" info={beneficiary.cidade} />
            </div>
          </div>
          <div className="p-4 bg-[var(--light)] w-full p-2 border-2 border-[var(--white)]">
            <h3 className="font-bold text-2xl pb-2">Estado civil</h3>
            <div className="flex gap-2 flex-wrap">
              <InfoField name="Estado civil" info={beneficiary.estadoCivil} />
              {beneficiary.estadoCivil === "Casado" && (
                <>
                  <InfoField
                    name="Nome (cônjuge)"
                    info={beneficiary.conjuge.nome}
                  />
                  <InfoField
                    name="Telefone (cônjuge)"
                    info={beneficiary.conjuge.telefone}
                  />
                  <InfoField
                    name="Data de nascimento"
                    info={beneficiary.conjuge.nascimento}
                  />
                </>
              )}
            </div>
          </div>
          {beneficiary.dependentes.length > 0 && (
            <div className="p-4 bg-[var(--light)] w-full p-2 border-2 border-[var(--white)]">
              <h3 className="font-bold text-2xl pb-2">Dependentes</h3>
              <div className="flex flex-col gap-2 flex-wrap">
                {beneficiary.dependentes.map((dependente, index) => (
                  <div key={index} className="flex gap-2 flex-wrap">
                    <InfoField name="Nome" info={dependente.nome} />
                    <InfoField name="Telefone" info={dependente.telefone} />
                    <InfoField name="Nascimento" info={dependente.nascimento} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="p-4 w-full p-2 border-2 border-[var(--white)]">
          <h3 className="font-bold text-3xl pb-2 text-center">Histórico</h3>
          <div className="grid grid-cols-2 gap-4" style={{ gridTemplateColumns: "2fr 1fr" }}>
            <div className="flex flex-col gap-2">
              {beneficiary.historico.map((atendimento, index) => (
                <div className="flex gap-1" key={index}>
                  <h4 className="p-4 bg-[var(--white)] rounded-xl font-bold">
                    {atendimento.data.replace(/-/g, '/')}
                  </h4>
                  <p className="p-4 bg-[var(--white)] rounded-xl">
                    {atendimento.descricao}
                  </p>
                </div>
              ))}
            </div>
            <form
              className="p-2 bg-[var(--dark)] rounded-lg w-1/3 flex flex-col gap-2"
              style={{ height: "402px", width: "335px" }}
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
                />
              </div>
              <textarea
                placeholder="Descreva o atendimento"
                rows={10}
                className="px-4 py-2 rounded-xl"
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
