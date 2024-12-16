import './Card.css'

interface CardProps {
    nome: string,
    preco: string,
    imagem: string,
}

export default function Card ({nome, preco, imagem}: CardProps) {
    return (
        <div className="card">
            <img src={imagem} alt="" />
            <div className='info-alimentos'>
                <h3 className='nome-alimento'>{nome}</h3>
                <h3 className='preco-alimento'>{preco}</h3>
            </div>
        </div>
    )
}