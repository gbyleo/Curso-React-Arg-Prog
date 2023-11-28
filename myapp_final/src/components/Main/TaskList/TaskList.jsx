import "./TaskList.css/";
import TaskItem from "./TaskItem/TaskItem";
import AgregarTarea from "../../UI/AgregarTarea";
import { useState } from "react";



export default function TaskList() {

    return (
        <ul class="list-group">
            <h2>LISTADO DE TAREAS</h2>
            <TaskItem> </TaskItem>
        </ul>
    )
}




