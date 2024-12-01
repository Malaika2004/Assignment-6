import Link from 'next/link'
import React from 'react'
import  Image  from 'next/image'
import Logo from '../Assets/Logo.png'
import  { FaFacebookF } from "react-icons/fa";
import  { FaLinkedin } from "react-icons/fa";
import  { FaTwitter } from "react-icons/fa";
import  { FaInstagram } from "react-icons/fa";

export default function MobileFooter (){
    return (
<footer className=' h-[1411px] w-[428px] flex py-[48px]  px-[24px] items-center flex-col gap-[48px]'>
       <div className=' w-[380px] h-[1315px] flex flex-col gap-[48px]'>
        <div className='h-[261px] w-[380px] flex flex-col  gap-[24px]'>
           <div className='w-[287px] h-[91px] flex flex-col gap-[24px] '>
             <p className='text-[18px] leading-[27px]  text-center font-semibold '> subscribe to our newsletter</p>
             <p className='text-[16px] text-center tracking-wide leading-[24px]'>Lorem ipsum dolor sit amet,  consecteture  adipiscing elit.</p>
           </div>
           <div className='w-[380px] h-[1436px] flex flex-col gap-[16px]'>
            <div className='w-[380px] h-[112px] flex flex-col  gap-[16px]'>
             <input className=' h-[48px] w-[380px] border-solid border-black border-[1px] rounded-[5px] p-[3px] placeholder-[#505050]' placeholder='Enter you Email' type="text" />
             <button className='w-[380px] h-[48px]   border-solid border-black border-[1px] rounded-[5px] p-[3px]'>Subscribe</button>
            </div>
            <p className='text-[12px] w-[380] text-center  leading-[18px]'> by subscribing you agree to with our <Link className='underline' href="/">privacy policy</Link></p>
           </div>
        </div>
        <div className='w-[172px] h-[811px] flex flex-col  gap-[40px]  mx-[104px]'>
          <div className='w-[172px] h-[40px]'><Image src={Logo} alt=''/></div>
           <div className='w-[172px] h-[225px] flex flex-col gap-[16px] items-center justify-center'>
            <p className='text-[16px] leading-[24px] text-center w-[172px] h-[37px] font-semibold '>Courses</p>
           <p className=' w-[172px] h-[37px]  text-center text-[14px] leading-[21px] '>Business</p>
           <p className=' w-[172px] h-[37px]  text-center text-[14px] leading-[21px]'>Development</p>
           <p className=' w-[172px] h-[37px]  text-center text-[14px] leading-[21px]'>Technology</p>
           <p className=' w-[172px] h-[37px]  text-center text-[14px] leading-[21px]'>Design</p>
           <p className=' w-[172px] h-[37px]  text-center text-[14px] leading-[21px]'>Programming</p>
           </div>
           <div className='w-[172px] h-[225px] flex flex-col gap-[16px]'>
           <p className='text-[16px] text-center leading-[24px] font-semibold '> Resources</p>
           <p className='text-[14px]  text-center leading-[21px]'> Career</p>
           <p className='text-[14px] text-center leading-[21px]'> Resume</p>
           <p className='text-[14px] text-center leading-[21px]'> Learning</p>
           <p className='text-[14px] text-center leading-[21px]'> Interview Preparation </p>
           <p className='text-[14px] text-center leading-[21px]'> Jobs</p>
           </div>
           <div className=' w-[172px] h-[225px] flex flex-col gap-[16px]'>
           <p className='   text-center text-[16px] leading-[24px] font-semibold '> About US</p>
           <p className='  text-center text-[14px] leading-[21px]'> Contact</p>
           <p className='   text-center text-[14px] leading-[21px]'> Help support </p>
           <p className='  text-center text-[14px] leading-[21px]'> FAQ </p>
           <p className='  text-center text-[14px] leading-[21px]'>  Terms and condition</p>
           <p className='   text-center text-[14px] leading-[21px]'> Partners </p>
           </div>
        </div>
        <div className='w-[380px] h-[57px] items-end border-solid border-black borer-t-[2px] pt-[33px]'>
        <div className='h-[24px] flex flex-col '>
          <div className='h-[66px] flex w-[345px] mx-[17.5px] flex-col gap-[24px]'>
          <p className='text-[14px] leading-[21px] tracking-tight mx-[75px]'>2023 Ddsgnr. All Right reserved.</p>
          <div className='w-[345px] flex gap-[24px] '>
         <Link className='text-[14px] leading-[21px] underline' href= "">Privacy Policy </Link>
         <Link className='text-[14px] leading-[21px] underline' href="" >Terms of Service</Link>
         <Link className='text-[14px] leading-[21px] underline' href="">Cookies Settings</Link>
          </div>
          </div>
  

          <div className='flex w-[132px] h-[24px] items-center mx-[124px] mt-[24px]'>
            <div className='h-[24px] w-[24px] flex justify-center  items-center mr-[12px]'><FaFacebookF/></div>
            <div className='h-[24px] w-[24px] flex justify-center  items-center mr-[12px]'><FaInstagram/></div>
            <div className='h-[24px] w-[24px] flex justify-center  items-center mr-[12px]'><FaTwitter/></div>
            <div className='h-[24px] w-[24px] flex justify-center  items-center mr-[12px]'><FaLinkedin/></div>
          </div>
        </div>
        </div>
       </div>
     </footer>
    )
} 

 