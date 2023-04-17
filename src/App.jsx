import './App.css'
import Card from './Card/Card.jsx'
import fruits from './fruits.js'
import { useState } from 'react'







export default function App() {
  let localFruits = fruits;
  const [searchValue, setSearchValue] = useState('');
  const [lowCalories, setLowCalories] = useState(false);
  const [lowFat, setLowFat] = useState(false);
  const [lowSugar, setLowSugar] = useState(false);
  const [lowCarbs, setLowCarbs] = useState(false);
  const [highProtein, setHighProtein] = useState(false);
  const [orderBy, setOrderBy] = useState('cal-inc');
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  }
  const handleOrder = (e) => {
    setOrderBy(e.target.value);

    switch (e.target.value) {
      case "cal-inc":
        localFruits = localFruits.sort((a, b) => a.nutritions.calories - b.nutritions.calories);
        break;
      case "cal-dec":
        localFruits = localFruits.sort((a, b) => b.nutritions.calories - a.nutritions.calories);
        break;
      case "fat-inc":
        localFruits = localFruits.sort((a, b) => a.nutritions.fat - b.nutritions.fat);
        break;
      case "fat-dec":
        localFruits = localFruits.sort((a, b) => b.nutritions.fat - a.nutritions.fat);
        break;
      case "sug-inc":
        localFruits = localFruits.sort((a, b) => a.nutritions.sugar - b.nutritions.sugar);
        break;
      case "sug-dec":
        localFruits = localFruits.sort((a, b) => b.nutritions.sugar - a.nutritions.sugar);
        break;
      case "carb-inc":
        localFruits = localFruits.sort((a, b) => a.nutritions.carbohydrates - b.nutritions.carbohydrates);
        break;
      case "carb-dec":
        localFruits = localFruits.sort((a, b) => b.nutritions.carbohydrates - a.nutritions.carbohydrates);
        break;
      case "pro-inc":
        localFruits = localFruits.sort((a, b) => a.nutritions.protein - b.nutritions.protein);
        break;
      case "pro-dec":
        localFruits = localFruits.sort((a, b) => b.nutritions.protein - a.nutritions.protein);
        break;
    }

    filter();
  }
  const handleCalories = () => {
    setLowCalories(!lowCalories);
  }
  const handleFat = () => {
    setLowFat(!lowFat);
  }
  const handleSugar = () => {
    setLowSugar(!lowSugar);
  }
  const handleCarbs = () => {
    setLowCarbs(!lowCarbs);
  }
  const handleProtein = () => {
    setHighProtein(!highProtein);
  }
  let filteredFruits = localFruits.filter(fruit => {
    // Low Calories: under 40
    // Low fat: 0-0.2
    // low sugar: 0-4
    // Low Carbs: 0-8 inclusive
    // High protein: Greater than 1.1
    if (!(fruit.name.toUpperCase().includes(searchValue.toUpperCase()))) return false;
    if (lowCalories && fruit.nutritions.calories > 40) return false;
    if (lowFat && fruit.nutritions.fat > 0.2) return false;
    if (lowSugar && fruit.nutritions.sugar > 4) return false;
    if (lowCarbs && fruit.nutritions.carbohydrates > 8) return false;
    if (highProtein && fruit.nutritions.protein <= 1.1) return false;

    return true;
  })

  function filter() {
    filteredFruits = localFruits.filter(fruit => {
      // Low Calories: under 40
      // Low fat: 0-0.2
      // low sugar: 0-4
      // Low Carbs: 0-8 inclusive
      // High protein: Greater than 1.1
      if (!(fruit.name.toUpperCase().includes(searchValue.toUpperCase()))) return false;
      if (lowCalories && fruit.nutritions.calories > 40) return false;
      if (lowFat && fruit.nutritions.fat > 0.2) return false;
      if (lowSugar && fruit.nutritions.sugar > 4) return false;
      if (lowCarbs && fruit.nutritions.carbohydrates > 8) return false;
      if (highProtein && fruit.nutritions.protein <= 1.1) return false;

      return true;
    })
  }




  return (
    <div>

      <form>
        <input type='text' value={searchValue} onChange={handleChange} placeholder='Fruit Name' />

        <div>
          <div>Low Calorie</div>
          <input type='checkbox' checked={lowCalories} onChange={handleCalories} />
        </div>


        <div>
          <div>Low Fat</div>
          <input type='checkbox' checked={lowFat} onChange={handleFat} />
        </div>

        <div>
          <div>Low Sugar</div>
          <input type='checkbox' checked={lowSugar} onChange={handleSugar} />
        </div>

        <div>
          <div>Low Carbs</div>
          <input type='checkbox' checked={lowCarbs} onChange={handleCarbs} />
        </div>

        <div>
          <div>High Protein</div>
          <input type='checkbox' checked={highProtein} onChange={handleProtein} />
        </div>

        <div>
          <div>Order By:</div>
          <select value={orderBy} onChange={handleOrder}>
            <option value="cal-inc">Calories Increasing</option>
            <option value="cal-dec">Calories Decreasing</option>
            <option value="fat-inc">Fat Increasing</option>
            <option value="fat-dec">Fat Decreasing</option>
            <option value="sug-inc">Sugar Increasing</option>
            <option value="sug-dec">Sugar Decreasing</option>
            <option value="carb-inc">Carbs Increasing</option>
            <option value="carb-dec">Carbs Decreasing</option>
            <option value="pro-inc">Protein Increasing</option>
            <option value="pro-dec">Protein Decreasing</option>
          </select>

        </div>

      </form>

      <div className="card-container">
        {filteredFruits.map((fruit, index) => {
          return <Card
            key={index}
            name={fruit.name}
            calories={fruit.nutritions.calories}
            fat={fruit.nutritions.fat}
            sugar={fruit.nutritions.sugar}
            carbs={fruit.nutritions.carbohydrates}
            protein={fruit.nutritions.protein}
          />
        })}
      </div>
    </div>
  )
}
