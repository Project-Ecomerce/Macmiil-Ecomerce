import React from 'react'
import Posts from '../../Components/posts/posts'
import Categories from '../../Components/swiper/Categories'
import SlideCard from '../../Components/swiper/SlideCard'

function Home() {
  return (
    <div>
      
     <div className=' '>
     <div className=' w-[18%]'>
          <Categories/>
        </div>
      <div>
      <SlideCard/>
      </div>
     </div>
   <Posts />
    </div>
  )
}

export default Home