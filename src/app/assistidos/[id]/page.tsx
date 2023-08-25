import Header from "@/components/Header";
import InfoField from "@/components/InfoField";

interface BeneficiaryProps {
  name: string;
  info: string;
}

export default function Beneficiary() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[var(--light)] p-4">
        <div className="flex justify-center items-center gap-6 pb-6">
          <h2 className="text-4xl font-bold text-center text-[var(--dark)]">
            Paulo Turino Silva
          </h2>
          <p
            className="bg-[var(--bg)] py-2 px-4 rounded-3xl text-2xl"
            style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.25)" }}
          >
            06/11/1994
          </p>
        </div>

        <div className="flex flex-wrap">
          <div className="p-4 bg-[var(--light)] w-1/3 p-2 border-2 border-[var(--white)]">
            <h3 className="font-bold text-2xl pb-2">Contatos</h3>
            <div className="flex gap-2 flex-wrap">
              <InfoField name="Telefone" info="(18) 99666-7708" />
            </div>
          </div>
          <div className="p-4 bg-[var(--light)] w-1/3 p-2 border-2 border-[var(--white)]">
            <h3 className="font-bold text-2xl pb-2">Documentos</h3>
            <div className="flex gap-2 flex-wrap">
              <InfoField name="RG" info="48.298.451-x" />
              <InfoField name="CPF" info="418.078.668-07" />
              <InfoField name="CU" info="798.458.264-90" />
            </div>
          </div>
          <div className="p-4 bg-[var(--light)] w-1/3 p-2 border-2 border-[var(--white)]">
            <h3 className="font-bold text-2xl pb-2">Pais</h3>
            <div className="flex gap-2 flex-wrap">
              <InfoField
                name="Nome da mãe"
                info="Maria Regina Turino Da Silva"
              />
              <InfoField name="Nome do pai" info="Luiz Carlos da Silva" />
            </div>
          </div>
          <div className="p-4 bg-[var(--light)] w-full p-2 border-2 border-[var(--white)]">
            <h3 className="font-bold text-2xl pb-2">Endereço</h3>
            <div className="flex gap-2 flex-wrap">
              <InfoField name="CEP" info="19-020-520" />
              <InfoField name="Rua" info="12 de Outubro" />
              <InfoField name="nº" info="1153" />
              <InfoField
                name="Bairro"
                info="Jardim Bela Vista do alto da compadecida"
              />
              <InfoField name="Cidade" info="Presidente Prudente" />
            </div>
          </div>
          <div className="p-4 bg-[var(--light)] w-full p-2 border-2 border-[var(--white)]">
            <h3 className="font-bold text-2xl pb-2">Estado civil</h3>
            <div className="flex gap-2 flex-wrap">
              <InfoField name="Estado civil" info="Casado" />
              <InfoField
                name="Nome (cônjuge)"
                info="Giovana Miti Aibara Paschoal"
              />
              <InfoField name="Telefone (cônjuge)" info="(18) 99666-7708" />
              <InfoField name="Data de nascimento" info="05/25/1994" />
            </div>
          </div>
          <div className="p-4 bg-[var(--light)] w-full p-2 border-2 border-[var(--white)]">
            <h3 className="font-bold text-2xl pb-2">Dependentes</h3>
            <div className="flex flex-col gap-2 flex-wrap">
              <div className="flex gap-2 flex-wrap">
                <InfoField name="Nome" info="João Pedro Alo" />
                <InfoField name="Telefone" info="(18) 99666-7708" />
                <InfoField name="Nascimento" info="04/11/2020" />
              </div>
              <div className="flex gap-2 flex-wrap">
                <InfoField name="Nome" info="João Pedro Alo" />
                <InfoField name="Telefone" info="(18) 99666-7708" />
                <InfoField name="Nascimento" info="04/11/2020" />
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 w-full p-2 border-2 border-[var(--white)]">
          <h3 className="font-bold text-3xl pb-2 text-center">Histórico</h3>
          <div className="flex justify-between gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex gap-1">
                <h4 className="p-4 bg-[var(--white)] rounded-xl font-bold">
                  24/08/2023
                </h4>
                <p className="p-4 bg-[var(--white)] rounded-xl">
                  Recebeu uma cesta básica
                </p>
              </div>
              <div className="flex gap-1">
                <h4 className="p-4 bg-[var(--white)] rounded-xl font-bold">
                  24/08/2023
                </h4>
                <p className="p-4 bg-[var(--white)] rounded-xl">
                  Recebeu uma cesta básica
                </p>
              </div>
              <div className="flex gap-1">
                <h4 className="p-4 bg-[var(--white)] rounded-xl font-bold">
                  24/08/2023
                </h4>
                <p className="p-4 bg-[var(--white)] rounded-xl">
                  Recebeu uma cesta básica comprou comida correu atras do gato
                  comeu um pedaço de genipapo surrou a galinha bateu no marreco,
                  pulou do puleiro no pe do cavalo levou um coice criou um galo
                </p>
              </div>
              <div className="flex gap-1">
                <h4 className="p-4 bg-[var(--white)] rounded-xl font-bold">
                  24/08/2023
                </h4>
                <p className="p-4 bg-[var(--white)] rounded-xl">
                  Recebeu uma cesta básica comprou comida correu atras do gato
                  comeu um pedaço de genipapo surrou a galinha bateu no marreco,
                  pulou do puleiro no pe do cavalo levou um coice criou um galo
                </p>
              </div>
            </div>
            <form
              className="p-2 bg-[var(--dark)] rounded-lg"
              style={{ height: "402px" }}
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
                className="px-4 py-2 rounded-xl mt-2"
                style={{ width: "300px" }}
              />
              <input
                type="submit"
                value="Adicionar"
                className="px-4 py-2 w-full border-2 border-[var(--dark)] rounded-xl font-bold bg-[var(--medium)] text-[var(--dark)] hover:bg-[var(--dark)] hover:text-[var(--orange)] hover:border-[var(--orange)] transition duration-400"
              />
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
