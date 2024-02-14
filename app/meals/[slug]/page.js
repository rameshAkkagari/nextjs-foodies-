import React from 'react'

function MealsSlug({params}) {
  return (
    <div>
        <h1>MealsSlug </h1>
        <h3>{params.slug}</h3>
    </div>
  )
}

export default MealsSlug