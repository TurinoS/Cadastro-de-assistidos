"use client";

import Header from "@/components/Header";
import Input from "@/components/Input";
import { useState } from "react";

export default function Register() {
  const [dependents, setDependents] = useState("0");
  const [civilState, setCivilState] = useState("");

  return (
    <>
      <Header />
      <main className="p-20 pt-12">
        <form className="flex flex-col gap-x-4">
          <h2 className="text-3xl font-bold mb-2">Dados</h2>
          <div className="flex flex-wrap gap-x-4">
            <Input
              type="text"
              label="name"
              innerText="Nome"
              placeholder="Nome"
            />
            <Input
              type="date"
              label="birth"
              innerText="Data de nascimento"
              placeholder=""
            />
            <Input
              type="phone"
              label="phone"
              innerText="Telefone"
              placeholder="(18) 99999-9999"
            />
            <Input
              type="number"
              label="RG"
              innerText="RG"
              placeholder="12.345.678-9"
            />
            <Input
              type="number"
              label="CPF"
              innerText="CPF"
              placeholder="123.456.789-00"
            />
            <Input
              type="number"
              label="CU"
              innerText="CU"
              placeholder="CU12345"
            />
          </div>

          <h2 className="text-3xl font-bold mb-2 mt-10">Endereço</h2>
          <div className="flex flex-wrap gap-x-4">
            <Input
              type="number"
              label="CEP"
              innerText="CEP"
              placeholder="12.345-678"
            />
            <Input
              type="text"
              label="street"
              innerText="Rua"
              placeholder="Rua Prudente de Moraes"
            />
            <Input type="text" label="house" innerText="nº" placeholder="712" />
            <Input
              type="text"
              label="neighborhood"
              innerText="Bairro"
              placeholder="Vila Maristela"
            />
            <Input
              type="text"
              label="city"
              innerText="Cidade"
              placeholder="Presidente Prudente"
            />
          </div>

          <h2 className="text-3xl font-bold mb-2 mt-10">Estado civil</h2>
          <div className="flex flex-col gap-1">
            <select
              name="select"
              defaultValue="selecione"
              className="px-4 py-2 rounded-xl w-1/5"
              style={{ boxShadow: "4px 4px 6px rgba(0, 0, 0, 0.25)" }}
              onChange={(e) => setCivilState(e.target.value)}
            >
              <option value="selecione" disabled>
                Selecione
              </option>
              <option value="solteiro">Solteiro(a)</option>
              <option value="casado">Casado(a)</option>
              <option value="divorciado">Divorciado(a)</option>
              <option value="viuvo">Viúvo(a)</option>
            </select>
          </div>
          {civilState === "casado" && (
            <div className="flex flex-wrap gap-x-4">
              <Input
                type="text"
                label="spouseName"
                innerText="Nome do cônjuge"
                placeholder="Nome"
              />
              <Input
                type="phone"
                label="spousePhone"
                innerText="Telefone do cônjuge"
                placeholder="(18) 99999-9999"
              />
              <Input
                type="date"
                label="spouseBirth"
                innerText="Data de nascimento do cônjuge"
                placeholder=""
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
            onChange={(e) => setDependents(e.target.value)}
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
                    />
                    <Input
                      type="phone"
                      label={`dependentPhone${i}`}
                      innerText="Telefone do dependente"
                      placeholder="(18) 99999-9999"
                    />
                    <Input
                      type="date"
                      label={`dependentBirth${i}`}
                      innerText="Data de nascimento do dependente"
                      placeholder=""
                    />
                  </div>
                );
              }

              return dependentInputs;
            })()}

          <input
            type="submit"
            value="Cadastrar"
            className="self-start px-14 py-4 mt-10 border-2 border-[var(--dark)] rounded-xl font-bold bg-[var(--medium)] text-[var(--dark)] hover:bg-[var(--dark)] hover:text-[var(--orange)] hover:border-[var(--orange)] transition duration-400"
            style={{ boxShadow: "4px 4px 6px rgba(0, 0, 0, 0.4)" }}
          />
        </form>
      </main>
    </>
  );
}
