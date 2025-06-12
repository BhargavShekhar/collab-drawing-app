"use client"

export function Input({ label, type, placeholder }: {
    label: string,
    type: string,
    placeholder: string,
}) {
    return (
        <>
            <label>{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                style={{
                    padding: "7px",
                    borderRadius: "7px"
                }}
            />
        </>
    )
}