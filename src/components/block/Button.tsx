import React from "react";
import { NavLink } from "react-router-dom";

type Variant = "primary" | "secondary" | "danger";
type Size = "small" | "medium" | "large" | "neutral";

type ButtonProps = {
  text?: string;
  url?: string;
  variant?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large" | "neutral";
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
  className?: string;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isLoading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  text,
  url = "",
  variant = "primary",
  size = "medium",
  type = "button",
  fullWidth = false,
  isLoading = false,
  onClick,
  className = "",
  children,
  ...rest
}) => {
  // Define base styles
  const baseStyles =
    "font-nunito-sans border font-medium transition-all ease-in-out duration-500";

  // Define variant styles
  const variantStyles: Record<Variant, string> = {
    primary:
      "bg-deepOrange border-deepOrange shadow-primary-btn-shadow text-brandWhite hover:bg-deepOrange/70",
    secondary:
      "bg-brandWhite text-deepOrange border-deepOrange hover:text-deepOrange/70 hover:border-deepOrange/70",
    danger: "bg-red-500 text-brandWhite hover:bg-red-600 focus:ring-red-300",
  };

  // Define size styles
  const sizeStyles: Record<Size, string> = {
    small:
      "py-[8px] px-[30px] text-[13px] hover:py-[7px] hover:px-[29px]",
    medium:
      "py-[10px] px-[35px] hover:py-[9px] hover:px-[34px] text-[15px]",
    large:
      "py-[12px] px-[40px] text-[17px] hover:py-[11px] hover:px-[40px]",
    neutral: "text-sm",
  };

  // combine styles
  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${
    fullWidth ? "w-full" : ""
  } ${className}`;

  const content = isLoading ? "Loading..." : children || text;

  return url ? (
    <NavLink to={url} className={fullWidth ? "block w-full" : "inline-block"}>
      <button
        type={type}
        onClick={onClick}
        className={styles}
        disabled={isLoading}
        {...rest}
      >
        {content}
      </button>
    </NavLink>
  ) : (
    <button
      type={type}
      onClick={onClick}
      className={styles}
      disabled={isLoading}
      {...rest}
    >
      {content}
    </button>
  );
};

export default Button;
