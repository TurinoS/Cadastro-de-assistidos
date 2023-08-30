"use client";

import Header from "@/components/Header";
import Input from "@/components/Input";
import { AppContext } from "@/context/AppContext";
import { set } from "date-fns";
import Link from "next/link";
import { useState, useContext } from "react";

export default function Register() {
  const { setAddBeneficiary } = useContext(AppContext);
  const [civilState, setCivilState] = useState("");
  const [dependents, setDependents] = useState("0");
  const [success, setSuccess] = useState(false);
  const [waiting, setWaiting] = useState(false);

  const [newBeneficiary, setNewBeneficiary] = useState({
    nome: "",
    telefone: "",
    RG: "",
    CPF: "",
    cadastroUnico: "",
    nascimento: "",
    CEP: "",
    rua: "",
    n: "",
    bairro: "",
    cidade: "",
    nomeDaMae: "",
    ocupacao: "",
    renda: "",
    situacao: "",
    estadoCivil: "",
    conjuge: {
      nome: "",
      telefone: "",
      nascimento: "",
    },
    numeroDeDependentes: "",
    dependentes: [
      {
        nome: "",
        telefone: "",
        nascimento: "",
      },
    ],
    historico: [
      {
        data: "",
        descricao: "",
      },
    ],
  });

  const newDependents = Array.from(
    { length: Number(newBeneficiary.numeroDeDependentes) },
    () => ({
      nome: "",
      telefone: "",
      nascimento: "",
    })
  );

  async function sendBeneficiaryDataToServer(data: any) {
    try {
      const response = await fetch("https://ancient-occipital-gigantoraptor.glitch.me/assistidos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSuccess(true);
        setWaiting(false);
      } else {
        console.error("Failed to submit data");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  return (
    <>
      <Header />
      <main className="py-20 px-36 pt-12">
        <form
          className="flex flex-col gap-x-4"
          onSubmit={(e) => {
            e.preventDefault();
            sendBeneficiaryDataToServer(newBeneficiary);
            setAddBeneficiary(false);
          }}
        >
          <h2 className="text-3xl font-bold mb-2">Dados</h2>
          <div className="flex flex-wrap gap-x-4">
            <Input
              type="text"
              label="name"
              innerText="Nome"
              placeholder="Nome"
              onChange={(e) => (newBeneficiary.nome = e.target.value)}
            />
            <Input
              type="date"
              label="birth"
              innerText="Data de nascimento"
              placeholder=""
              onChange={(e) => (newBeneficiary.nascimento = e.target.value)}
            />
            <Input
              type="phone"
              label="phone"
              innerText="Telefone"
              placeholder="(18) 99999-9999"
              onChange={(e) => (newBeneficiary.telefone = e.target.value)}
            />
            <Input
              type="text"
              label="mothersName"
              innerText="Nome da mãe"
              placeholder="Nome"
              onChange={(e) => (newBeneficiary.nomeDaMae = e.target.value)}
            />
            <Input
              type="text"
              label="RG"
              innerText="RG"
              placeholder="12.345.678-9"
              onChange={(e) => (newBeneficiary.RG = e.target.value)}
            />
            <Input
              type="text"
              label="CPF"
              innerText="CPF"
              placeholder="123.456.789-00"
              onChange={(e) => (newBeneficiary.CPF = e.target.value)}
            />
            <Input
              type="text"
              label="CU"
              innerText="Cadastro único"
              placeholder="CU12345"
              onChange={(e) => (newBeneficiary.cadastroUnico = e.target.value)}
            />
          </div>

          <h2 className="text-3xl font-bold mb-2 mt-10">Endereço</h2>
          <div className="flex flex-wrap gap-x-4">
            <Input
              type="text"
              label="CEP"
              innerText="CEP"
              placeholder="12.345-678"
              onChange={(e) => (newBeneficiary.CEP = e.target.value)}
            />
            <Input
              type="text"
              label="street"
              innerText="Rua"
              placeholder="Rua Prudente de Moraes"
              onChange={(e) => (newBeneficiary.rua = e.target.value)}
            />
            <Input
              type="text"
              label="house"
              innerText="nº"
              placeholder="712"
              onChange={(e) => (newBeneficiary.n = e.target.value)}
            />
            <Input
              type="text"
              label="neighborhood"
              innerText="Bairro"
              placeholder="Vila Maristela"
              onChange={(e) => (newBeneficiary.bairro = e.target.value)}
            />
            <Input
              type="text"
              label="city"
              innerText="Cidade"
              placeholder="Presidente Prudente"
              onChange={(e) => (newBeneficiary.cidade = e.target.value)}
            />
          </div>
          <h2 className="text-3xl font-bold mb-2 mt-10">Renda</h2>
          <div className="flex flex-wrap gap-x-4">
          <Input
              type="text"
              label="ocupation"
              innerText="Ocupação"
              placeholder="Ocupação"
              onChange={(e) => (newBeneficiary.ocupacao = e.target.value)}
            />
          <Input
              type="text"
              label="income"
              innerText="Renda familiar"
              placeholder="0,00"
              onChange={(e) => (newBeneficiary.renda = e.target.value)}
            />
          </div>

          <h2 className="text-3xl font-bold mb-2 mt-10">Estado civil</h2>
          <div className="flex flex-col gap-1">
            <select
              name="select"
              defaultValue="selecione"
              className="px-4 py-2 rounded-xl w-1/5"
              style={{ boxShadow: "4px 4px 6px rgba(0, 0, 0, 0.25)" }}
              onChange={(e) => {
                newBeneficiary.estadoCivil = e.target.value;
                setCivilState(e.target.value);
              }}
            >
              <option value="selecione" disabled>
                Selecione
              </option>
              <option value="Solteiro(a)">Solteiro(a)</option>
              <option value="Casado(a)">Casado(a)</option>
              <option value="Divorciado(a)">Divorciado(a)</option>
              <option value="Viúvo(a)">Viúvo(a)</option>
            </select>
          </div>
          {civilState === "Casado" && (
            <div className="flex flex-wrap gap-x-4">
              <Input
                type="text"
                label="spouseName"
                innerText="Nome do cônjuge"
                placeholder="Nome"
                onChange={(e) => (newBeneficiary.conjuge.nome = e.target.value)}
              />
              <Input
                type="phone"
                label="spousePhone"
                innerText="Telefone do cônjuge"
                placeholder="(18) 99999-9999"
                onChange={(e) =>
                  (newBeneficiary.conjuge.telefone = e.target.value)
                }
              />
              <Input
                type="date"
                label="spouseBirth"
                innerText="Data de nascimento do cônjuge"
                placeholder=""
                onChange={(e) =>
                  (newBeneficiary.conjuge.nascimento = e.target.value)
                }
              />
            </div>
          )}

          <h2 className="text-3xl font-bold mb-2 mt-10">Dependentes</h2>
          <Input
            type="number"
            label="dependents"
            innerText="Número de depedentes"
            placeholder=""
            className="flex flex-col gap-1 w-1/4"
            onChange={(e) => {
              newBeneficiary.numeroDeDependentes = e.target.value;
              setDependents(e.target.value);
            }}
          />
          {dependents !== "0" &&
            (() => {
              const dependentInputs = [];

              for (let i = 0; i < Number(dependents); i++) {
                dependentInputs.push(
                  <div className="flex flex-wrap gap-x-4" key={i}>
                    <Input
                      type="text"
                      label={`dependentName${i}`}
                      innerText="Nome do dependente"
                      placeholder="Nome"
                      onChange={(e) => (newDependents[i].nome = e.target.value)}
                    />
                    <Input
                      type="phone"
                      label={`dependentPhone${i}`}
                      innerText="Telefone do dependente"
                      placeholder="(18) 99999-9999"
                      onChange={(e) =>
                        (newDependents[i].telefone = e.target.value)
                      }
                    />
                    <Input
                      type="date"
                      label={`dependentBirth${i}`}
                      innerText="Data de nascimento do dependente"
                      placeholder=""
                      onChange={(e) =>
                        (newDependents[i].nascimento = e.target.value)
                      }
                    />
                  </div>
                );
              }

              return dependentInputs;
            })()}
          <div className="flex gap-10 items-center">
            {!success ? (
              <input
                type="submit"
                value="Cadastrar"
                className="self-start px-14 py-4 mt-10 border-2 border-[var(--dark)] rounded-xl font-bold bg-[var(--medium)] text-[var(--dark)] hover:bg-[var(--dark)] hover:text-[var(--orange)] hover:border-[var(--orange)] transition duration-400"
                style={{ boxShadow: "4px 4px 6px rgba(0, 0, 0, 0.4)" }}
                onClick={() => {
                  setNewBeneficiary({
                    ...newBeneficiary,
                    dependentes: newDependents,
                  });
                  setAddBeneficiary(true);
                  setWaiting(true);
                }}
              />
            ) : waiting ? (
              <p
                className="self-start px-8 py-4 mt-12 border-2 border-[var(--white)] rounded-xl font-bold bg-[var(--light)] text-[var(--dark)]"
              >
                Realizando cadastro...
              </p>
            ) : (
              <Link
                href="/assistidos"
                className="self-start px-8 py-4 mt-12 border-2 border-[var(--dark-green)] rounded-xl font-bold bg-[var(--light-green)] text-[var(--dark-green)] hover:bg-[var(--lighter-green)]"
              >
                Retornar à lista de assistidos
              </Link>
            )}
          </div>
        </form>
      </main>
    </>
  );
}
