import './index.scss'

export default function Eventos() {


    return (
        <div className='pagina-eventos pagina'>
            <header className='cabecalho'>
                <h1> ReactJS | Eventos </h1>
            </header>

            <section className='secao'>
                <h1> Entendendo eventos </h1>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Ad dolorem perferendis, ea esse nobis consequuntur odio 
                    culpa modi dignissimos. Placeat soluta asperiores libero 
                    tempore quasi quibusdam veritatis deleniti molestias labore!</p>

                    <input type="text" placeholder='Digite aqui alguma coisa' />

                    <select>
                        <option> Selecione </option>
                        <option> Item A </option>
                        <option> Item B </option>
                    </select>

                    <div className='grupo'>
                        <input type="checkbox" /> Opção 1
                        <input type="checkbox" /> Opção 2
                    </div>
                    <div className='grupo'>
                        <div>
                            <input type="radio" name="gpo" /> Opção 1
                        </div>
                        <div>
                            <input type="radio" name="gpo" /> Opção 2
                        </div>
                    </div>

                    <button> Clique aqui </button>

            </section>
        </div>
    )
}