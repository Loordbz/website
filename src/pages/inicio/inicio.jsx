import './inicio.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Home() {
  const [showDivCsharp, setShowDivCsharp] = useState(false);
  const [showDivSQL, setShowDivSQL] = useState(false);
  const [showDivNET, setShowDivNET] = useState(false);
  const [showDivHTML, setShowDivHTML] = useState(false);
  const [showDivCSS, setShowDivCSS] = useState(false);
  const [showDivJS, setShowDivJS] = useState(false);

  const onClick = (nomeDiv) => {
    if(nomeDiv === 'Csharp') {
      setShowDivCsharp(showDivCsharp === false ? true : false ) ;
      setShowDivSQL(false);
      setShowDivNET(false);
      setShowDivHTML(false);
      setShowDivCSS(false);
      setShowDivJS(false);
    }
    if(nomeDiv === 'SQL') {
      setShowDivSQL(showDivSQL === false ? true : false );
      setShowDivCsharp(false);
      setShowDivNET(false);
      setShowDivHTML(false);
      setShowDivCSS(false);
      setShowDivJS(false);
    }
    if(nomeDiv === 'NET') {
      setShowDivNET(showDivNET === false ? true : false );
      setShowDivCsharp(false);
      setShowDivSQL(false);
      setShowDivHTML(false);
      setShowDivCSS(false);
      setShowDivJS(false);
    }
    if(nomeDiv === 'HTML') {
      setShowDivHTML(showDivHTML === false ? true : false );
      setShowDivCsharp(false);
      setShowDivSQL(false);
      setShowDivNET(false);
      setShowDivCSS(false);
      setShowDivJS(false);
    }
    if(nomeDiv === 'CSS') {
      setShowDivCSS(showDivCSS === false ? true : false );
      setShowDivCsharp(false);
      setShowDivSQL(false);
      setShowDivNET(false);
      setShowDivHTML(false);
      setShowDivJS(false);
    }
    if(nomeDiv === 'JS') {
      setShowDivJS(showDivJS === false ? true : false );
      setShowDivCsharp(false);
      setShowDivSQL(false);
      setShowDivNET(false);
      setShowDivHTML(false);
      setShowDivCSS(false);
    }  
  }
  
  return (
    <>
      <div className="introducao">
        <div className="txt1">
          <h1>Olá,</h1>
        </div>
        <div className="txt2">
          <h2>Bem-vindo ao meu portifólio</h2>
        </div>
        <div className="txt3">
          <h3><Link to="/projetos">Vamos começar?</Link></h3>
        </div>
        <div className="linguagens">
          <img alt="Csharp" className="Csharp" onClick={() => onClick("Csharp")} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" />
          <img alt="SqlServer" className="Sql" onClick={() => onClick("SQL")} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg" />
          <img alt=".NET" className="NET" onClick={() => onClick("NET")} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-plain-wordmark.svg" />
          <img alt="HTML" className="HTML"onClick={() => onClick("HTML")} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" />
          <img alt="CSS" className="CSS" onClick={() => onClick("CSS")} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" />
          <img alt="Js" className="Js" onClick={() => onClick("JS")} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" />
        </div>
        {
          showDivCsharp ? 
          <div className="texto">
            <p>C# é a linguagem que eu mais trabalhei na minha carreira,</p>
            <p>possuo cursos na plataforma Alura, Udemy e DIO.</p>
            <p>Já usei C# desde desenvolvimento de jogos (hobby) </p>
            <p>até desenvolvimento de APIS (profissionalmente).</p>
          </div> 
          : null
        }
        {
          showDivSQL ? 
          <div className="texto">
            <p>SQL caminha lado a lado com C# na minha carreira, possuo</p>
            <p>cursos na plataforma Alura, Udemy. Utilizo a linguagem</p>
            <p>mais profissionalmente, desde criação de procedures,</p>
            <p>views, triggers, utilização de profiler e afins.</p>
          </div> 
          : null
        }
        {
          showDivNET ? 
          <div className="texto">
            <p>.NET e seu vasto ecossistema, </p>
            <p>utilizo ASP.NET e VB.</p>
          </div> 
          : null
        }
        {
          showDivHTML ? 
          <div className="texto">
            <p>Por ser uma linguagem de marcação e muito utilizada para</p>
            <p>desenvolvimento WEB, tenho projetos em apenas HTML, CSS e JS</p>
            <p>utilizo profissionalmente na estruturas do ASP.NET, ReactJS.</p>
          </div> 
          : null
        }
        {
          showDivCSS ? 
          <div className="texto">
            <p>Por ser uma linguagem de marcação e muito utilizada para</p>
            <p>desenvolvimento WEB, tenho projetos em apenas HTML, CSS e JS</p>
            <p>utilizo profissionalmente na estruturas do ASP.NET, ReactJS.</p>
          </div> 
          : null
        }
        {
          showDivJS ? 
          <div className="texto">
            <p>Por ser uma linguagem de marcação e muito utilizada para</p>
            <p>desenvolvimento WEB, tenho projetos em apenas HTML, CSS e JS</p>
            <p>utilizo profissionalmente na estruturas do ASP.NET, ReactJS.</p>
          </div> 
          : null
        }
      </div>
    </>
  )
}