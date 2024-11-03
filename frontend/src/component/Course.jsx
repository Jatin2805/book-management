import React from 'react';
import list from "../../public/list.json"
import Cards from './cards';
import { Link } from "react-router-dom";
function Course() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'></div>
    <div className="mt-28 items-center justify-center text-center">
      <h1 className='text-2xl font-semibold md:text-4xl'>
      We Delightful we have u 
      <span className='text-pink-500'> here:)</span>

      </h1>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat atque cum laborum et sunt aliquam. Minima saepe repellat adipisci velit nostrum dolores, nobis sequi ex animi repellendus. Distinctio, iure voluptates.</p>
<Link to="/"><button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700'>Back</button></Link>
<div className='mt-12 p-3 grid grid-cols-1 md:grid-cols-4'>{list.map((item)=>(
  <Cards key={item.id} item ={item}/>
  ))}</div>
    </div>
    </>
  );
}

export default Course;
