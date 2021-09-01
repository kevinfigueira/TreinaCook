import Recipe from '../../../components/Recipe/Recipe';

export default function Risolis() {
    return(
        <div>
            <Recipe 
            name ="Risolis"
            picture="https://img.itdg.com.br/tdg/images/recipes/000/000/712/32495/32495_original.jpg?mode=crop&width=710&height=400"
            time="30 min"
            servings="0 porções"
            >
                <h2>Ingredientes</h2>

                <ul>
                    <li>2 copos de leite</li>
                    <li>1 colher (sopa) de manteiga ou margarina</li>
                    <li>1 colher (chá) de sal</li>
                    <li>2 copos de farinha de trigo</li>
                </ul>

                <h2>Modo de Preparo</h2>

                <ol>
                    <li>Ferva o leite, a manteiga e o sal.</li>
                    <li>Quando levantar fervura, jogar de uma vez os 2 copos de farinha.</li>
                    <li>Sovar bem a massa. Estique a massa em cima da pia (pode ser com as mãos), corte rodelas com a borda de um copo e recheie a gosto. Feche os risólis e passe no ovo batido e farinha de rosca. Frite.</li>
                </ol>

            </Recipe>
        </div>
    )
}