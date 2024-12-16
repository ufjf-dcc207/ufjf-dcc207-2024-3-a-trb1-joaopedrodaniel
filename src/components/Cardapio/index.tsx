import Botao from './botões'
import Card from './card'
import './Cardapio.css'

export default function Cardapio () {
    return (
        <div className='cardapio'>
            <h1 className="titulo-cardapio">CARDÁPIO</h1>
            <div className='botoes'>
                <Botao />
                <Botao />
                <Botao />
            </div>
            <div className='cards'>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}