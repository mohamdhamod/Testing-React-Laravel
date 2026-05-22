import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Error, Loading } from './Loading';
import Similar from './Similar';
import ReactStars from 'react-stars';
import { useWishList } from '../context/WishListContext';
import { useCart } from '../context/CartContext';

const ProductDetails = () => {
    const { toggleItemWishList, list } = useWishList();
    const { toggleItemCart, cartList } = useCart();

    const { id } = useParams();

    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [count, setCount] = useState(1);

    const incCount = () => {
        if (count >= 5) {
            return alert("You can only purchase a maximum of 5 units per item.");
        }
        setCount(prev => prev + 1);
    };

    const decCount = () => {
        if (count <= 1) {
            return alert("The quantity cannot be less than 1.");
        }
        setCount(prev => prev - 1);
    };

    useEffect(() => {
        let isMounted = true;
        const fetchData = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/product/${id}`);
                if (isMounted) {
                    setProduct(res.data);
                    setLoading(false);
                }
            } catch (err) {
                if (isMounted) {
                    console.error(`Error while fetching products: ${err.message}`);
                    setError(err);
                    setLoading(false);
                }
            }
        };
        fetchData();
        return () => {
            isMounted = false;
        };
    }, [id]);

    const desc = `Experience all-day comfort with premium cushioning, breathable materials,
    and responsive grip engineered for daily wear. Designed for style and built for movement,
    this pair is ideal for city commutes, casual outings, and active weekends.`;

    return (
        <>
            {
                loading ? <Loading /> : error ? <Error error={error} /> : (
                    <div className='xs:w-[95vw] sm:w-[90vw] md:w-full md:max-w-screen-xl mx-auto my-6'>
                        <div className='md:mx-4 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_45px_rgba(15,23,42,0.08)]'>
                            <div className='grid xs:grid-cols-1 md:grid-cols-2'>
                                <div className='relative border-b border-slate-200 bg-slate-50/60 p-5 md:border-b-0 md:border-r md:p-8'>
                                    <span className='absolute left-5 top-5 rounded-full bg-gradient-to-r from-orange-500 to-amber-300 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-900'>
                                        {product.category === 'child' ? 'Kids' : product.category}
                                    </span>

                                    <button
                                        onClick={() => toggleItemWishList(product._id ?? product.id)}
                                        className='absolute right-5 top-5 z-20 grid h-9 w-9 place-items-center rounded-full border border-slate-200 bg-white text-sm shadow-sm transition hover:scale-110'
                                        aria-label='Toggle wishlist'
                                    >
                                        {list.includes(product._id ?? product.id) ? '❤️' : '🤍'}
                                    </button>

                                    <img src={product.img} alt={product.title} className='mx-auto mt-8 h-[300px] w-full max-w-[420px] object-contain md:h-[420px]' />

                                    <div className='mt-4 grid grid-cols-3 gap-2 text-center text-[11px] text-slate-600 md:text-xs'>
                                        <div className='rounded-xl border border-slate-200 bg-white py-2'>Secure Payment</div>
                                        <div className='rounded-xl border border-slate-200 bg-white py-2'>Fast Delivery</div>
                                        <div className='rounded-xl border border-slate-200 bg-white py-2'>Easy Return</div>
                                    </div>
                                </div>

                                <div className='flex flex-col p-5 md:p-8'>
                                    <p className='text-xs font-semibold uppercase tracking-[0.14em] text-slate-400'>{product.brand}</p>
                                    <p className='mt-1 text-2xl font-extrabold leading-tight text-slate-900 md:text-3xl'>{product.title}</p>

                                    <div className='mt-3 flex flex-wrap items-center gap-2'>
                                        <div className='flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-semibold text-slate-700'>
                                            {product.rating}
                                            <ReactStars
                                                count={5}
                                                value={product.rating}
                                                size={18}
                                                color2={'#FFD700'}
                                                color1={'#e7e7e7'}
                                                edit={false}
                                                half={true}
                                            />
                                        </div>
                                        <span className='text-sm text-slate-500'>{product.reviews} reviews</span>
                                        <span className='text-sm text-slate-500'>{product.orders ? `${product.orders} bought this month` : ''}</span>
                                    </div>

                                    <div className='mt-5 flex items-end gap-3'>
                                        <p className='text-3xl font-black text-slate-900'>
                                            {`\u20B9 ${new Intl.NumberFormat('en-IN').format(product.sellPrice)}`}
                                        </p>
                                        <p className='text-sm text-slate-400 line-through'>{product.mrp}</p>
                                        {product.discount ? (
                                            <span className='rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700'>{product.discount}% off</span>
                                        ) : null}
                                    </div>

                                    <div className='mt-6'>
                                        <p className='mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400'>Quantity</p>
                                        <div className='inline-flex items-center overflow-hidden rounded-full border border-slate-300'>
                                            <button onClick={decCount} className='h-10 w-10 text-lg font-bold text-slate-700 transition hover:bg-slate-100'>-</button>
                                            <p className='w-10 text-center font-semibold text-slate-900'>{count}</p>
                                            <button onClick={incCount} className='h-10 w-10 text-lg font-bold text-slate-700 transition hover:bg-slate-100'>+</button>
                                        </div>
                                    </div>

                                    <div className='mt-7 flex flex-col gap-2 sm:flex-row'>
                                        <button
                                            className='rounded-full border border-slate-900 bg-slate-900 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-slate-800'
                                            onClick={() => toggleItemCart(product._id ?? product.id)}
                                        >
                                            {cartList.includes(product._id ?? product.id) ? 'Remove from Cart' : 'Add to Cart'}
                                        </button>
                                        <button
                                            className='rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold uppercase tracking-wide text-slate-800 transition hover:border-slate-900 hover:text-slate-900'
                                        >
                                            Buy now
                                        </button>
                                    </div>

                                    <div className='mt-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-600'>
                                        Free shipping on prepaid orders. Estimated delivery in 2-5 business days.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='mt-8 rounded-2xl border border-slate-200 bg-white p-5 md:mx-4 md:p-6'>
                            <p className='text-xs font-semibold uppercase tracking-[0.14em] text-slate-400'>Product Overview</p>
                            <p className='mt-2 text-xl font-bold text-slate-900'>Description</p>
                            <p className='mt-3 max-w-3xl leading-7 text-slate-600'>{desc}</p>
                        </div>

                        <p className='mt-14 text-2xl font-black tracking-tight text-slate-900 md:mx-4'>You may also like</p>
                        <Similar gender={product.category} id={id} home={1} />
                    </div>
                )
            }
        </>
    );
}

export default ProductDetails;
