import Recipe from '../../../components/Recipe/Recipe';

export default function Salada() {
    return(
        <div>
            <Recipe 
            name ="Salada Simples"
            picture="https://img.itdg.com.br/tdg/images/recipes/000/000/233/9940/9940_original.jpg?mode=crop&width=710&height=400"
            time="30 min"
            servings="6 porções"
            >
                <h2>Ingredientes</h2>

                <ul>
                    <li>1 alface americana</li>
                    <li>2 cenouras raladas</li>
                    <li>1 beterraba ralada</li>
                    <li>1 tomate sem pele e sem semente</li>
                    <li>1 cebola cortada em rodelas ou picada</li>
                </ul>

                <h3>Molho:</h3>
                
                <ul>
                    <li>1 colher (chá) de sal</li>
                    <li>1 pitada de açúcar</li>
                    <li>1 colher (sopa) de azeite extra virgem de oliva</li>
                    <li>2 a 3 colheres de vinagre</li>
                </ul>

                <h2>Modo de Preparo</h2>

                <ol>
                    <li>Lave bem todos os ingredientes.</li>
                    <li>Rasgue as folhas do alface para que fiquem menores. Rale as cenouras e a beterraba. O tomate, após estar sem pele e semente, deve ser picado. A cebola pode ser cortada em pedacinhos ou em rodelas, como preferir. Junte tudo.</li>
                </ol>

                <h3>Molho:</h3>

                <ol>
                    <li>Junte o açúcar, sal, azeite e vinagre em uma xícara.</li>
                    <li>Misture bem com uma colher e despeje sobre a salada.</li>
                    <li>Pronto!</li>
                </ol>

                <h3>Informações adicionais</h3>
                <p>O tomate pode ser substituído por tomate cereja; este cortado apenas ao meio.</p>
            </Recipe>
        </div>
    )
}