import { useEffect } from "react"
import { useState } from "react"
import "./index.css";

export function Contador(){
    const [cont, setcont] = useState(0);
    const[counting, setcouting] = useState(false);
    let value = cont;

    useEffect(() =>{
        if(counting == true){
            setTimeout(() => setcont(cont+1),1000)
        }
    })

    function init(){
        setcouting(true);
    }

    function reset(){
        setcont(0);
    }
    
    function stop(){
        setcouting(false);
    }

    return (
        <main>
            <div className="box" >
                <h4>Cronometro</h4>
                <p>{value}</p>
                <button onClick={init} id="iniButton">Iniciar</button>
                <button onClick={reset} id="resetButton">Resetar</button>
                <button onClick={stop} id="stopButton">Parar</button>
            </div>
        </main>
    )
}
