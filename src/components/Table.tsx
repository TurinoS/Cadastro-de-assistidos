import { RiDeleteBin5Fill } from 'react-icons/ri'

export default function Table() {
    return(
        <table className="my-8 border-collapse border-2 border-[var(--bg)]">
            <thead className="bg-[var(--dark)] text-[var(--medium)]">
                <tr>
                    <th className="border border-[var(--bg)] w-300 py-1">
                        Nome
                    </th>
                    <th className="border border-[var(--bg)] w-20 py-2 px-4">
                        Nascimento
                    </th>
                    <th className="border border-[var(--bg)] py-2 px-4">
                        X
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-[var(--light)] even:bg-[var(--medium)] hover:bg-[var(--orange)] transition duration-400">
                    <td className="lg:table-cell border border-[var(--bg)] cursor-pointer py-1 px-3">
                        Paulo Turino Silva
                    </td>
                    <td className="lg:table-cell border border-[var(--bg)] cursor-pointer py-1 px-2 text-center">
                        06/11/1994
                    </td>
                    <td className="lg:table-cell border border-[var(--bg)] cursor-pointer text-center">
                        <button className='text-[var(--dark)] pb-1 pt-2 px-2 hover:scale-110'><RiDeleteBin5Fill /></button>
                    </td>
                </tr>
                <tr className="bg-[var(--light)] even:bg-[var(--medium)] hover:bg-[var(--orange)] transition duration-400">
                    <td className="lg:table-cell border border-[var(--bg)] cursor-pointer py-1 px-3">
                        Giovana Miti Aibara Paschoal
                    </td>
                    <td className="lg:table-cell border border-[var(--bg)] cursor-pointer py-1 px-2 text-center">
                        06/11/1994
                    </td>
                    <td className="lg:table-cell border border-[var(--bg)] cursor-pointer text-center">
                        <button className='text-[var(--dark)] pb-1 pt-2 px-2 hover:scale-110'><RiDeleteBin5Fill /></button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}