import Game from './game';
import './erro.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import ComoJogar from '../../IMG/spacebar.png';

function ErrorPage() {
  return (
    <>
    <Navbar />
    <div className='container'>
      <h1 className='textoErro'>
        A página não foi encontrada. 
        <br />Tudo bem, erros acontecem...
      </h1>
      <Game />
      <img className='teclado' src={ComoJogar} alt='teclado' />
    </div>
    <Footer />
    </>
  );
}

export default ErrorPage;