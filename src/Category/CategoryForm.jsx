import React, { useState } from 'react';
import Swal from 'sweetalert2';

const CategoryForm = ({ category, onCancel, onAddCategory, onUpdateCategory }) => {
  const [name, setName] = useState(category ? category.name : '');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name === '') {
      Swal.fire({
        title: 'Error',
        text: 'El campo nombre no puede estar vacío',
        icon: 'error',
      });
      return;
    }
    if (category) {
      onUpdateCategory({ ...category, name });
    } else {
      onAddCategory({ name });
    }
    onCancel();
  };

  return (
    <div>
      <h2>Formulario de Categoría</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        <button type="submit">Guardar</button>
        <button type="button" onClick={onCancel}>Cancelar</button>
      </form>
    </div>
  );
};

export default CategoryForm;