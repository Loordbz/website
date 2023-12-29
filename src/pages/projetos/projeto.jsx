/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react';
import Cards from '../../components/Cards/cards'
import './projeto.css'

export default function Projeto() {
  const [projetos, setProjetos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5173/src/data/projetos.json')
    .then(response => response.json())
    .then(data => {
      setProjetos(data.data);
    });
  })
   
  return (
    <div>
      {  
        <section className='lista'>
        {
          projetos.map((projeto) => {
            return <Cards titulo={projeto.titulo} descricao={projeto.descricao} url={projeto.url} />
          })
        }
        </section> 
      }
    </div>
  )
}