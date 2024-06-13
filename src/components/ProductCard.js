import React from 'react';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { addToCart } from '../redux/nextSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductCard = ({ product, view }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDetails = () => {
        const productId = product.id;
        navigate(`/product/${productId}`, { state: { product } });
    };

    const handleAddToCart = () => {
        dispatch(addToCart({
            _id: product.product_id,
            nameProduct: product.name_product,
            image: product.url,
            price: product.price,
            quantity: 1,
            description: product.description,
        }));
        toast.success(`${product.name_product} is added to the cart`);
    };

    return (
        <div className={`${view === 'list' ? 'flex group relative h-96' : 'group relative'}`}>
            <div onClick={handleDetails} className={`${view === "list" ? 'w-1/3 h-96 cursor-pointer overflow-hidden' : 'w-full h-96 cursor-pointer overflow-hidden'}`}>
                <img className={`${view === "list" ? 'w-full h-full object-cover group-hover:scale-110 duration-300' : 'w-full h-full object-cover group-hover:scale-110 duration-300'}`} src={product.url} alt="productImage" />
            </div>
            <div className="w-full border-[1px] px-2 py-4">
                <div className={`${view === 'list' ? 'flex-col' : 'flex justify-between items-center'}`}>
                    <div className='w-full justify-center items-center'>
                        <h2 className="text-base font-bold">{product?.name_product?.substring(0, 15)}</h2>
                        {view === 'list' && (
                            <div className='w-2/4 mb-5'>
                                <p className='text-sm text-gray-600'>{product.description}</p>
                            </div>
                        )}
                    </div>
                    <div className={`${view === 'list' ? 'flex relative overflow-hidden w-full' : 'flex justify-end gap-2 relative overflow-hidden w-44 text-sm'}`}>
                        <div className={`${view === 'list' ? 'flex-col transform group-hover:translate-x-24 transition-transform duration-500' : 'flex gap-2 transform group-hover:translate-x-24 transition-transform duration-500'}`}>
                            <p className="line-through text-gray-500">${product.price}</p>
                            <p className="font-semibold">${product.price_sale}</p>
                        </div>
                        <p onClick={handleAddToCart} className="absolute z-20 w-[100px] text-gray-500 hover:text-gray-900 flex items-center gap-1 top-0 transform -translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-500 ">
                            Add to cart <ArrowForwardOutlinedIcon />
                        </p>
                    </div>
                </div>
                <div className={`${view === 'list' ? 'w-1/3 bottom-2 absolute' : ''}`}>
                    <p className={`${view === 'list' ? 'text-base font-bold uppercase' : ''}`}>{product.name}</p>
                </div>
                {product.is_hot && (
                    <div className={`${view === 'list' ? 'absolute top-4 left-0' : 'absolute top-4 right-0'}`}>
                        <p className='bg-red-600 text-white font-semibold uppercase px-4 py-1'>Sale</p>
                    </div>
                )}
            </div>

            <ToastContainer
                position="top-left"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    );
};

export default ProductCard;
