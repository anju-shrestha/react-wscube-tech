import React from 'react'
import double from '../assets/double.png'
import single from '../assets/single.png'
import triple from '../assets/triple.png'

export default function Plans() {
  return (
   <div className="w-full py-[10rem] px-4">
     <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-20 mx-auto mt-[-3rem]' src={single} alt="" />
          <h2 className='text-2xl text-center py-8 font-bold'>Web Development</h2>
          <p className='text-center font-bold text-4xl'>$149</p>
          <div className='text-center font-medium'>
              <p className='py-2 border-b mx-8 mt-8'>Lorem ipsum dolor sit, amet</p>
              <p className='py-2 border-b mx-8 '>lorem ipsum is simply dummy text of the printing</p>
              <p className='py-2 border-b mx-8 '>lorem ipsum simply.</p>
          </div>
          <button className='bg-green-600 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'> Start Trial</button>
        </div>

        <div className='w-full bg-gray-100 shadow-xl flex flex-col md:my-0 my-8 p-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={double} alt="" />
          <h2 className='text-2xl text-center py-8 font-bold'>Web Development</h2>
          <p className='text-center font-bold text-4xl'>$149</p>
          <div className='text-center font-medium'>
              <p className='py-2 border-b mx-8 mt-8'>Lorem ipsum dolor sit, amet</p>
              <p className='py-2 border-b mx-8 '>lorem ipsum is simply dummy text of the printing</p>
              <p className='py-2 border-b mx-8 '>lorem ipsum simply.</p>
          </div>
          <button className='text-green-600 bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'> Start Trial</button>
        </div>

        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-20 mx-auto mt-[-3rem]' src={triple} alt="" />
          <h2 className='text-2xl text-center py-8 font-bold'>Web Development</h2>
          <p className='text-center font-bold text-4xl'>$149</p>
          <div className='text-center font-medium'>
              <p className='py-2 border-b mx-8 mt-8'>Lorem ipsum dolor sit, amet</p>
              <p className='py-2 border-b mx-8 '>lorem ipsum is simply dummy text of the printing</p>
              <p className='py-2 border-b mx-8 '>lorem ipsum simply.</p>
          </div>
          <button className='bg-green-600 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'> Start Trial</button>
        </div>
    </div>
   </div>
  )
}
