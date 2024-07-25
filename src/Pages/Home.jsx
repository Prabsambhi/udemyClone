import React from 'react'
import Layout from '../Layout/layout'
import ItemCard from '../Components/itemCard'
import item from '../data/itemData'

const Home = () => {

  return (
    <Layout>
      <div className='grid grid-cols-1 custom:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10'>
      {
        item.map(item=>(
          <ItemCard key={item.id} product={item} />
        ))
      } 
      </div>
    </Layout>
  )
}

export default Home