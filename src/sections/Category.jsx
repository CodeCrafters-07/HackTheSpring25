import React, { useEffect } from 'react'
import Category1 from "../assets/Category1.png"
import Category2 from "../assets/Category2.png"
import Category3 from "../assets/Category3.png"
import Category4 from "../assets/Category4.png"
import AOS from "aos";
import "aos/dist/aos.css";


const Category = () => {
  useEffect(() => {
      AOS.init({
        offset : 100,
        duration : 500,
        easing : "ease-in-out"
      });
      AOS.refresh();
    }, [])

  return (
    <div id='category' className='w-full bg-gray-100 lg:px-20 px-5 pt-[130px] pb-[80px] flex lg:flex-row flex-col justify-center items-center gap-20'>
      <div data-aos="zoom-in" data-aos-delay="50" className='lg:w-[15%] w-full flex flex-col justify-center lg:items-start items-center gap-[20px]'>
        {/* <h1 className='text-themepurple text-xl font-semibold text-center'>Favourite Item</h1> */}
        <h1 className='text-black font-semibold text-[42px] leading-[50px] lg:text-start text-center'>Popular Category</h1>
        {/* <button className='bg-themepurple hover:bg-themeyellow text-white hover:text-black px-8 py-3 rounded-lg font-semibold mt-[60px]'>VIEW All</button> */}
      </div>
      <div className='lg:w-[85%] w-full grid lg:grid-cols-4 grid-cols-1 justify-center items-start gap-10'>
        <div data-aos="zoom-in" data-aos-delay="100" className='flex flex-col justify-center items-center gap-6'>
          <img src={Category1} alt="" className='rounded-full cursor-pointer'/>
          <h1 className='text-black text-xl font-semibold hover:text-Blue cursor-pointer'>Business</h1>
        </div>
        <div data-aos="zoom-in" data-aos-delay="200" className='flex flex-col justify-center items-center gap-6'>
          <img src={Category2} alt="" className='rounded-full cursor-pointer'/>
          <h1 className='text-black text-xl font-semibold hover:text-Blue cursor-pointer'>Service</h1>
        </div>
        <div data-aos="zoom-in" data-aos-delay="300" className='flex flex-col justify-center items-center gap-6'>
          <img src={Category3} alt="" className='rounded-full cursor-pointer'/>
          <h1 className='text-black text-xl font-semibold hover:text-Blue cursor-pointer'>Franchise</h1>
        </div>
        <div data-aos="zoom-in" data-aos-delay="400" className='flex flex-col justify-center items-center gap-6'>
          <img src={Category4} alt="" className='rounded-full cursor-pointer'/>
          <h1 className='text-black text-xl font-semibold hover:text-Blue cursor-pointer'>StartUp</h1>
        </div>
        {/* <div data-aos="zoom-in" data-aos-delay="500" className='flex flex-col justify-center items-center gap-6'>
          <img src={cat5} alt="" className='rounded-full cursor-pointer'/>
          <h1 className='text-black text-xl font-semibold hover:text-themepurple cursor-pointer'>Portable Speaker</h1>
        </div> */}
      </div>
    </div>
  ) 
}

export default Category