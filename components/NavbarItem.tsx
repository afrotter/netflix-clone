import React from 'react';

interface NavbarItemsProps {
    label: string;
}

const NavbarItem: React.FC<NavbarItemsProps> = () => {
    return (
        <div className="text-white cursor-pointer hover:text-gray-300 transition">
            Home
        </div>
    )
}

export default NavbarItem