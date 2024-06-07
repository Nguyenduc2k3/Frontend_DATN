import React from "react";
import ProductCard from "./ProductCard";

const Products = ({ products }) => {
    return (
        <div className="py-10">
            <div className="flex flex-col items-center gap-4">
                <h1 className="text-4xl py-5 font-bold text-center">TRENDING THIS WEEK</h1>
            </div>
            <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10">
                {products.slice(0, 4).map((item) => (
                    <ProductCard key={item._id} product={item} />
                ))}
            </div>
        </div>
    );
};

export default Products;
