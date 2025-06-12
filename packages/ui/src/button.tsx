"use client";

interface ButtonProps {
  name: string;
  className?: string;
  onClick: () => void;
}

export const Button = ({ name, className, onClick }: ButtonProps) => {
  return (
    <button
      className={className}
      onClick={onClick}
    >
      {name}
    </button>
  );
};
