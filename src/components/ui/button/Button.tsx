import "./button.scss";
import React from "react";
import {string} from "yup";

type ButtonProps = {
    children: React.ReactNode,
}

const Button: React.FC<ButtonProps> = ({children}) => {
    return <button className="button" type="submit">{children}</button>;
};

export default Button;