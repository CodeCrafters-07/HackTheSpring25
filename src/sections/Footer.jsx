import React, { useEffect } from 'react'
// import client1 from '../assets/client1.png'
// import client2 from '../assets/client2.png'
// import client3 from '../assets/client3.png'
// import client4 from '../assets/client4.png'
// import client5 from '../assets/client5.png'
// import client6 from '../assets/client6.png'
// import google from '../assets/google.jpg'
// import apple from '../assets/apple.jpg'
import pay1 from '../assets/pay-1.jpg'
import pay2 from '../assets/pay-2.jpg'
import pay3 from '../assets/pay-3.jpg'
import pay4 from '../assets/pay-4.jpg'
import { Link } from 'react-scroll'
import { FaArrowUp } from 'react-icons/fa'
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
        AOS.init({
          offset : 100,
          duration : 500,
          easing : "ease-in-out"
        });
        AOS.refresh();
      }, [])

  return (
    <div id='contact' className='w-full flex flex-col justify-center items-center'>
      {/* 1st box Starts */}
      {/* <div data-aos="zoom-in" data-aos-delay="100" className='w-full bg-themepurple lg:px-20 px-10 py-8 grid lg:grid-cols-6 grid-cols-2 justify-center items-center gap-10'>
      <img src={client1} alt="" className='w-[130px] opacity-70 cursor-pointer hover:'/>
      </div> */}
      {/* 1st box Ends */}
      {/* 2nd box Starts */}
      <div className='w-full lg:px-20 px-5 py-[60px] bg-gray-100 grid lg:grid-cols-[auto,auto] grid-cols-1 justify-between items-start lg:gap-3 gap-10'>
        <div data-aos="zoom-in" data-aos-delay="200" className='flex flex-col justify-center items-start gap-10 grow' >
          <div className='flex flex-col justify-center items-start gap-4'>
            <h1 className='text-4xl font-bold text-themepurple underline italic '>Elacrtra Shop</h1>
            <p className='text-gray-500 text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi fugiat <br /> dolorem accusantium eos magni dolor culpa eaque eum cupiditate aliquam?</p>
          </div>
          {/* <div className='flex flex-col justify-center items-center gap-4'>
              Download Our App
          </div> */}
          <div className='text-gray-500'>All Rights Reserved @ ElectraShop</div>
        </div>
        <div data-aos="zoom-in" data-aos-delay="200">
          <h1 className='text-black text-xl font-semibold capitalize'>Useful Links</h1>
          <ul className='mt-8 flex flex-col justify-center items-center gap-2'>
            <li className='text-gray-500 cursor-pointer hover:text-black'>Home</li>
            <li className='text-gray-500 cursor-pointer hover:text-black'>Home</li>
            <li className='text-gray-500 cursor-pointer hover:text-black'>Home</li>
            <li className='text-gray-500 cursor-pointer hover:text-black'>Home</li>
            <li className='text-gray-500 cursor-pointer hover:text-black'>Home</li>
          </ul>
        </div>
      </div>
      {/* 2nd box Ends */}
      {/* 3rd box Starts */}
      {/* <div className='w-full lg:px-20 px-5 py-[40px] bg-gray-100 '>
        <hr className='border-t border-gray-300 py-3'/>
        <div className='w-full lg:flex-row flex-col justify-between items-center lg:gap-4 gap-10'>
          <div className='lg:w-[20%] w-full flex justify-center items-center gap-4'>
            <img src={pay1} alt="" className='w-[50px] rounded-lg'/>
            <img src={pay2} alt="" className='w-[50px] rounded-lg'/>
            <img src={pay3} alt="" className='w-[50px] rounded-lg'/>
            <img src={pay4} alt="" className='w-[50px] rounded-lg'/>
          </div>
          <div className='lg:w-60%] w-full flex lg:flex-row flex-col justify-center items-center gap-4 flex-grow'></div>
        </div>
      </div> */}
      {/* 3rd box Ends */}
      {/* scroll to top button */}
      <div id='icon-box' className='bg-themepurple text-white p-3 rounded-full hover:bg-themryellow hover:text-black cursor-pointer fixed lg:bottom-6 right-6'>
        <Link to="hero" spy={true} offset={-100} smooth={true}>
          <FaArrowUp className='w-[35px] h-[35px]'/>
        </Link>
      </div>
    </div>
  )
}

export default Footer