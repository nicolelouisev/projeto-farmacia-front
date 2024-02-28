import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home'
import ListaCategorias from './components/categoria/listaCategorias/ListaCategorias';
import FormularioCategorias from './components/categoria/formularioCategorias/FormularioCategorias';
import DeletarCategoria from './components/categoria/deletarCategoria/DeletarCategoria';

function App() {

  return (
    <>
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<ListaCategorias />} />
              <Route path="/cadastroCategoria" element={<FormularioCategorias />} />
              <Route path="/editarCategoria/:id" element={<FormularioCategorias />} />
              <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  );
}

export default App
