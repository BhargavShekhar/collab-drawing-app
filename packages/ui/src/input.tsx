"use client"

export function Input({ label, type, placeholder, refernce }: {
    label: string,
    type: string,
    placeholder: string,
    refernce: React.Ref<HTMLInputElement>
}) {
    return (
        <div className="flex items-center w-full gap-4">
            <label className="w-12 text-right text-sm font-medium text-gray-700">
                {label}
            </label>
            <input
                type={type}
                placeholder={placeholder}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md"
                ref={refernce}
            />
        </div>
    )
}