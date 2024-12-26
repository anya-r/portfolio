import './App.css';
import {Route, Routes} from "react-router";
import Home from './pages/Home'
import Other from './pages/other';
function App() {
  return (
    // <h1 class="text-3xl text-red-200 font-bold italic">
    //   Hello world!
    // </h1>
    <Routes>
      <Route path = "/" element={<Home/>}> </Route>
      <Route path = "/other" element={<Other/>}> </Route>

    </Routes>
    
  );
}

export default App;
