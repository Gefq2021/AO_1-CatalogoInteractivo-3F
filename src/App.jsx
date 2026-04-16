import { useState } from 'react';
import { catalogo } from './data';
import CustomHeader from './components/CustomHeader';
import CardGrid from './components/CardGrid';
import './App.css';

function App() {
  const [busqueda, setBusqueda] = useState("");

  // Manejador de búsqueda [cite: 67]
  const handleCambioBusqueda = (e) => {
    setBusqueda(e.target.value.toLowerCase());
  };

  // Lógica de filtrado triple (Título, Categoría, Año) 
  const itemsFiltrados = catalogo.filter((item) => {
    return (
      item.titulo.toLowerCase().includes(busqueda) ||
      item.categoria.toLowerCase().includes(busqueda) ||
      item.anio.toString().includes(busqueda)
    );
  });

  return (
    <div className="app-wrapper">
      <CustomHeader />
      
      <main>
        <div className="controles-busqueda">
          <div className="buscador">
            <input 
              type="text" 
              placeholder="Buscar por título, categoría o año..." 
              onChange={handleCambioBusqueda}
            />
          </div>
        </div>

        <CardGrid items={itemsFiltrados} />
      </main>

      <footer className="footer">
        <p>© 2026 - Catálogo Interactivo en React - Facundo Rodriguez</p>
      </footer>
    </div>
  );
}

export default App;
