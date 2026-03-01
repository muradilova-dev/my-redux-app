import React from 'react';

const ProductCard = ({ fruit, onEdit, onDelete }) => {
  return (
    <div style={{
      background: 'white',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.transform = 'translateY(-10px)';
      e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
    }}
    >
      <img 
        src={fruit.image || `https://placehold.co/300x200?text=${encodeURIComponent(fruit.name)}`}
        alt={fruit.name}
        style={{ width: '100%', height: '220px', objectFit: 'cover' }}
      />
      <div style={{ padding: '20px' }}>
        <h3 style={{ margin: '0 0 8px', color: '#2c3e50' }}>{fruit.name}</h3>
        <p style={{ color: '#555', margin: '0 0 12px', fontSize: '0.95rem' }}>
          {fruit.description || 'Свежий и вкусный продукт'}
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '600', marginBottom: '16px' }}>
          <span style={{ color: '#e67e22', fontSize: '1.2rem' }}>{fruit.price || 100} ₽</span>
          <span style={{ color: '#27ae60' }}>В наличии: {fruit.stock || 50}</span>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button 
            onClick={onEdit}
            style={{ flex: 1, padding: '10px', background: '#3498db', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
          >
            Редактировать
          </button>
          <button 
            onClick={onDelete}
            style={{ flex: 1, padding: '10px', background: '#e74c3c', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
          >
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;