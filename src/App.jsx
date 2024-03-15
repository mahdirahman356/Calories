
import './App.css'
import Header from './Header/Header'
import Navbar from './Header/Navbar'
import AddCard from './Recipes/AddCard'
import RecipesCard from './Recipes/RecipesCard'
import RecipesTitle from './Recipes/RecipesTitle'

function App() {
     
  return (
    <div className="w-[97%] md:w-[85%] mx-auto">
      <Navbar></Navbar>
      <Header></Header>
      <RecipesTitle></RecipesTitle>
      <div className="flex flex-col md:flex-row my-16">
         <RecipesCard></RecipesCard>
         <AddCard></AddCard>
      </div>
    </div>
  )
}

export default App
