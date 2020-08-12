import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './style.css'

function TeacherItem () {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/53007583?s=460&u=e2af5ec14151de239ec40f401a58819413cfd675&v=4" alt="Eduardo Czpla"/>
            <div>
                <strong>Eduardo Czpla</strong>
                    <span>Química</span>
            </div>
            </header>
                <p>
                    Estusiasta das melhores tecnologias de química avançada.
                <br/><br/>
                    Apaixonado por explodir coisas em laborartório e por mudar a vida das pessoas através de experiencias.
                </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 20,00</strong>
                </p>
            <button type="button"> 
                <img src={whatsappIcon} alt="Whatsapp"/>
                Entrar em contato
            </button>
            </footer>
        </article>
    );
}

export default TeacherItem;