import './index.scss';
import { useState } from 'react';


export default function VarEstado() {
    const [contador, setContador] = useState(0);

    //let contador = 0;

    function aumentar() {
        // contador++;
        if (contador < 10) {
            setContador(contador + 1);
            alert(contador);
        }
        // alert(contador);
        
    }

    function diminuir() {
        //contador--;
        if (contador > 0) {
            setContador(contador - 1);
        }
    }


    return (
        <div className='pagina-varestado pagina'>
            <header className='cabecalho'>
                <h1>ReactJS | Variável de Estado</h1>
            </header>

            <div className='secao'>
                <h1>Contador</h1>

                <div className='cont'>
                    <button onClick={aumentar}> + </button>
                    {contador}
                    <button onClick={diminuir}> - </button>
                </div>

            </div>
        </div>
    )
}