import "./button.scss";
import React from "react";

type ButtonProps = {
    children: React.ReactNode,
    link?: string,
    type?: "button" | "submit" | "reset",
}

const Button: React.FC<ButtonProps> = ({children, link, type}) => {
    const handleClick = () => {
        if (link) {
            window.location.href = link;
        }
    }
    return <button
        className="button"
        onClick={handleClick}
        type={type}
    >{children}
    </button>;
};

export default Button;