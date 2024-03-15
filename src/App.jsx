
import { useEffect, useState } from 'react'
import './App.css'
import Header from './Header/Header'
import Navbar from './Header/Navbar'
import AddCard from './Recipes/AddCard'
import RecipesCard from './Recipes/RecipesCard'
import RecipesTitle from './Recipes/RecipesTitle'

function App() {
     let [recipe,setRecipe] = useState([])
     useEffect(()=>{
      fetch('Recipes.json')
      .then(res => res.json())
      .then(data => setRecipe(data))
     },[])


   let [adding,setAdding]  = useState([])
   let hendleWantToCook = (add) => {
       let addingAll = [...adding,add]
       setAdding(addingAll)
   }

  return (
    <div className="w-[97%] md:w-[85%] mx-auto">
      <Navbar></Navbar>
      <Header></Header>
      <RecipesTitle></RecipesTitle>
      <div className="flex flex-col md:flex-row gap-5 my-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:w-[60%]">
        {
          recipe.map((recipe,index) => <RecipesCard 
          key={index}
          recipe={recipe}
          hendleWantToCook ={hendleWantToCook}
          ></RecipesCard>)
        }
        </div>
         <AddCard adding={adding}></AddCard>
      </div>
    </div>
  )
}

export default App
