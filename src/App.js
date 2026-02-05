import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFruit } from './redux/fruitsActions';
import Header from './components/Header';

function App() {
  const fruits = useSelector((state) => state.fruits);
  const dispatch = useDispatch();

  const handleAddFruit = () => {
    const newFruit = prompt('Какой фрукт добавить?') || 'Манго';
    if (newFruit.trim()) {
      dispatch(addFruit(newFruit.trim()));
    }
  };

  return (
    <>
      <Header />

      <div
        style={{
          minHeight: 'calc(100vh - 70px)',
          background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
          padding: '40px 20px',
          fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1
          style={{
            color: '#2c3e50',
            marginBottom: '30px',
            fontSize: '2.8rem',
            textShadow: '1px 1px 3px rgba(0,0,0,0.1)',
          }}
        >
          Мои любимые фрукты 🍇🍎
        </h1>

        <div
          style={{
            background: 'white',
            borderRadius: '16px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            padding: '30px',
            width: '100%',
            maxWidth: '500px',
          }}
        >
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {fruits.map((fruit, index) => (
              <li
                key={index}
                style={{
                  fontSize: '1.4rem',
                  padding: '12px 20px',
                  margin: '10px 0',
                  background: '#f8f9fa',
                  borderRadius: '12px',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
                }}
              >
                <span style={{ fontSize: '1.6rem' }}>🍓</span>
                {fruit}
              </li>
            ))}
          </ul>

          {fruits.length === 0 && (
            <p style={{ textAlign: 'center', color: '#7f8c8d', fontStyle: 'italic' }}>
              Пока фруктов нет... Добавь первый! 😊
            </p>
          )}
        </div>

        <button
          onClick={handleAddFruit}
          style={{
            marginTop: '40px',
            padding: '14px 40px',
            fontSize: '1.2rem',
            background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            boxShadow: '0 6px 20px rgba(102, 126, 234, 0.4)',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.08)';
            e.currentTarget.style.boxShadow = '0 12px 30px rgba(102, 126, 234, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
          }}
        >
          Добавить фрукт ✨
        </button>
      </div>
    </>
  );
}

export default App;