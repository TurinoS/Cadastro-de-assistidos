"use client";

import Header from "@/components/Header";
import Input from "@/components/Input";
import { AppContext } from "@/context/AppContext";
import Link from "next/link";
import { useState, useContext } from "react";

interface BeneficiaryPageProps {
    params: {
      id: string;
    };
  }

export default function Register({ params }: BeneficiaryPageProps) {
  const { setAddBeneficiary, beneficiaries } = useContext(AppContext);
  const [success, setSuccess] = useState(false);

  const beneficiary = beneficiaries.find((b) => b.id === Number(params.id));

  const [newName, setnewName] = useState(beneficiary?.nome)
  const [newPhone, setnewPhone] = useState(beneficiary?.telefone)
  const [newRG, setnewRG] = useState(beneficiary?.RG)
  const [newCPF, setnewCPF] = useState(beneficiary?.CPF)
  const [newCU, setnewCU] = useState(beneficiary?.cadastroUnico)
  const [newBirth, setnewBirth] = useState(beneficiary?.nascimento)
  const [newCEP, setnewCEP] = useState(beneficiary?.CEP)
  const [newStreet, setnewStreet] = useState(beneficiary?.rua)
  const [newN, setnewN] = useState(beneficiary?.n)
  const [newBairro, setnewBairro] = useState(beneficiary?.bairro)
  const [newCity, setnewCity] = useState(beneficiary?.cidade)
  const [newMom, setnewMom] = useState(beneficiary?.nomeDaMae)
  const [newOcupation, setnewOcupation] = useState(beneficiary?.ocupacao)
  const [newIncome, setnewIncome] = useState(beneficiary?.renda)
  const [newCivilState, setnewCivilState] = useState(beneficiary?.estadoCivil)
  const [newSpouseName, setnewSpouseName] = useState(beneficiary?.conjuge.nome)
  const [newSpousePhone, setnewSpousePhone] = useState(beneficiary?.conjuge.telefone)
  const [newSpouseBirth, setnewSpouseBirth] = useState(beneficiary?.conjuge.nascimento)
  const [newDependentsNumber, setnewDependentsNumber] = useState(beneficiary?.numeroDeDependentes)
  const [newDependentsArray, setnewDependentsArray] = useState(beneficiary?.dependentes)

  const fillInputs = (data: any) => {
    setnewName(beneficiary?.nome)
    setnewPhone(beneficiary?.telefone)
    setnewRG(beneficiary?.RG)
    setnewCPF(beneficiary?.CPF)
    setnewCU(beneficiary?.cadastroUnico)
    setnewBirth(beneficiary?.nascimento)
    setnewCEP(beneficiary?.CEP)
    setnewStreet(beneficiary?.rua)
    setnewN(beneficiary?.n)
    setnewBairro(beneficiary?.bairro)
    setnewCity(beneficiary?.cidade)
    setnewMom(beneficiary?.nomeDaMae)
    setnewOcupation(beneficiary?.ocupacao)
    setnewIncome(beneficiary?.renda)
    setnewCivilState(beneficiary?.estadoCivil)
    setnewSpouseName(beneficiary?.conjuge.nome)
    setnewSpousePhone(beneficiary?.conjuge.telefone)
    setnewSpouseBirth(beneficiary?.conjuge.nascimento)
    setnewDependentsNumber(beneficiary?.numeroDeDependentes)
    setnewDependentsArray(beneficiary?.dependentes)
  }

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
    { length: Number(newDependentsNumber) },
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
        {beneficiary ? 
          <button className="px-14 py-4 mb-10 border-2 border-[var(--dark)] rounded-xl font-bold bg-[var(--medium)] text-[var(--dark)] hover:bg-[var(--dark)] hover:text-[var(--orange)] hover:border-[var(--orange)] transition duration-400"
            onClick={() => fillInputs(beneficiary)}
          >
            Preencher com os dados de {beneficiary?.nome}
          </button> :
          <button className="px-14 py-4 mb-10 border-2 border-[var(--white)] rounded-xl font-bold text-[var(--dark)]"
        >
          Aguarde por favor
        </button>
          }

        <form
          className="flex flex-col gap-x-4"
          onSubmit={(e) => {
            e.preventDefault();
            sendBeneficiaryDataToServer(newBeneficiary);
            setAddBeneficiary(false);
          }}
        >
          <h2 className="text-3xl font-bold mb-2" onClick={() => console.log(beneficiary)}>Dados</h2>
          <div className="flex flex-wrap gap-x-4">
            <Input
              type="text"
              label="name"
              innerText="Nome"
              placeholder="Nome"
              onChange={(e) => {
                (newBeneficiary.nome = e.target.value);
                setnewName(e.target.value);
              }}
              value={newName}
            />
            <Input
              type="date"
              label="birth"
              innerText="Data de nascimento"
              placeholder=""
              onChange={(e) => {
                (newBeneficiary.nascimento = e.target.value);
                setnewBirth(e.target.value);
              }}
              value={newBirth}
            />
            <Input
              type="phone"
              label="phone"
              innerText="Telefone"
              placeholder="(18) 99999-9999"
              onChange={(e) => {
                (newBeneficiary.telefone = e.target.value);
                setnewPhone(e.target.value);
              }}
              value={newPhone}
            />
            <Input
              type="text"
              label="mothersName"
              innerText="Nome da mãe"
              placeholder="Nome"
              onChange={(e) => {
                (newBeneficiary.nomeDaMae = e.target.value);
                setnewMom(e.target.value);
              }}
              value={newMom}
            />
            <Input
              type="text"
              label="RG"
              innerText="RG"
              placeholder="12.345.678-9"
              onChange={(e) => {
                (newBeneficiary.RG = e.target.value);
                setnewRG(e.target.value);
              }}
              value={newRG}
            />
            <Input
              type="text"
              label="CPF"
              innerText="CPF"
              placeholder="123.456.789-00"
              onChange={(e) => {
                (newBeneficiary.CPF = e.target.value);
                setnewCPF(e.target.value);
              }}
              value={newCPF}
            />
            <Input
              type="text"
              label="CU"
              innerText="Cadastro único"
              placeholder="CU12345"
              onChange={(e) => {
                (newBeneficiary.cadastroUnico = e.target.value);
                setnewCU(e.target.value);
              }}
              value={newCU}
            />
          </div>

          <h2 className="text-3xl font-bold mb-2 mt-10">Endereço</h2>
          <div className="flex flex-wrap gap-x-4">
            <Input
              type="text"
              label="CEP"
              innerText="CEP"
              placeholder="12.345-678"
              onChange={(e) => {
                (newBeneficiary.CEP = e.target.value);
                setnewCEP(e.target.value);
              }}
              value={newCEP}
            />
            <Input
              type="text"
              label="street"
              innerText="Rua"
              placeholder="Rua Prudente de Moraes"
              onChange={(e) => {
                (newBeneficiary.rua = e.target.value);
                setnewStreet(e.target.value);
              }}
              value={newStreet}
            />
            <Input
              type="text"
              label="house"
              innerText="nº"
              placeholder="712"
              onChange={(e) => {
                (newBeneficiary.n = e.target.value);
                setnewN(e.target.value);
              }}
              value={newN}
            />
            <Input
              type="text"
              label="neighborhood"
              innerText="Bairro"
              placeholder="Vila Maristela"
              onChange={(e) => {
                (newBeneficiary.bairro = e.target.value);
                setnewBairro(e.target.value);
              }}
              value={newBairro}
            />
            <Input
              type="text"
              label="city"
              innerText="Cidade"
              placeholder="Presidente Prudente"
              onChange={(e) => {
                (newBeneficiary.cidade = e.target.value);
                setnewCity(e.target.value);
              }}
              value={newCity}
            />
          </div>
          <h2 className="text-3xl font-bold mb-2 mt-10">Renda</h2>
          <div className="flex flex-wrap gap-x-4">
          <Input
              type="text"
              label="ocupation"
              innerText="Ocupação"
              placeholder="Ocupação"
              onChange={(e) => {
                (newBeneficiary.ocupacao = e.target.value);
                setnewOcupation(e.target.value);
              }}
              value={newOcupation}
            />
          <Input
              type="text"
              label="income"
              innerText="Renda familiar"
              placeholder="0,00"
              onChange={(e) => {
                (newBeneficiary.renda = e.target.value);
                setnewIncome(e.target.value);
              }}
              value={newIncome}
            />
          </div>

          <h2 className="text-3xl font-bold mb-2 mt-10">Estado civil</h2>
          <div className="flex flex-col gap-1">
            <select
              name="select"
              className="px-4 py-2 rounded-xl w-1/5"
              style={{ boxShadow: "4px 4px 6px rgba(0, 0, 0, 0.25)" }}
              onChange={(e) => {
                (newBeneficiary.estadoCivil = e.target.value);
                setnewCivilState(e.target.value);
              }}
              value={newCivilState}
            >
              <option value="Solteiro">Solteiro(a)</option>
              <option value="Casado">Casado(a)</option>
              <option value="Divorciado">Divorciado(a)</option>
              <option value="viuvo">Viúvo(a)</option>
            </select>
          </div>
          {newCivilState === "Casado" && (
            <div className="flex flex-wrap gap-x-4">
              <Input
                type="text"
                label="spouseName"
                innerText="Nome do cônjuge"
                placeholder="Nome"
                onChange={(e) => {
                  (newBeneficiary.conjuge.nome = e.target.value);
                  setnewSpouseName(e.target.value);
                }}
                value={newSpouseName}
              />
              <Input
                type="phone"
                label="spousePhone"
                innerText="Telefone do cônjuge"
                placeholder="(18) 99999-9999"
                onChange={(e) => {
                  (newBeneficiary.conjuge.telefone = e.target.value);
                  setnewSpousePhone(e.target.value);
                }}
                value={newSpousePhone}
              />
              <Input
                type="date"
                label="spouseBirth"
                innerText="Data de nascimento do cônjuge"
                placeholder=""
                onChange={(e) => {
                  (newBeneficiary.conjuge.nascimento = e.target.value);
                  setnewSpouseBirth(e.target.value);
                }}
                value={newSpouseBirth}
              />
            </div>
          )}

          <h2 className="text-3xl font-bold mb-2 mt-10">Dependentes</h2>
          {beneficiary?.dependentes.length && beneficiary?.dependentes.length > 0 &&
            <div className="mb-4">
              <p className="font-bold">Dependentes já cadastrados:</p>
              <div className="my-2">
                {beneficiary?.dependentes.map((dependente, index) => (
                  <div key={index}>
                  <p>Nome: {dependente.nome}</p>
                  {dependente.telefone && <p>Telefone: {dependente.telefone}</p>}
                  <p>Nascimento: {dependente.nascimento.replace(/-/g, '/')}</p>
                  </div>
                ))}
              </div>
              <p className="font-bold">por favor preencha novamente com os dependentes que já estavam cadastrados</p>
            </div>
          }
          <Input
            type="number"
            label="dependents"
            innerText="Número de depedentes"
            placeholder=""
            className="flex flex-col gap-1 w-1/4"
            onChange={(e) => {
              newBeneficiary.numeroDeDependentes = e.target.value;
              setnewDependentsNumber(e.target.value);
            }}
            value={newDependentsNumber}
          />
                    
          {newDependentsNumber !== "0" &&
            (() => {
              const dependentInputs = [];

              for (let i = 0; i < Number(newDependentsNumber); i++) {
                dependentInputs.push(
                  <div className="flex flex-wrap gap-x-4" key={i}>
                    <Input
                      type="text"
                      label={`dependentName${i}`}
                      innerText="Nome do dependente"
                      placeholder="Nome"
                      onChange={(e) => {
                        newDependents[i].nome = e.target.value;
                      }}
                    />
                    <Input
                      type="phone"
                      label={`dependentPhone${i}`}
                      innerText="Telefone do dependente"
                      placeholder="(18) 99999-9999"
                      onChange={(e) => {
                        (newDependents[i].telefone = e.target.value);
                      }}
                    />
                    <Input
                      type="date"
                      label={`dependentBirth${i}`}
                      innerText="Data de nascimento do dependente"
                      placeholder=""
                      onChange={(e) => {
                        (newDependents[i].nascimento = e.target.value);
                      }}
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
                value="Atualizar cadastro"
                className="self-start px-14 py-4 mt-10 border-2 border-[var(--dark)] rounded-xl font-bold bg-[var(--medium)] text-[var(--dark)] hover:bg-[var(--dark)] hover:text-[var(--orange)] hover:border-[var(--orange)] transition duration-400"
                style={{ boxShadow: "4px 4px 6px rgba(0, 0, 0, 0.4)" }}
                onClick={() => {
                  setNewBeneficiary({
                    ...newBeneficiary,
                    dependentes: newDependents,
                  });
                  setAddBeneficiary(true);
                }}
              />
            ) : (
              <Link
                href={`/assistidos/${beneficiary?.id}`}
                className="self-start px-8 py-4 mt-12 border-2 border-[var(--dark-green)] rounded-xl font-bold bg-[var(--light-green)] text-[var(--dark-green)] hover:bg-[var(--lighter-green)]"
              >
                Vizualizar cadastro
              </Link>
            )}
          </div>
        </form>
      </main>
    </>
  );
}
