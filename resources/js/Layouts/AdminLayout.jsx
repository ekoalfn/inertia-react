import { Link, usePage } from "@inertiajs/react";
import React from "react";

const AdminLayout = ({children}) => {
    const {component} = usePage();
    return (
        <>
            <header className="bg-black text-white py-8">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center">
                        <h2>Todo</h2>
                        <nav className="flex justify-between items-center grow ml-36">
                            <div className="flex gap-6 item-center justify-start">
                                <Link 
                                    href="/dashboard"
                                    className={`${
                                        component == "Dashboard" 
                                        ? "font-semibold text-indigo-500" 
                                        : ""
                                    }`}
                                >
                                    Dashboard
                                </Link>
                                
                                <Link 
                                    href="/todo" 
                                    className={`${
                                        component == "Dashboard" 
                                        ? "font-semibold text-indigo-500" 
                                        : ""
                                    }`}
                                >
                                    Todo
                                </Link>
                            </div>

                            <div>
                                User
                            </div>
                        </nav>
                    </div>
                </div>
            </header>

            <main className="mt-10">
                <div className="container mx-auto">
                    {children}
                </div>
            </main>
        </>
    )
}

export default AdminLayout