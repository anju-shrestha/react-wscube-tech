import React from 'react'
import { AiFillFacebook } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'

function Footer() {
  return (
         <div className="bg-[#2699fb] p-4">
            <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-white'>
                <div>
                    <h2 className='w-full text-3xl font-bold'> WsCubeTech</h2>
                    <p className='py-4' >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam laborum voluptatibus repellat dolorem perferendis cumque est qui praesentium? Modi repellat eaque temporibus quo illum vero harum voluptatibus distinctio enim reiciendis?</p>
                    <div className='flex justify-between md:w-[75%] my-6'>
                        <AiFillFacebook size={30}/>
                        <AiOutlineInstagram size={30}/>
                        <AiOutlineTwitter size={30}/>
                        <AiFillGithub size={30}/>
                    </div>
                </div>


                <div className='lg:col-span-2 flex justify-between mt-6'>
                    <div>
                        <h5 className='font-medium text-gray-200'>Solutions</h5>
                        <ul>
                            <li className='py-2 text-sm'>Analytics</li>
                            <li className='py-2 text-sm'>Marketing</li>
                            <li className='py-2 text-sm'>Commerce</li>
                            <li className='py-2 text-sm'>Insights</li>
                        </ul>
                    </div>

                    <div>
                        <h5 className='font-medium text-gray-200'>Support</h5>
                        <ul>
                            <li className='py-2 text-sm'>Pricing</li>
                            <li className='py-2 text-sm'>Documentation</li>
                            <li className='py-2 text-sm'>Guides</li>
                            <li className='py-2 text-sm'>API Status</li>
                        </ul>
                    </div>

                    <div>
                        <h5 className='font-medium text-gray-200'>Company</h5>
                        <ul>
                            <li className='py-2 text-sm'>About</li>
                            <li className='py-2 text-sm'>Blog</li>
                            <li className='py-2 text-sm'>Jobs</li>
                            <li className='py-2 text-sm'>Press</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Footer
