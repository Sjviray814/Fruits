import './Card.css'

export default function Card(props) {
  return (
    <div className="card">
      <div className="title">
        {props.name}
      </div>

      <ol className="nutrition-facts">
        <li>Calories: {props.calories}</li>
        <li>Fat: {props.fat}g</li>
        <li>Sugar: {props.sugar}g</li>
        <li>Carbs: {props.carbs}g</li>
        <li>Protein: {props.protein}g</li>

      </ol>

    </div>
  )
}
