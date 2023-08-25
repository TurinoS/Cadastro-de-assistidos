import Input from "@/components/Input";

export default function Register() {
  return (
    <main className="p-8">
      <form className="flex flex-col gap-x-4">

        {/* Dados principais */}
        <div className="flex flex-wrap gap-x-4">
        <Input type="text" label="name" innerText="Nome" placeholder="" />
        <Input type="date" label="birth" innerText="Data de nascimento" placeholder="" />
        <Input type="phone" label="phone" innerText="Telefone" placeholder="" />
        <Input type="number" label="RG" innerText="RG" placeholder="" />
        <Input type="number" label="CPF" innerText="CPF" placeholder="" />
        <Input type="number" label="CU" innerText="CU" placeholder="" />
        </div>

        <div className="flex flex-wrap gap-x-4">
        <Input type="number" label="CEP" innerText="CEP" placeholder="" />
        <Input type="text" label="street" innerText="Rua" placeholder="" />
        <Input type="number" label="house" innerText="nº" placeholder="" />
        <Input type="text" label="neighborhood" innerText="Bairro" placeholder="" />
        </div>

        {/* Estado civil */}
        
        <div className="flex flex-col gap-1">
          <label className="text-lg" htmlFor="select">Estado civil</label>
          <select name="select" defaultValue="selecione" className="px-4 py-2 rounded-xl w-1/5" style={{ boxShadow: "4px 4px 6px rgba(0, 0, 0, 0.25)" }}>
            <option value="selecione" disabled>Selecione</option>
            <option value="solteiro">Solteiro(a)</option>
            <option value="casado">Casado(a)</option>
            <option value="divorciado">Divorciado(a)</option>
            <option value="viuvo">Viúvo(a)</option>
          </select>
        </div>
        <div className="flex flex-wrap gap-x-4">
          <Input type="text" label="spouseName" innerText="Nome do cônjuge" placeholder="" />
          <Input type="phone" label="spousePhone" innerText="Telefone do cônjuge" placeholder="" />
          <Input type="date" label="spouseBirth" innerText="Data de nascimento do cônjuge" placeholder="" />
        </div>
        
        {/* Dependentes */}

        <Input type="number" label="dependents" innerText="Número de depedentes" placeholder="" className="flex flex-col gap-1 w-1/5"/>
        <div className="flex flex-wrap gap-x-4">
          <Input type="text" label={`dependentName`} innerText="Nome do cônjuge" placeholder="" />
          <Input type="phone" label={`dependentPhone`} innerText="Telefone do cônjuge" placeholder="" />
          <Input type="date" label={`dependentBirth`} innerText="Data de nascimento do cônjuge" placeholder="" />
        </div>
        <input type="submit" value="Cadastrar" className="self-start px-8 py-2 mt-8 border-2 border-[var(--dark)] rounded-xl font-bold bg-[var(--medium)] text-[var(--dark)] hover:bg-[var(--dark)] hover:text-[var(--orange)] hover:border-[var(--orange)] transition duration-400"
            style={{ boxShadow: "4px 4px 6px rgba(0, 0, 0, 0.4)" }}/>
      </form>
    </main>
  );
}
