import "./TaskItem.css/";


import AgregarTarea from "../../../UI/AgregarTarea";
import { useState } from "react";




export default function TaskItem() {

    const [input, setInput] = useState("");
    const [input2, setInput2] = useState("");
    const [array, setArray] = useState([]);


    const Agregar = () => {
        const newArray = [...array, input + " " + input2];
        setArray(newArray);
    }
    return (
        <div>
            <div>
                <ul>
                    {array.map((x) => {
                        return <li>{x}</li>;
                    })}

                </ul>
            </div>



            <div id="div_pAgrega">
                <label htmlFor="input">Id Tarea</label>
                <input type="number" placeholder="ingresar numero" value={input} onChange={(e) => setInput(e.target.value)} />
                <label htmlFor="input2">Nombre Tarea</label>
                <input placeholder="ingresar tarea" value={input2} onChange={(e) => setInput2(e.target.value)} />
                <div>
                <button class="btn btn-primary btn-nueva" onClick={() => Agregar()}>Agregar Tarea</button>
                          
             
                </div>
            </div>
        </div>

    )

}




/*esto sera un item*/




