import classes from './meals-grid.module.css';
import Mealitem from './meal-item';
function MealsGrid({meals}) {
  return (
    <ul className={classes.meals}>
    {meals.map((meals)=><li key={meals.id}>
            <Mealitem {...meals}/>
    </li>)}
    </ul>
  )
}

export default MealsGrid