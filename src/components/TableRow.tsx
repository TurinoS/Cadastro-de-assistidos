"use client";

import { useContext, useState } from "react";
import { AppContext } from "@/context/AppContext";
import Link from "next/link";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Beneficiary from "@/app/assistidos/[id]/page";

interface TableRowProps {
  id: number;
  name: string;
  birth: string;
  CPF: string;
}

export default function TableRow({ id, name, birth, CPF }: TableRowProps) {
  const { removeBeneficiary } = useContext(AppContext);
  const [deleteWarning, setDeleteWarning] = useState(false);

  const linkStyle = {
    display: "block",
    width: "100%",
    height: "100%",
    padding: "4px 12px",
    margin: 0,
    textDecoration: "none",
  };

  return (
    <tbody>
      {deleteWarning && (
        <td className="flex gap-6 pl-4 items-center bg-[var(--light-red)]">
          <p>Deletar cadastro de <span className="font-bold">{name}</span>?</p>
          <div className="flex gap-4">
            <button
              onClick={() => {
                removeBeneficiary(id);
                setDeleteWarning(false);
              }}
              className="px-4 py-1 border-2 border-[var(--dark)] rounded-xl font-bold bg-[var(--light-green)] text-[var(--dark)] hover:bg-[var(--dark)] hover:text-[var(--orange)] hover:border-[var(--orange)] transition duration-400"
            >
              Deletar
            </button>
            <button
              onClick={() => setDeleteWarning(false)}
              className="px-4 py-1 border-2 border-[var(--dark)] rounded-xl font-bold bg-[var(--medium)] text-[var(--dark)] hover:bg-[var(--dark)] hover:text-[var(--orange)] hover:border-[var(--orange)] transition duration-400"
            >
              Manter
            </button>
          </div>
        </td>
      )}
      <tr className={`${deleteWarning ? "bg-[var(--light-red)]" : id % 2 === 0 ? "bg-[var(--medium)]" : "bg-[var(--light)]"} hover:bg-[var(--orange)] transition duration-400`}>
        <td className="lg:table-cell border border-[var(--bg)] capitalize">
          <Link href={`/assistidos/${id}`} style={linkStyle}>
            {name}
          </Link>
        </td>
        <td className="lg:table-cell border border-[var(--bg)] text-center">
          <Link href={`/assistidos/${id}`} style={linkStyle}>
            {birth}
          </Link>
        </td>
        <td className="lg:table-cell border border-[var(--bg)] text-center">
          <Link href={`/assistidos/${id}`} style={linkStyle}>
            {CPF}
          </Link>
        </td>
        <td className="lg:table-cell border border-[var(--bg)] text-center">
          <button
            className="text-[var(--dark)] pb-1 pt-2 px-2 hover:scale-110"
            onClick={() => setDeleteWarning(!deleteWarning)}
          >
            <RiDeleteBin5Fill />
          </button>
        </td>
      </tr>
    </tbody>
  );
}
