import { useState } from 'react'
import Card from './card'
import './Cardapio.css'
import data from '../../../data-menu.json'

export default function Cardapio () {

    const [info, setInfo] = useState(data.bebidas)

    return (

        <div className='cardapio'>
            <h1 className="titulo-cardapio">CARDÁPIO</h1>
            <div className='botoes'>
                <button className="botao" onClick={()=>setInfo(data.bebidas)}>
                    <h3>Bebidas</h3>
                </button>
                <button className="botao" onClick={()=>setInfo(data.pratos)}>
                    <h3>Pratos</h3>
                </button>
                <button className="botao" onClick={()=>setInfo(data.sobremesas)}>
                    <h3>Sobremesas</h3>
                </button>
            </div>
            <div className='cards'>
                {info.map((alimento, index) => (
                    <Card nome={alimento.nome} preco={alimento.preco} imagem={alimento.imagem} key={index} />
                ))}
            </div>
        </div>

    )
}