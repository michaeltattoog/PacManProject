import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainPageCard from "./Pages/HomePage";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import PacFam from "./Pages/PacFam";
import CharacterInfo from "./Pages/GhostFam";
import Gamez from "./Pages/GameInfos";

function App() {
  return (
    <>
      
        <NavBar />
          <Routes>
          <Route path='/' element={<MainPageCard />}/>
          <Route path='/PacManFamily' element={<PacFam />}/>
          <Route path='/GhostFamily' element={<CharacterInfo/>}/>
          <Route path='/PacGames' element={<Gamez />}/>
          </Routes>
      
    </>
  );
}

export default App;
