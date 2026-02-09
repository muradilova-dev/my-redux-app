import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMockData } from './redux/dataThunks';
import Header from './components/Header';
import { addFruit } from './redux/fruitsActions';

function App() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.data);
  const fruits = useSelector(state => state.fruits);

  useEffect(() => {
    dispatch(fetchMockData());
  }, [dispatch]);

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh', 
        fontSize: '1.5rem',
        color: '#555'
      }}>
        Загрузка данных...
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ 
        textAlign: 'center', 
        color: 'red', 
        padding: '100px 20px', 
        fontSize: '1.3rem' 
      }}>
        Ошибка загрузки: {error}
      </div>
    );
  }

  return (
    <>
      <Header />

      <div style={{
        minHeight: 'calc(100vh - 70px)',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        padding: '40px 20px',
        fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
      }}>
        {/* Твой старый блок с Redux-фруктами */}
        <div style={{
          maxWidth: '600px',
          margin: '0 auto 60px',
          background: 'white',
          borderRadius: '16px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          padding: '30px',
        }}>
          <h1 style={{
            textAlign: 'center',
            color: '#2c3e50',
            marginBottom: '25px',
            fontSize: '2.2rem',
          }}>
            Мои фрукты 🍎
          </h1>

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
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <span style={{ fontSize: '1.6rem' }}>🍓</span>
                {fruit}
              </li>
            ))}
          </ul>

          {fruits.length === 0 && (
            <p style={{ textAlign: 'center', color: '#7f8c8d', fontStyle: 'italic', marginTop: '20px' }}>
              Пока фруктов нет... Добавь первый!
            </p>
          )}

          <button
            onClick={() => {
              const newFruit = prompt('Какой фрукт добавить?') || 'Манго';
              if (newFruit.trim()) {
                dispatch(addFruit(newFruit.trim()));
              }
            }}
            style={{
              display: 'block',
              margin: '30px auto 0',
              padding: '12px 40px',
              fontSize: '1.1rem',
              background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '50px',
              cursor: 'pointer',
            }}
          >
            Добавить фрукт ✨
          </button>
        </div>

        {/* Блок 2: Избранные фрукты из JSON (List) */}
        <h2 style={{ textAlign: 'center', margin: '60px 0 30px', color: '#2c3e50' }}>
          Избранные фрукты (из JSON)
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          {data?.featuredFruits?.map(fruit => (
            <div key={fruit.id} style={{
              background: 'white',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-8px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <img 
                src={fruit.image} 
                alt={fruit.name}
                style={{ width: '100%', height: '220px', objectFit: 'cover' }}
              />
              <div style={{ padding: '20px' }}>
                <h3 style={{ margin: '0 0 10px' }}>{fruit.name}</h3>
                <p style={{ color: '#555', margin: '0 0 12px' }}>{fruit.description}</p>
                <small style={{ color: '#777' }}>
                  {fruit.calories} ккал • {fruit.origin}
                </small>
              </div>
            </div>
          ))}
        </div>

        {/* Блок 3: Новости */}
        <h2 style={{ textAlign: 'center', margin: '80px 0 30px', color: '#2c3e50' }}>
          Новости
        </h2>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {data?.news?.map(n => (
            <div key={n.id} style={{
              background: '#f8f9fa',
              padding: '20px',
              marginBottom: '20px',
              borderRadius: '12px',
              borderLeft: '5px solid #7c3aed'
            }}>
              <h3 style={{ margin: '0 0 8px' }}>{n.title}</h3>
              <small style={{ color: '#777', display: 'block', marginBottom: '10px' }}>{n.date}</small>
              <p style={{ margin: 0 }}>{n.short}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;