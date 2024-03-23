import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CategoriesList from './Category/CategoriesList';
import CategoryForm from './Category/CategoryForm';

const App = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const response = await axios.get('https://api.escuelajs.co/api/v1/categories');
    setCategories(response.data);
  };

  const handleAddCategory = async (category) => {
    const response = await axios.post('https://api.escuelajs.co/api/v1/categories', category);
    setCategories([...categories, response.data]);
  };

  const handleUpdateCategory = async (category) => {
    const response = await axios.put(`https://api.escuelajs.co/api/v1/categories/${category.id}`, category);
    const updatedCategories = categories.map((cat) => (cat.id === category.id ? response.data : cat));
    setCategories(updatedCategories);
  };

  const handleDeleteCategory = async (id) => {
    await axios.delete(`https://api.escuelajs.co/api/v1/categories/${id}`);
    const filteredCategories = categories.filter((cat) => cat.id !== id);
    setCategories(filteredCategories);
  };

  return (
    <div className="App">
      <CategoriesList categories={categories} onSelectCategory={setSelectedCategory} onDeleteCategory={handleDeleteCategory} />
      {selectedCategory && (
        <CategoryForm
          category={selectedCategory}
          onCancel={() => setSelectedCategory(null)}
          onUpdateCategory={handleUpdateCategory}
        />
      )}
      {!selectedCategory && <CategoryForm onAddCategory={handleAddCategory} />}
    </div>
  );




};

export default App;
