import React from "react";
import { Link } from "react-router-dom";
import { useWishList } from "../context/WishListContext";

const HorSlider = ({ product, home }) => {
    const { img, title, sellPrice, mrp, discount, brand, category, rating } =
        product;
    const productId = product._id ?? product.id;

    const { toggleItemWishList, list } = useWishList();
    const isLiked = list.includes(productId);

    return (
        <div>
            <div className="group relative xs:m-2 xs:text-xs md:text-sm xs:w-[190px] xs:h-[290px] md:w-[250px] md:h-[340px] flex flex-col rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div>
                    <button
                        onClick={() => {
                            toggleItemWishList(productId);
                        }}
                        className="z-20 absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full border border-slate-200 bg-white/95 shadow-sm"
                        aria-label="Toggle wishlist"
                    >
                        {isLiked ? "❤️" : "🤍"}
                    </button>

                    {rating > 3.9 && !home && (
                        <span className="absolute left-3 top-3 z-20 rounded-full bg-gradient-to-r from-orange-500 to-amber-300 px-2 py-1 text-[11px] font-semibold text-slate-900">
                            Best Seller
                        </span>
                    )}
                </div>

                <div className="xs:h-[56%] md:h-[58%] rounded-xl bg-slate-100/70 xs:text-sm md:text-base flex items-center justify-center overflow-hidden">
                    <Link to={`/product-details/${productId}`} className="h-full w-full">
                        <img src={img} alt={title} className="h-full w-full object-contain p-2 transition duration-500 group-hover:scale-105" loading="lazy" />
                    </Link>
                </div>

                <p className="line-clamp-2 mt-2 min-h-[42px] text-sm font-semibold text-slate-800 md:text-base">{title}</p>

                <div className="flex items-center justify-between text-slate-500 xs:text-[11px] md:text-xs">
                    <p>
                        {category === "child"
                            ? `Kids`
                            : category === "men"
                                ? `Men's`
                                : category === "women"
                                    ? `Women's`
                                    : "Unisex"}{" "}
                        Shoes
                    </p>
                    <p className="font-semibold text-slate-600">{brand}</p>
                </div>

                <div className="mt-auto flex justify-start items-center xs:gap-1 md:gap-2 pb-2 xs:text-xs pt-2">
                    <p className="font-black text-slate-900 xs:text-base md:text-lg">
                        {`\u20B9 ${new Intl.NumberFormat("en-IN").format(sellPrice)}`}
                    </p>
                    <p className="line-through text-slate-400 md:text-xs">{mrp ?? '-'}</p>
                    <p className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700">{discount}% off</p>
                </div>
            </div>
        </div>
    );
};

export default HorSlider;
