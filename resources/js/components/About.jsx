import React from "react";

const About = () => {
    const highlights = [
        { title: "Premium Curation", description: "A carefully selected catalog from trusted global brands and rising performance labels." },
        { title: "Fast Fulfillment", description: "Reliable dispatch and transparent order tracking designed for stress-free delivery." },
        { title: "Customer First", description: "Support-focused shopping with easy returns, secure payments, and responsive service." },
    ];

    const metrics = [
        { label: "Products Listed", value: "15+" },
        { label: "Top Brands", value: "8" },
        { label: "Categories", value: "3" },
        { label: "Customer Rating", value: "4.8/5" },
    ];

    return (
        <div className="mx-auto mt-8 w-[95%] max-w-screen-xl">
            <section className="overflow-hidden rounded-3xl border border-slate-200 bg-[radial-gradient(circle_at_top_left,_#1e293b_0%,_#0f172a_45%,_#020617_100%)] p-6 text-white shadow-[0_25px_60px_rgba(15,23,42,0.22)] md:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">About ShoeVista</p>
                <h1 className="mt-3 text-3xl font-black leading-tight md:text-5xl">A Modern Footwear Platform Built For Everyday Performance</h1>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-200 md:text-base">
                    ShoeVista is a digital-first footwear destination focused on comfort, design quality, and a fast customer experience.
                    We combine curated selections, trusted product information, and seamless checkout so shoppers can discover the right pair without friction.
                </p>
            </section>

            <section className="mt-8 grid gap-4 md:grid-cols-4">
                {metrics.map((metric) => (
                    <article key={metric.label} className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
                        <p className="text-2xl font-black text-slate-900 md:text-3xl">{metric.value}</p>
                        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{metric.label}</p>
                    </article>
                ))}
            </section>

            <section className="mt-10 grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h2 className="text-2xl font-bold text-slate-900">Our Mission</h2>
                    <p className="mt-4 leading-7 text-slate-600">
                        We are building a reliable shopping experience where every product detail is clear, every interaction is intuitive,
                        and every purchase feels confident. From performance runners to daily lifestyle essentials, ShoeVista aims to make
                        quality footwear accessible with premium service standards.
                    </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h2 className="text-2xl font-bold text-slate-900">What Makes Us Different</h2>
                    <div className="mt-4 space-y-4">
                        {highlights.map((item) => (
                            <article key={item.title} className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                                <h3 className="font-semibold text-slate-900">{item.title}</h3>
                                <p className="mt-1 text-sm leading-6 text-slate-600">{item.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="my-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-bold text-slate-900">Built With A Balanced Frontend + Backend Stack</h2>
                <p className="mt-4 leading-7 text-slate-600">
                    The platform is powered by React on the frontend and Laravel on the backend, enabling scalable APIs, fast UI rendering,
                    and maintainable architecture. This setup allows us to deliver responsive experiences while keeping product, cart, wishlist,
                    and search flows reliable across devices.
                </p>
            </section>
        </div>

    );
};

export default About;
