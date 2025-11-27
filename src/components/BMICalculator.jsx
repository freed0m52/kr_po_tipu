import React, { useState } from 'react';
import './BMICalculator.css';
const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');
  const calculateBMI = () => {
    if (!weight || !height) {
      alert('Пожалуйста, введите вес и рост');
      return;
    }
    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
    setBmi(bmiValue);
    if (bmiValue < 18.5) {
      setCategory('Недостаточный вес');
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      setCategory('Нормальный вес');
    } else if (bmiValue >= 25 && bmiValue < 30) {
      setCategory('Избыточный вес');
    } else {
      setCategory('Ожирение');
    }
  };
  const resetCalculator = () => {
    setWeight('');
    setHeight('');
    setBmi(null);
    setCategory('');
  };
  return (
    <div className="bmi-calculator">
      <h1 className="main-title">Калькулятор ИМТ</h1>
      
      <div className="input-container">
        <div className="input-group">
          <label className="input-label">Вес (кг):</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Введите ваш вес"
            className="large-input"
          />
        </div>
        <div className="input-group">
          <label className="input-label">Рост (см):</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Введите ваш рост"
            className="large-input"
          />
        </div>
      </div>
      <div className="buttons-container">
        <button onClick={calculateBMI} className="large-button calculate-btn">
          Рассчитать ИМТ
        </button>
        <button onClick={resetCalculator} className="large-button reset-btn">
          Сбросить
        </button>
      </div>
      {bmi && (
        <div className="result-container">
          <h2 className="result-title">Результат:</h2>
          <div className="bmi-result">
            <div className="bmi-value-large">ИМТ: {bmi}</div>
            <div className="bmi-category-large">Категория: {category}</div>
          </div>
        </div>
      )}
      <div className="info-container">
        <h3 className="info-title">Шкала ИМТ:</h3>
        <div className="bmi-scale-simple">
          <div className="scale-item">
            <span className="scale-range">Менее 18.5</span>
            <span className="scale-category">Недостаточный вес</span>
          </div>
          <div className="scale-item">
            <span className="scale-range">18.5 - 24.9</span>
            <span className="scale-category">Нормальный вес</span>
          </div>
          <div className="scale-item">
            <span className="scale-range">25 - 29.9</span>
            <span className="scale-category">Избыточный вес</span>
          </div>
          <div className="scale-item">
            <span className="scale-range">30 и более</span>
            <span className="scale-category">Ожирение</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BMICalculator;