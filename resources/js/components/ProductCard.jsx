import React from 'react'
import { Link } from 'react-router-dom';
import { useWishList } from '../context/WishListContext';

const ProductCard = ({ product, home }) => {
    const { toggleItemWishList, list } = useWishList();

    const { img, title, sellPrice, brand, category, mrp, discount, rating } = product;
    const productId = product._id ?? product.id;

    const isLiked = list.includes(productId);

    return (
        <div
            className={`group relative xs:mx-1 my-2 xs:w-full xs:h-[305px] md:h-[390px] md:mx-2 flex flex-col rounded-2xl border border-slate-200 bg-white p-3 font-medium shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl`}>
            <button
                onClick={() => toggleItemWishList(productId)}
                className='absolute right-3 top-3 z-20 grid h-8 w-8 place-items-center rounded-full border border-slate-200 bg-white/95 shadow-sm transition hover:scale-110'
                aria-label='Toggle wishlist'
            >
                {isLiked ? '❤️' : '🤍'}
            </button>

            {rating > 3.9 && !home && (
                <span className='absolute left-3 top-3 z-20 rounded-full bg-gradient-to-r from-orange-500 to-amber-300 px-2 py-1 text-[11px] font-semibold text-slate-900'>
                    Best Seller
                </span>
            )}

            <Link to={`/product-details/${productId}`} className='flex h-full flex-col'>

                <div className='flex h-[56%] items-center justify-center overflow-hidden rounded-xl bg-slate-100/70'>
                    <img className='h-full w-full object-contain p-2 transition duration-500 group-hover:scale-105' src={img} alt={title} loading='lazy' />
                </div>

                <div className='mt-3 flex min-h-[72px] flex-col justify-between'>
                    <p className='line-clamp-2 text-sm font-semibold text-slate-800 md:text-base'>{title}</p>
                    <div className='flex justify-between text-[11px] text-slate-500 md:text-xs'>
                        <p className='font-semibold text-slate-600'>{brand}</p>
                        <p className='truncate pl-2'>{category == 'child' ? `Kids` : category == 'men' ? `Men's` : category === 'women' ? `Women's` : 'Unisex'} Shoes</p>
                    </div>
                </div>

                <div className='mt-auto flex items-center gap-2 pb-1 pt-2'>
                    <p className='text-base font-black text-slate-900 md:text-lg'>
                        {`\u20B9 ${new Intl.NumberFormat('en-IN').format(sellPrice)}`}
                    </p>
                    <p className='text-xs text-slate-400 line-through'>{mrp ?? '-'}</p>
                    <p className='rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700'>{discount}% off</p>
                </div>
            </Link >
        </div>
    )
}

export default ProductCard
