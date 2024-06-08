// import React, { useState } from 'react';
// import List from './List';
// import axios from 'axios';
 
// const Home = () => {
 
//     const [userField, setUserField] = useState({
//         name: "",
//         email: "",
//         password: ""
//     });
 
//     const changeUserFieldHandler = (e) => {
//         setUserField({
//             ...userField,
//             [e.target.name]: e.target.value
//         });
//         //console.log(userField);
 
//     }
//     const [loading,setLoading]=useState()
 
//     const onSubmitChange = async (e) => {
//         e.preventDefault();
//         try {
//             const responce= await axios.post("http://127.0.0.1:8000/api/addnew", userField);
//             console.log(responce)
//             setLoading(true);
//         } catch (err) {
//             console.log("Something Wrong");
//         }
//     }
//     if(loading){
//         return <Home/>
//     }
 
//     return (
//         <div className="container">
//             <h2 className='w-100 d-flex justify-content-center p-3'>React JS Laravel 10 REST API CRUD (Create, Read, Update and Delete) | Axios Mysql</h2>
//                 <div className='row'>
//                     <div className='col-md-4'>
//                         <h3>Add Your Detail</h3>
//                         <form>
//                             <div className="mb-3 mt-3">
//                                 <label className="form-label"> Full Name:</label>
//                                 <input type="text" className="form-control" id="name" placeholder="Enter Your Full Name" name="name" onChange={e => changeUserFieldHandler(e)} />
//                             </div>
//                             <div className="mb-3 mt-3">
//                                 <label className="form-label">Email:</label>
//                                 <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" onChange={e => changeUserFieldHandler(e)} required/>
//                             </div>
//                             <div className="mb-3 mt-3">
//                                 <label className="form-label">Password:</label>
//                                 <input type="text" className="form-control" id="password" placeholder="Enter password" name="password" onChange={e => changeUserFieldHandler(e)} required/>
//                             </div>
                             
//                             <button type="submit" className="btn btn-primary" onClick={e => onSubmitChange(e)}>Add User</button>
//                         </form>
//                     </div>
//                     <div className='col-md-8'>
//                         <List />
//                     </div>
//                 </div>
//         </div>
//     )
// };
 
// export default Home;



// import Banner from "../components/Banner";
// import Products from "../components/Products";
// import FeaturedProducts from "../components/FeaturedProducts";
// import Newsletter from "./Newsletter";
// import { useEffect, useState } from "react";
// // import { allProductsData } from "../api/Api";
// import { useSelector } from "react-redux";

// export default function Home() {

//     const [filteredProducts, setFilteredProducts] = useState([]);
//     const selectedSexCategory = useSelector((state) => state.next.sexCategory)


//     useEffect(() => {
//         const fetchData = async () => {
//             const products = await allProductsData();
//             setFilteredProducts(products.filter((item) => item.category === selectedSexCategory.toLowerCase()));

//         };

//         fetchData();
//     }, [selectedSexCategory])

//     return (
//         <div>
//             <Banner />
//             <Products products={filteredProducts} />
//             <FeaturedProducts products={filteredProducts} />
//             <Newsletter />
//         </div>
//     );
// }

import Banner from "../components/Banner";
import Products from "../components/Products";
import Newsletter from "./Newsletter";
import { useEffect, useState } from "react";
import axios from 'axios';

export default function Home() {
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/products');
                const products = response.data;
                
                // Cập nhật filteredProducts bằng dữ liệu từ API
                setFilteredProducts(products);
            } catch (error) {
                console.error("Failed to fetch products", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <Banner />
            <Products products={filteredProducts} />
            <Newsletter />
        </div>
    );
}
