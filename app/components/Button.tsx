import React from 'react';

const Button = ({ label, onClick } : never) => {
    return (
        <button
            onClick={onClick}
            className="px-4 py-2 border text-white rounded-full hover:text-soft-orange hover:border-soft-orange transition-all duration-300">
            {label}
        </button>
    );
};

export default Button;