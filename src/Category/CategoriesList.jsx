import React from 'react';


const CategoriesList = ({ categories, onSelectCategory, onDeleteCategory }) => {
  return (
    <div>
      <h2>Lista de Categorías</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <a href="#" onClick={() => onSelectCategory(category)}>{category.name}</a>
            <button onClick={() => onDeleteCategory(category.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesList;