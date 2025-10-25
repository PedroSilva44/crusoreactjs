import './index.scss'

export default function Eventos() {

    function clicou() {
        alert('Oie, o usuário acaba de clicar!');
    }

    function movimentouMouse() {
        alert('Salve chefe! o usuário acaba de movimentar o mouse!');
    }

    function alterouValor(e) {
        let novoValor = e.target.value; //string
        alert(`Eae patrão, alteraram aqui o input/select para: ${novoValor} hein!`);
    }

    function alterouCheck(e) {
        let novoValor = e.target.checked; //boolean
        alert(`Eae patrão, alteraram aqui o input[checkbox/radio] para: ${novoValor} hein!`);
    }



    return (
        <div className='pagina-eventos pagina'>
            <header className='cabecalho'>
                <h1> ReactJS | Eventos </h1>
            </header>

            <section className='secao'>
                <h1> Entendendo eventos </h1>

                <p onClick={clicou}  onMouseMove={movimentouMouse}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Ad dolorem perferendis, ea esse nobis consequuntur odio 
                    culpa modi dignissimos. Placeat soluta asperiores libero 
                    tempore quasi quibusdam veritatis deleniti molestias labore!</p>

                    <input onChange={alterouValor} type="text" placeholder='Digite aqui alguma coisa' />

                    <textarea onChange={alterouValor} placeholder='Digite aqui' >
                    </textarea>

                    <select onChange={alterouValor}>
                        <option> Selecione </option>
                        <option> Item A </option>
                        <option> Item B </option>
                    </select>

                    <div className='grupo'>
                        <input type="checkbox" onChange={alterouCheck} /> Opção 1
                        <input type="checkbox" /> Opção 2
                    </div>
                    <div className='grupo'>
                        <div>
                            <input type="radio" name="gpo" onChange={alterouCheck} /> Opção 1
                        </div>
                        <div>
                            <input type="radio" name="gpo" /> Opção 2
                        </div>
                    </div>

                    <button onClick={clicou}> Clique aqui </button>

            </section>
        </div>
    )
}