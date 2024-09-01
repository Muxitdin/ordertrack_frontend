import React from 'react'
import { LuUsers } from "react-icons/lu"

export const LoginPanel = () => {
    return (
        <div className="flex flex-col items-center text-white">
            <button className="flex flex-col items-center text-white cursor-pointer">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-black hover:bg-red-600 hover:text-white transition duration-300">
                    <LuUsers className="w-10 h-10" />
                </div>
                <span className="mt-2 text-lg">Log in into panel</span>
            </button>
        </div>
    )
}