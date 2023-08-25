import Header from "@/components/Header";
import Input from "@/components/Input";
import Table from "@/components/Table";

export default function Beneficiaries() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center p-8">
        <div className="font-bold bg-[var(--medium)] text-[var(--dark)] rounded-xl flex gap-4 pl-4 pr-2 py-2">
          <Input
            type="text"
            innerText="Pesquisar:"
            label="name"
            placeholder="Digite o nome do assistido"
            className="flex gap-4 items-center"
          />
          <button
            className="rounded-xl font-bold bg-[var(--dark)] text-[var(--light)] py-2 px-4 hover:text-[var(--orange)] transition duration-400 hover:scale-105"
            style={{ boxShadow: "4px 4px 6px rgba(0, 0, 0, 0.4)" }}
          >
            Pesquisar
          </button>
        </div>
        <Table />
      </main>
    </>
  );
}
