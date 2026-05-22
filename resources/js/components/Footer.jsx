import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    const contactItems = [
        { src: "/Footer/telephone.png", alt: "Mobile", data: "+91 9876543210" },
        { src: "/Footer/email.png", alt: "Email", data: "shoevista@gmail.com" },
        { src: "/Footer/pin.png", alt: "Address", data: "ShoeVista, 45 Sapphire Road, Sector 22,<br />Gurgaon, Haryana, 122018, India" },

    ]

    return (
        <footer className='mt-14 w-full bg-[radial-gradient(circle_at_top,_#1f2937_0%,_#0f172a_45%,_#020617_100%)] px-4 pb-4 pt-10 text-sm text-slate-300'>
            <div className='mx-auto grid max-w-screen-xl gap-8 border-b border-slate-700/60 pb-8 md:grid-cols-4'>
                <div>
                    <p className='logo text-2xl font-black tracking-tight text-white'>ShoeVista</p>
                    <p className='mt-3 max-w-xs leading-6 text-slate-400'>
                        Premium footwear marketplace crafted for speed, comfort, and modern style.
                    </p>
                </div>

                <ul className='flex flex-col gap-3'>
                    <li className='text-base font-semibold text-white'>Quick Links</li>
                    <li><Link to="/about-us" className='transition hover:text-amber-300'>About us</Link></li>
                    <li><Link to="/cart" className='transition hover:text-amber-300'>Cart</Link></li>
                    <li><Link to="/wishlist" className='transition hover:text-amber-300'>Wishlist</Link></li>
                </ul>

                <ul className='flex flex-col gap-3'>
                    <li className='text-base font-semibold text-white'>Shop</li>
                    <li><Link to="/shoes/men" className='transition hover:text-amber-300'>Men</Link></li>
                    <li><Link to="/shoes/women" className='transition hover:text-amber-300'>Women</Link></li>
                    <li><Link to="/shoes/kids" className='transition hover:text-amber-300'>Kids</Link></li>
                </ul>

                <div>
                    <p className='text-base font-semibold text-white'>Contact</p>
                    <div className='mt-3 flex'>
                        <div className='flex flex-col items-baseline justify-center gap-2'>
                            {
                                contactItems.map((elem, id) => (
                                    <div className='flex items-start' key={id}>
                                        <img src={elem.src} alt={elem.alt} className='mr-2 mt-1 h-4 w-4 inline opacity-80' />
                                        <p className='leading-6 text-slate-300' dangerouslySetInnerHTML={{ __html: elem.data }} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <p className='mt-4 text-center text-xs text-slate-400'>
                © {new Date().getFullYear()} ShoeVista. Designed for premium shopping experiences.
            </p>
        </footer>

    )
}

export default Footer