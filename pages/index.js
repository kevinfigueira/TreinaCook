import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Cards from '../components/Cards/Cards';


export default function Index() {
  return (
    <div>
      <Header title="TreinaCook"/>

      <main>

        <Cards
          name="Brigadeiro"
          picture="https://img.itdg.com.br/tdg/images/recipes/000/130/281/331399/331399_original.jpg?mode=crop&width=710&height=400"
          category="Doce"
          link="/receitas/doces/brigadeiro"
        />

        <Cards
          name="Bolo de Cenoura"
          picture="https://img.itdg.com.br/tdg/images/recipes/000/000/023/323619/323619_original.jpg?mode=crop&width=710&height=400"
          category="Bolos"
          link="/receitas/bolos/bolo-de-cenoura"
        />

        <Cards
          name="Risolis"
          picture="https://img.itdg.com.br/tdg/images/recipes/000/000/712/32495/32495_original.jpg?mode=crop&width=710&height=400"
          category="Salgados"
          link="/receitas/salgados/risolis"
        />

        <Cards
          name="Pavê de Morango com Chocolate"
          picture="https://img.itdg.com.br/tdg/images/recipes/000/000/581/349098/349098_original.jpg?mode=crop&width=710&height=400"
          category="Doce"
          link="/receitas/doces/pave-de-morango-com-chocolate"
        />

        <Cards
          name="Salada Simples"
          picture="https://img.itdg.com.br/tdg/images/recipes/000/000/233/9940/9940_original.jpg?mode=crop&width=710&height=400"
          category="Salada"
          link="/receitas/saladas/salada-simples"
        />
        
      </main>

      <Footer />
    </div>
  )
}