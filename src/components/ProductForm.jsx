import React, { useState, useEffect } from 'react';

const ProductForm = ({ onSubmit, initialFruit = {}, onCancel }) => {
  // Защита от null/undefined
  const safeInitial = initialFruit || {};

  const [name, setName] = useState(safeInitial.name || '');
  const [price, setPrice] = useState(safeInitial.price || '');
  const [stock, setStock] = useState(safeInitial.stock || '');
  const [description, setDescription] = useState(safeInitial.description || '');

  useEffect(() => {
    const safe = initialFruit || {};
    setName(safe.name || '');
    setPrice(safe.price || '');
    setStock(safe.stock || '');
    setDescription(safe.description || '');
  }, [initialFruit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Проверка обязательных полей
    if (!name.trim() || !price || !stock) {
      alert('Заполните все обязательные поля!');
      return;
    }

    // Формируем объект товара
    const newFruit = {
      name: name.trim(),
      price: Number(price),
      stock: Number(stock),
      description: description.trim(),
      image: safeInitial.image || `https://placehold.co/600x400?text=${encodeURIComponent(name.trim())}`
    };

    // Отправляем в родительский компонент
    onSubmit(newFruit);

    // Очистка формы только после добавления нового товара
    if (!safeInitial.name) {
      setName('');
      setPrice('');
      setStock('');
      setDescription('');
    }
  };

  return (
    <div style={{
      background: 'white',
      borderRadius: '16px',
      padding: '30px',
      boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
      marginBottom: '60px',
      maxWidth: '600px',
      margin: '0 auto'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#2c3e50' }}>
        {safeInitial.name ? 'Редактировать товар' : 'Добавить товар'}
      </h2>

      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Название товара" 
          value={name} 
          onChange={e => setName(e.target.value)} 
          style={{ 
            width: '100%', 
            padding: '12px', 
            marginBottom: '15px', 
            borderRadius: '8px', 
            border: '1px solid #ddd',
            fontSize: '1rem'
          }}
          required
        />

        <input 
          type="number" 
          placeholder="Цена (₽)" 
          value={price} 
          onChange={e => setPrice(e.target.value)} 
          min="1"
          style={{ 
            width: '100%', 
            padding: '12px', 
            marginBottom: '15px', 
            borderRadius: '8px', 
            border: '1px solid #ddd',
            fontSize: '1rem'
          }}
          required
        />

        <input 
          type="number" 
          placeholder="В наличии (шт)" 
          value={stock} 
          onChange={e => setStock(e.target.value)} 
          min="0"
          style={{ 
            width: '100%', 
            padding: '12px', 
            marginBottom: '15px', 
            borderRadius: '8px', 
            border: '1px solid #ddd',
            fontSize: '1rem'
          }}
          required
        />

        <textarea 
          placeholder="Описание товара" 
          value={description} 
          onChange={e => setDescription(e.target.value)} 
          style={{ 
            width: '100%', 
            padding: '12px', 
            marginBottom: '20px', 
            borderRadius: '8px', 
            border: '1px solid #ddd', 
            minHeight: '80px',
            fontSize: '1rem'
          }}
        />

        <div style={{ display: 'flex', gap: '15px' }}>
          <button 
            type="submit" 
            style={{ 
              flex: 1, 
              padding: '14px', 
              background: '#667eea', 
              color: 'white', 
              border: 'none', 
              borderRadius: '10px', 
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'background 0.3s'
            }}
            onMouseOver={e => e.target.style.background = '#5a6fe6'}
            onMouseOut={e => e.target.style.background = '#667eea'}
          >
            {safeInitial.name ? 'Сохранить изменения' : 'Добавить товар'}
          </button>

          {safeInitial.name && (
            <button 
              type="button" 
              onClick={onCancel}
              style={{ 
                flex: 1, 
                padding: '14px', 
                background: '#ecf0f1', 
                color: '#7f8c8d', 
                border: 'none', 
                borderRadius: '10px', 
                cursor: 'pointer',
                transition: 'background 0.3s'
              }}
              onMouseOver={e => e.target.style.background = '#dfe6e9'}
              onMouseOut={e => e.target.style.background = '#ecf0f1'}
            >
              Отмена
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ProductForm;