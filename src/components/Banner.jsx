import React from 'react'
import Typed from 'react-typed'

function Banner() {
  return (
    <div className='bg-[#2699fb]  w-full py-[100px]'>
        <div className="max-w-[1240px] mx-auto text-center font-bold my-4 ">
           <h3 className='text-xl md:text-3xl md:p-[24px]'>Learn with us</h3>
           <h1 className='text-white text-3xl md:pb-{24px} md:text-[60px]  md:p-[24px]'>Grow with us.</h1>

           <h2 className='text-[20px] md:text-[50px] text-white  md:p-[24px]'>
                Learn  <Typed
                    strings={['Web Development', 'Digital Marketing', 'Ethical Hacking']}
                    typeSpeed={120}
                    backSpeed={120}
                    loop={true}
                />
                <br/>
           </h2>

           <button className='bg-black text-white p-3 rounded'>Get Started</button>

        </div>
    </div>
  )
}

export default Banner
