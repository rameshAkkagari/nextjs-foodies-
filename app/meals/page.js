
import Link from 'next/link';
import classes from './page.module.css';
import MealsGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';
 async function  Mealspage() {
  const meals =   await getMeals()
  return (
    <>
        <header className={classes.header}>
            <h1>Delicious meals created , <span className={classes.highlight}>by you</span></h1>
            <p>Choseen your favorite recipe and cook it yourself. it is easy and fun</p>
            <p className={classes.cta}>
                <Link href='/meals/share'>
                    Share your favorite Recipe
                </Link>
            </p>
        </header>
        <main className={classes.main}>
            <MealsGrid meals={meals}/>
        </main>
    </>
  )
}

export default Mealspage