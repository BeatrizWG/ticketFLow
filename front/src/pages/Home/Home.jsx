import React from 'react'
import Header from '../../components/header/Header'
import "./Home.css"

const menuHome = [
  { label: "LOGIN |", href: "" },
  { label: "CADASTRO |", href: "/register" },
  { label: "SOBRE", href: "" },
];

const Home = () => {
  return (
    <> 
    <Header menuItems={menuHome}/>
    <section className='home'>
      <div className="left">
        <div className='content'>
          <h2>Bem-vindo ao TicketFlow </h2>
          <p>
             Nosso sistema foi desenvolvido para simplificar o rastreamento e a priorização
             de tickets reportados pelo time de QA. Aqui, você pode registrar os bugs identificados no Jira, 
             acompanhar seu status e garantir que as correções sejam tratadas com eficiência.
          </p>
          <ul>
            <li>▫️QAs: Reportem tickets de maneira rápida e organizada.</li>
            <li>▫️Engenheiros: Acompanhem os tickets em um só lugar.</li>
            <li>▫️Administradores: Definam prioridades e otimizem o fluxo  de trabalho.</li>
          </ul>
             </div>
        <div className='button'>
          <button>
            COMECE AGORA!
          </button>
        </div>
      </div>
      <div className='logoH'>
        <img src= "../logo.png" alt= "logo" />
      </div>
    </section>
    </> 
    
  )
}


export default Home