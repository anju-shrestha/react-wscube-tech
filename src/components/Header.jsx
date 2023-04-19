import { useState } from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

export default function Header (){
    const [toggle, setToggle] = useState (false);

    const handleToggle =()=>{
        setToggle(!toggle)
    }

    return (
        <div className="bg-[#2699fb] p-4">
            <div className="px-4 flex items-center justify-between max-w-[1240px] h-24 mx-auto">
                <h1 className="w-full text-3xl font-bold">WS CubeTech</h1>
                <ul className="hidden md:flex text-white gap-10">
                    <li>Home</li>
                    <li>Company</li>
                    <li>Resources</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

                <div onClick={handleToggle} className='block md:hidden'>
                    {
                        toggle ? <AiOutlineClose size={20}/> :   <AiOutlineMenu size={20} />
                    }
                  
                </div>

               {/* responsive menu */}
               <div className={toggle ? "fixed left-0 top-[100px] w-[60%]  bg-black text-white h-full ease-in-out duration-500" : "fixed left-[-100%]"}>
                    <ul className=' uppercase p-4 ' >
                        <li className='p-5 border-b border-gray-400'>Home</li>
                        <li className='p-5 border-b border-gray-400'>Company</li>
                        <li className='p-5 border-b border-gray-400'>Resources</li>
                        <li className='p-5 border-b border-gray-400'>About</li>
                        <li className='p-5 border-b border-gray-400'>Contact</li>
                        </ul>
                </div>

            </div>
        </div>
    )
}

