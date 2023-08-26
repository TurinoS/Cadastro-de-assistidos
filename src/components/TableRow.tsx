"use client";

import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import Link from "next/link";
import { RiDeleteBin5Fill } from "react-icons/ri";

interface TableRowProps {
  id: number;
  name: string;
  birth: string;
  CPF: string;
}

export default function TableRow({ id, name, birth, CPF }: TableRowProps) {
  const { removeBeneficiary } = useContext(AppContext);

  const linkStyle = {
    display: "block",
    width: "100%",
    height: "100%",
    padding: "4px 12px", // Remova qualquer preenchimento
    margin: 0, // Remova qualquer margem
    textDecoration: "none", // Remova qualquer decoração de texto, como sublinhado
  };

  return (
    <tbody>
      <tr className="bg-[var(--light)] even:bg-[var(--medium)] hover:bg-[var(--orange)] transition duration-400">
        <td className="lg:table-cell border border-[var(--bg)]">
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
            onClick={() => removeBeneficiary(id)}
          >
            <RiDeleteBin5Fill />
          </button>
        </td>
      </tr>
    </tbody>
  );
}
