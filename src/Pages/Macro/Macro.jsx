import React from 'react'
import { useState } from 'react';

const Macro = () => {
      const [totalCalories, setTotalCalories] = useState(0);
      const [carbPercentage, setCarbPercentage] = useState(0);
      const [proteinPercentage, setProteinPercentage] = useState(0);
      const [fatPercentage, setFatPercentage] = useState(0);
      const [error, setError] = useState('');
    
      const calculateCalories = (percentage) => (totalCalories * percentage) / 100;
    
      const handleCalculation = () => {
        const totalPercentage =
          Number(carbPercentage) + Number(proteinPercentage) + Number(fatPercentage);
        if (totalPercentage !== 100) {
          setError('The sum of percentages must be 100%');
          return;
        }
        setError('');
      };
    
      return (
        <div style={{ padding: '20px' }}>
          <h1>Calories Splitter</h1>
          <div>
            <label>Total Calories: </label>
            <input
              type="number"
              value={totalCalories}
              onChange={(e) => setTotalCalories(Number(e.target.value))}
            />
          </div>
          <div>
            <label>Carbohydrates (%): </label>
            <input
              type="number"
              value={carbPercentage}
              onChange={(e) => setCarbPercentage(Number(e.target.value))}
            />
          </div>
          <div>
            <label>Protein (%): </label>
            <input
              type="number"
              value={proteinPercentage}
              onChange={(e) => setProteinPercentage(Number(e.target.value))}
            />
          </div>
          <div>
            <label>Fat (%): </label>
            <input
              type="number"
              value={fatPercentage}
              onChange={(e) => setFatPercentage(Number(e.target.value))}
            />
          </div>
          <button onClick={handleCalculation}>Calculate</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {!error && (
            <div>
              <h2>Results:</h2>
              <p>Calories from Carbs: {calculateCalories(carbPercentage)} kcal</p>
              <p>Calories from Protein: {calculateCalories(proteinPercentage)} kcal</p>
              <p>Calories from Fat: {calculateCalories(fatPercentage)} kcal</p>
            </div>
          )}
        </div>
      );
    };

export default Macro