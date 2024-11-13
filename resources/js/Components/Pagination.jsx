import React from "react";
import { Link } from "@inertiajs/react";

const Pagination = ({todos}) => {
    const links = todos.links;
    const currentPage = todos.current_page;
    const lastpage = todos.last_page;
    return (
        <>
        <nav aria-label="Page navigation example">
            <ul className="flex items-center -space-x-px h-10 text-base">

                {links.map((link, i) => {
                    return (
                        <li key={i}>
                            <Link
                                href={link.url}
                                className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight text-black
                                    ${
                                        link.active ? "bg-gray-300" : "bg-white"
                                    }
                                    border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700
                                    ${
                                        i == 0 && "rounded-s-md"
                                    } 
                                    ${
                                        i == links.length - 1 && "rounded-e-md"
                                    }
                                    ${
                                        link.current
                                    }
                                    ${
                                        i == 0 && currentPage == 1 && "hidden"
                                    }
                                    ${
                                        currentPage == lastpage && i == links.length -1 && "hidden"
                                    }
                                `}
                            >
                            
                                <div 
                                    dangerouslySetInnerHTML={{
                                        __html: link.label,
                                    }}
                                />

                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
        </>

    )
}

export default Pagination