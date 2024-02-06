import React from "react"

export const Button = ({ children = "...", classname }) => {
    return (
        <button className={`px-3 py-2 bg-slate-800 rounded-md text-slate-100 ${classname}`}>{children}</button>
    )
}
