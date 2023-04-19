import React from 'react'
import laptop from '../assets/laptop.jpg'

export default function Experts() {
  return (
    <div className='max-w-[1240px] p-2 mx-auto my-10 md:grid grid-cols-2'>
        <div className='md:w-[80%] col-span-1'>
            <img src={laptop} alt="" />

        </div>
        <div className=' col-span-1 flex flex-col justify-center'>
            <h1 className='text-[#00df9a] text-xl font-bold m-4'>LEARN FROM EXPERTS</h1>
            <p className='p-4 text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut earum maiores eligendi at, sapiente ratione quam voluptatibus similique, impedit ducimus facilis nisi distinctio animi ab tempore molestiae obcaecati illo fugiat?</p>

            <button className='mx-4 w-[30%] bg-black text-white p-3 rounded'>Get Started</button>
        </div>
    </div>
  )
}
