import './Sobre.css';

export default function Sobre () {

    return (
        <div className='sobre'>
                <h1 className='title'>BELLA NAPOLI</h1>
                <h2 className='subtitle'>restaurante italiano</h2>
                <img className='italy' src="/img/3.png"/>
            <div className='content'>
                <img className='img-content' src = "https://eggeduca.com/wp-content/uploads/2024/01/Gestao-de-equipe-de-cozinha.png"/>
                <p className='text-content'> No Bella Napoli, cada refeição é muito mais do que uma simples refeição — é uma verdadeira viagem ao coração da Itália. Com receitas autênticas e ingredientes de alta qualidade, cuidadosamente selecionados, buscamos proporcionar a você uma experiência única, trazendo o sabor genuíno da cozinha napolitana diretamente para a sua mesa. Nossas massas artesanais, feitas à mão com ingredientes frescos e locais, são preparadas com todo o carinho, oferecendo uma textura e sabor inconfundíveis. </p>
            </div>
        </div>

    );

}