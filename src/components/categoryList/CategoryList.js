import React from 'react';
import Category from '../category/Category';
import '../../App.scss';


const CategoriesArray = [
    {
      "id": 1,
      "title": "hats",
      "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
      "id": 2,
      "title": "jackets",
      "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      "id": 3,
      "title": "sneakers",
      "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      "id": 4,
      "title": "womens",
      "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
      "id": 5,
      "title": "mens",
      "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
    }
  ]

const CategoryList = () => {
  return (    
    <div className="categories-container">
      {
        CategoriesArray.map(({id, title, imageUrl}) => {
          return <Category key={id} title={title} image={imageUrl} />
        })
      }
    </div>
  )
}

export default CategoryList