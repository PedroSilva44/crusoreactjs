
import './index.scss';

import { Link } from 'react-router-dom';


export default function App() {
  return (
    <div className="pagina-app">
      <h1 className='titulo1'> 
        <i className='fa fa-heart'></i>
        Marcela 
        <i className='fa fa-heart'></i>
      </h1>
      <br />
      <h2> Tentando consquistar o amor da minha vida </h2>
      <br />
      <h4>Após te encontrar e te ver pela primeira vez, não sei como segurei. O coração já batia diferente, porém 
        ainda fui onde não devia e acabei me perdendo, me machucando, e machucando outra pessoa também, próxima sua eu sei 
        mas ainda assim, não é  desculpa para sermos algo se o amor for de verdade. Tipo, eu quero que seja de verdade! 
        Vamos fazer ser?
      </h4>
      <br />
      <ul>
        <li>
          <Link to='/contato'>Ir Para Contato</Link>
        </li>
      </ul>
    </div>
  );
}


