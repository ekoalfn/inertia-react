import Pagination from "@/Components/Pagination";
import AdminLayout from "@/Layouts/AdminLayout";
import { router, useForm, usePage } from "@inertiajs/react";
import React from "react";
import {BsPencilSquare} from "react-icons/bs";
import { FaRegTrashAlt} from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";

const Todo = ({todos}) => {

    const { flash, errors } = usePage().props;

    const {data, setData, reset} =  useForm({
        name: "",
    });
    
    const storeTodo = (e) =>{
        e.preventDefault();
        router.post('/todo', data, {
            onSuccess: () => {
                reset();
            },
        })
    };


    return (
       <AdminLayout>
            <div className="max-w-4xl mx-auto">
                <h2 className="font-semibold text-4xl my-8 text-center">Todo App</h2>

                {flash.message && (
                    <div className="py-2 px-4 rounded-md bg-green-300 text-center mb-6">
                        {flash.message}
                    </div>
                )}

                <form onSubmit={storeTodo}>
                    <div className="mb-6">
                        <div className="flex gap-4 items-center mb-6">
                            <input 
                                type="text" 
                                placeholder="Enter todo here" 
                                className="px-4 py-2 rounded-md grow" 
                                onChange={(e) => setData('name', e.target.value)}
                                value={data.name}
                            />
                            <button className="py-2 px-4 rounded-md bg-indigo-500">Save</button>
                        </div>

                        {errors.name && (
                            <p className="text-red-700 text-sm">
                                {errors.name}
                            </p>
                        )}
                    </div>
                </form>

                <div className="flex flex-col gap-4">
                    {todos.data.map((todo, i) => {
                        return (
                            <div className="flex justify-between items-center py-3 px-6 bg-green-300 rounded-md">
                                <h3>{todo.name}</h3>
                                <div className="flex items-center justify-center gap-2">
                                    <BsPencilSquare size={18}/>{"  "}
                                    <FaRegTrashAlt size={18}/>
                                </div>
                            </div>
                        )
                    })}
                    <div className="flex justify-between items-center py-3 px-6 bg-red-400 rounded-md">
                        <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
                        <div className="flex items-center justify-center gap-2">
                            <FaRegCircleCheck size={18}/>{"  "}
                            <FaRegTrashAlt size={18}/>
                        </div>
                    </div>
                </div>
                <div className="mt-8 flex justify-end items-center">
                    <Pagination todos={todos}/>
                </div>
            </div>
       </AdminLayout>
    );
}

export default Todo;