interface InfoFieldProps {
    name: string
    info: string
}

export default function InfoField({ name, info }: InfoFieldProps) {
    return(
        <div className="flex gap-2 items-center bg-[var(--bg)] py-2 px-4 rounded-lg" style={{boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)"}}>
            <p className="font-bold">{name}: </p>
            <p className="capitalize">{info}</p>
        </div>
    )
}