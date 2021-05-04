import { ButtonHTMLAttributes } from "react";

export default function Button({ children, className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button className={`
            cursor-pointer hover:bg-gray-100 transition-all 
            transform hover:scale-105 duration-150 ease-in-out 
            ${className ?? ""}
        `} {...props}>
            {children}
        </button>
    );
};
