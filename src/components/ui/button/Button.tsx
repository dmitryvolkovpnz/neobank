import "./button.scss";

type ButtonProps = {
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
    return <button className="button">{children}</button>;
  };

export default Button;