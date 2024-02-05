import { useState } from 'react';
import { AddCategory, GifGrid } from './componets';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Cattle Dog' ]);

    const onAddCategory = ( newCategory ) => {
      
      if ( categories.includes( newCategory ) ) return;
      
      //setCategories([...categories, 'Valorant']); // forma 0
      setCategories([newCategory, ...categories]); // forma 1
      //setCategories( cat => [ ...cat, 'Valorant' ] );  //forma 2
      //setCategories(categories.concat("Valorant"));    // forma 3
    }


  return (
    <>

      <h1>GifExpertApp</h1>


      <AddCategory

        onNewCategory={(value) => onAddCategory(value)}
      />




      {
        categories.map((category) => (
          <GifGrid
            key={category}
            category={category} />
        ))

      }



    </>
  )
}
