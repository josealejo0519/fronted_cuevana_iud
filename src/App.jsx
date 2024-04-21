import Generos from "./componentes/genero/Genero";
import Footer from "./componentes/iu/Footer";
import NavBar from "./componentes/iu/NavBar";

function App() {
  return (
    <>
    <div className="container">
      <NavBar />
      <Generos />
    </div>
    <Footer />   
   </>
  );
}

export default App;