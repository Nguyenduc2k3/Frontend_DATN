import { Link } from "react-router-dom";
import { links } from "../components/HeaderLinks"
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setHeaderSubmenu, setProductCategory } from "../redux/nextSlice";

const HeaderSubmenu = () => {

    const selectedSexCategory = useSelector((state) => state.next.sexCategory)

    const [hoveredLink, setHoveredLink] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredLink(index);
    };

    const handleMouseLeave = () => {
        setHoveredLink(null);
    };

    const dispatch = useDispatch();

    const handleSubmenuChange = (submenuName) => {
        dispatch(setProductCategory(null))
        dispatch(setHeaderSubmenu(submenuName))
    }


    return (
        <>
            {links.map((link, index) => (
                <div key={index}>
                    <div className="px-3 text-left md:cursor-pointer group" onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
                        <h1 className="py-4 hover:scale-110 font-bold  decoration-[1px] cursor-pointer duration-300 ease-out 0.3s"
                        >
                            {link.name ? (
                                <Link
                                    onClick={() => handleSubmenuChange(link.name)}
                                    to={`${selectedSexCategory?.toLowerCase()}${link.dir}`}
                                >
                                    {link.name}
                                </Link>
                            ) : (
                                <Link to={link.dir}>{link.name}</Link>
                            )}
                        </h1>
                        {link.submenu && hoveredLink === index && (
                            <div>
                                <div className="absolute top-12 hidden group-hover:block hover:block">
                                    <div className="py-3">
                                        <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45">
                                        </div>
                                    </div>
                                    <div className="bg-white p-4 px-10">
                                        {link.sublinks.filter((sublink) => {
                                            if (selectedSexCategory === 'men') {
                                                return !sublink.name.toLowerCase().includes('skirts') && !sublink.name.toLowerCase().includes('clutch bags') && !sublink.name.toLowerCase().includes('necklaces') && !sublink.name.toLowerCase().includes('earrings');
                                            } else if (selectedSexCategory === 'women') {
                                                return !sublink.name.toLocaleLowerCase().includes('mocassins');
                                            }
                                            return true;
                                        })
                                            .map((sublink, subIndex) => (
                                                <h1 key={subIndex} className="text-sm text-gray-600 my-3">
                                                    <Link to={`${selectedSexCategory}/${link.name.toLowerCase()}/${sublink.name.toLowerCase()}`} className="hover:text-yellow-600 px-2">{sublink.name}</Link>
                                                </h1>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                        }
                    </div>
                </div>
            ))}
        </>
    )
}

export default HeaderSubmenu
