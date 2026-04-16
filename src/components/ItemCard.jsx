import { useState } from 'react';

const ItemCard = ({ item }) => {
  const [esFavorito, setEsFavorito] = useState(false);

  const handleToggleFavorito = () => {
    setEsFavorito(!esFavorito);
  };

  const claseCard = `card ${item.destacado ? 'destacado' : ''} ${esFavorito ? 'favorito-active' : ''}`;

  return (
    <div className={claseCard}>
      <div className="card-image-container">
        <img src={item.imagen} alt={item.titulo} className="card-image" />
      </div>
      <div className="card-content">
        <h3>{item.titulo}</h3>
        <p><strong>Categoría:</strong> {item.categoria}</p>
        <p><strong>Año:</strong> {item.anio}</p>
        <button onClick={handleToggleFavorito}>
          {esFavorito ? '❤️ Quitar de Favoritos' : '🤍 Marcar Favorito'}
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
