import React from 'react';

interface ButtonProps {
    label: JSX.Element;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({label, onClick}) => {
    return (
        <button
            onClick={onClick}
            className="flex items-center px-4 py-2 text-white rounded-full bg-soft-grey hover:text-soft-orange transition-all duration-300">
            {label}
        </button>
    );
};

export default Button;