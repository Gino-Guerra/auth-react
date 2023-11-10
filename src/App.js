import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import RecipesPage from "./pages/RecipesPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState, createContext } from "react";

export const RecipeContext = createContext()
function App() {




  return (
 <BrowserRouter>
 <RecipeContext.Provider value={{recipes, setRecipes}}>
 <Header />
 <Routes>
<Route path="/" element={<RecipesPage />}/>
<Route path="/add-recipe" element={<LoginPage />}/>
<Route path="/signup" element={<SignupPage />}/>
 </Routes>
<Footer />
</RecipeContext.Provider>
 </BrowserRouter>
  );
}

export default App;
