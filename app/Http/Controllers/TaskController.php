<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;


class TaskController extends Controller
{
    public function getAll()
    {
        $tasks = Task::get()->toJson(JSON_UNESCAPED_UNICODE);
        return response($tasks, 200);
    }

    

}
