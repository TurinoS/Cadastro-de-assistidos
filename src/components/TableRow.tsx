"use client";

import Link from "next/link";
import { RiDeleteBin5Fill } from "react-icons/ri";

interface TableRowProps {
  id: number;
  name: string;
  birth: string;
}

export default function TableRow({ id, name, birth }: TableRowProps) {
  return (
    <tbody>
      <tr className="bg-[var(--light)] even:bg-[var(--medium)] hover:bg-[var(--orange)] transition duration-400">
        <td className="lg:table-cell border border-[var(--bg)] cursor-pointer py-1 px-3">
          <Link href={`/assistidos/${id}`}>{name}</Link>
        </td>
        <td className="lg:table-cell border border-[var(--bg)] cursor-pointer py-1 px-2 text-center">
          <Link href={`/assistidos/${id}`}>{birth}</Link>
        </td>
        <td className="lg:table-cell border border-[var(--bg)] cursor-pointer text-center">
          <button className="text-[var(--dark)] pb-1 pt-2 px-2 hover:scale-110">
            <RiDeleteBin5Fill />
          </button>
        </td>
      </tr>
    </tbody>
  );
}
