import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';


const Navbar = () => {
    // state to manage the navbar's visibility
    const [nav, setNav] = useState(false);

    // toggle function to handle navbar display
    const handleNav = () => {
        setNav(!nav);
    };

    // Array containing nav items
    const navItems = [
        {id: 1, text:'Home'},
        {id: 2, text:'About'},
        {id: 3, text:'Project'},
        {id: 4, text:'Skills'},
        {id: 5, text:'Contact Me'},
    ];

    return (
    <nav className="sticky top-0 z-10 bg-white">
        <div className="max-w-5xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
            <p className="text-transparent bg-clip-text text-2xl font-bold bg-gradient-to-r from-black to-red-500">Kill</p>
            <div className="flex space-x-4 text-gray-900">
                {navItems.map(item => (
                    <a href="#" key={item.id} className='font-medium hover:text-red-600'> {item.text} </a>
                ))}
            </div>
            </div>
        </div>
    </nav>
      );
};

export default Navbar;