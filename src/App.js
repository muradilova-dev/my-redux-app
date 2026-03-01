import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMockData } from './redux/dataThunks';
import { addFruit, updateFruit, deleteFruit } from './redux/fruitsActions';
import Header from './components/Header';
import ProductForm from './components/ProductForm';
import ProductCard from './components/ProductCard';

function App() {
  const dispatch = useDispatch();
  const dataState = useSelector(state => state.data || {});
  const fruits = useSelector(state => state.fruits || []); // защита от undefined

  const [editingFruit, setEditingFruit] = useState(null);

  useEffect(() => {
    dispatch(fetchMockData());
  }, [dispatch]);

  const handleAddOrUpdate = (fruit) => {
    if (editingFruit) {
      dispatch(updateFruit({ ...fruit, id: editingFruit.id }));
      setEditingFruit(null);
    } else {
      dispatch(addFruit(fruit));
    }
  };

  const handleEdit = (fruit) => setEditingFruit(fruit);
  const handleDelete = (id) => dispatch(deleteFruit(id));

  if (dataState.loading) {
    return <div style={{ textAlign: 'center', padding: '200px' }}>Загрузка...</div>;
  }

  if (dataState.error) {
    return <div style={{ textAlign: 'center', color: 'red' }}>Ошибка: {dataState.error}</div>;
  }

  return (
    <>
      <Header />

      <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>Магазин овощей и фруктов</h1>

        <ProductForm 
          onSubmit={handleAddOrUpdate} 
          initialFruit={editingFruit} 
          onCancel={() => setEditingFruit(null)}
        />

        <h2 style={{ textAlign: 'center', margin: '60px 0 20px' }}>Текущий ассортимент</h2>

        {fruits.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#777' }}>Пока товаров нет. Добавьте первый!</p>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '30px'
          }}>
            {fruits.map(fruit => (
              <ProductCard
                key={fruit.id}
                fruit={fruit}
                onEdit={() => handleEdit(fruit)}
                onDelete={() => handleDelete(fruit.id)}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default App;