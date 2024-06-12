// import React from "react";
// import "./App.css";
// import Header from "./components/Header.js";

// import Home from "./components/Home";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import View from "./components/View";
// import Edit from "./components/Edit";

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Header />
//         <Routes>
//           <Route exact path="/" element={<Home />} />
//           <Route exact path="/view/:id" element={<View />} />
//           <Route exact path="/edit/:id" element={<Edit />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;


import Home from "./components/Home";
import Header from "./components/Header.js"
import Footer from "./components/Footer.js";
import {
    createBrowserRouter,
    Outlet,
    RouterProvider,
    ScrollRestoration,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { links } from "./components/HeaderLinks.js";
import View from "./components/View";
import Edit from "./components/Edit";
import Product from "./components/ProductDetail.js";
import Cart from "./components/Cart.js";

const Layout = () => {


    return (
        <div>
            <Header />
            <ScrollRestoration />
            <Outlet >
                <Home />
            </Outlet>
            <Footer/>
        </div>
    );
};

const AppRouter = () => {

    const selectedSexCategory = useSelector((state) => state.next.sexCategory);

    const submenuOptions = ['clothing', 'shoes', 'bags', 'accessories', 'jewellery']

    const generateSubmenuRoutes = () => {
        return submenuOptions.map((submenuOption) => ({
            path: `/${selectedSexCategory}/${submenuOption}`,
            // element: <Clothing category={submenuOption} />,
        }));
    };


    const linksMenuRoute = () => {
        return links.flatMap((link) => {
            if (link.submenu) {
                return link.sublinks.map((sublink) => ({
                    path: `/${selectedSexCategory}${link.dir}/${sublink.name.toLowerCase()}`,
                    // element: <ShopCategory />,
                }))
            } else {
                return []
            }
        })
    }

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: '/',
                    element: <Home />,
                },
                ...generateSubmenuRoutes(),
                ...linksMenuRoute(),
                {
                    path: "/product/:id",
                    element: <Product />,
                },
                {
                    path: `/cart`,
                    element: <Cart />
                }
            ]
        }
    ]);

    return <RouterProvider router={router} />

}


function App() {

    return (
        <AppRouter />
    )
}

export default App

