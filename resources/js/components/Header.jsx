import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Search from './Search';
import { useWishList } from '../context/WishListContext';
import { useCart } from '../context/CartContext';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { list } = useWishList();
    const { cartList } = useCart();

    const toggleMenu = () => setIsOpen(prev => !prev);

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/shoes/men', label: 'Men' },
        { path: '/shoes/women', label: 'Women' },
        { path: '/shoes/kids', label: 'Kids' },
        { path: '/about-us', label: 'About Us' },
    ];

    return (
        <nav className='sticky top-0 z-40 border-b border-slate-200/70 bg-white/85 text-sm shadow-[0_8px_30px_rgba(15,23,42,0.07)] backdrop-blur-md'>
            <div className='mx-auto flex w-full max-w-screen-xl flex-col px-4 py-3 md:flex-row md:items-center md:justify-between md:gap-4'>
                <div className='flex items-center justify-between'>
                <Link
                    to="/"
                    className="logo text-2xl font-black tracking-tight text-slate-900"
                    onClick={toggleMenu}
                >
                    ShoeVista
                    <span className='ml-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-300 px-2 py-0.5 text-[10px] uppercase tracking-[0.2em] text-slate-900'>
                        new
                    </span>
                </Link>

                <button
                    onClick={toggleMenu}
                    className="flex items-center rounded-full border border-slate-300 p-2 md:hidden"
                    aria-label="Toggle menu"
                >
                    {
                        isOpen ? (
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                                <path d="M3 21.32L21 3.32001" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M3 3.32001L21 21.32" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        )
                    }
                </button>
                </div>

                <div className={`flex flex-col gap-3 md:flex md:flex-row md:items-center md:gap-4 ${isOpen ? 'mt-3' : 'hidden md:flex'}`}>
                    <ul className='flex flex-col gap-1 md:flex-row md:gap-2'>
                        {navItems.map((item) => {
                            return (
                                <li key={item.path}>
                                    <NavLink
                                        to={item.path}
                                        onClick={toggleMenu}
                                        className={({ isActive }) => `rounded-full px-4 py-2 font-medium transition-all duration-200 ${isActive
                                            ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20'
                                            : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                                            }`}
                                    >
                                        {item.label}
                                    </NavLink>
                                </li>
                            );
                        })}
                    </ul>

                    <div className='h-6 w-px bg-slate-200 hidden md:block' />

                    <div className="flex items-center gap-3">
                        <Search />
                        <div className='flex items-center gap-2'>
                            <NavLink
                                to="/wishlist"
                                onClick={toggleMenu}
                                className='group rounded-full border border-slate-200 bg-white p-2 transition hover:border-slate-300 hover:shadow-sm'
                            >
                                <div className='relative'>
                                    <span className='absolute -right-2 -top-2 min-w-[18px] rounded-full bg-rose-500 px-1 text-center text-[10px] font-bold text-white'>
                                        {list.length > 0 ? list.length : ''}
                                    </span>
                                    <img src="/Navbar/wishlist.png" alt="wishlist" className='h-5 w-5 transition-transform group-hover:scale-110' />
                                </div>
                            </NavLink>
                            <NavLink
                                to="/cart"
                                onClick={toggleMenu}
                                className='group rounded-full border border-slate-200 bg-white p-2 transition hover:border-slate-300 hover:shadow-sm'
                            >
                                <div className='relative'>
                                    <span className='absolute -right-2 -top-2 min-w-[18px] rounded-full bg-slate-900 px-1 text-center text-[10px] font-bold text-white'>
                                        {cartList.length > 0 ? cartList.length : ''}
                                    </span>
                                    <img src="/Navbar/cart.png" alt="cart" className='h-5 w-5 transition-transform group-hover:scale-110' />
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;