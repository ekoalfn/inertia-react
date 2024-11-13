<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TodoController extends Controller
{
    public function index(){
        return Inertia::render('Todo',[
            'todos' => Todo::latest()->paginate(4),
        ]);
    }

    public function store(Request $request){
        $data = $request->validate([
            'name' => 'required',
            'is_complete' => 'boolean'
        ],
        [
            'name.required' => 'Please enter a todo name'
        ]
        );

        Todo::create($data);

        return back()->with('message', 'Todo berhasil disimpan');
    }
}
