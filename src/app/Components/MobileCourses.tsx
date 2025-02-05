import React from 'react'
import img1 from '../Assets/course-img-1.png'
import img2 from '../Assets/course-img-2.png'
import img3 from '../Assets/course-img-3.png'
import star from '../Assets/Star 1.png'
import Image from 'next/image';

export default function MobileCourses () {
  return(
    <section  className='w-[428px] h-[2135px] py-[48px] flex flex-col  custom420:px-[24px] gap-[48px] items-center'>
        <div className=' w-[249px] h-[93px] flex flex-col gap-[24px] custom420:mx-[75.5px]'>
            <h4 className='text-[32px] font-bold text-center leading-[41.5px]'>Courses</h4>
            <p className='text-[18px]  tracking-tight text-center leading-[27px]'>Your Ultmate Guide to learning</p>
        </div>
        <div className='h-[1898px] w[380px] w-full flex-col flex gap-[64px] items-center'>
           <div className='w-[336px] h-[40px] flex mx-[22px]' >
            <div className='px-[16px] py-[8px] text-[16px] leading-[24px] w-[87px] border-solid border-[#676767]  border-b-[1px]'>Popular</div>
            <div className='px-[16px] py-[8px] text-[16px] leading-[24px] w-[140px]'>Recommended</div>
            <div className='px-[16px] py-[8px] text-[16px] leading-[24px] w-[109px]'>Best Price</div>
            </div>
             <div className='h-[1132px] w-[1280px] flex flex-col gap-[64px] items-center'>
            <div className='custom420:w-[380px] w-[350px] h-[1690px] flex flex-col ga-[32px]'>
      {/* 1 */}
      <div className=' custom420:w-[380px] w-[350px] h-[558px] rounded-[5px] flex flex-col gap-[24px] bg-[#f7f7f7f7]'>
              <div className=' custom420:w-[380px] w-[350px] h-[300px]'> <Image className='custom420:w-[380px] w-[350px] h-[300px] object-cover'  src={img1} alt=''/></div>
              <div className=' custom420:w-[380px] custom420:px-[16px] w-[350px] h-[234px]  flex flex-col gap-[24px]'>
            <div className='w-[348px] h-[146px] flex flex-col gap-[8px]'>
            <div className='flex  h-[24px]'>
             <p className='w-[326px] text-[14px]  font-semibold laeding-[21px]'>Design</p>
             <div className='w-[48px] h-[24px] flex'>
             <div className='w-[22px] h-[22px]'><Image className='w-[20px] h-[20px] rounded-[1px]' src={star} alt=''/></div>
             <p className='w-[24px] h-[24px] text-[14px] font-semibold leading-[21px] text-right '>5.0</p>
             </div>
            </div>
            <h5 className=' text-[24px]  font-bold leading-[33.6px]'>UI/UX design 201</h5>
            <p className='text-[16px] w-[326px] leading-[24px]'>Lorem ipsum dolor sit amet,  consecteture  adipiscing elit. susoendisse varius enim in eros</p>
            </div>
            <div className='w-[382px] h-[40px] flex gap-[16px]'>
            <button className='w-[117px] h-[40px] border-solid border-black border-[1px] rounded-[5px]'>Enroll Now</button>
            <button className='w-[77px] h-[40px]'> $400</button>
            </div>
              </div>
               </div>
          {/* 2 */}
          <div className=' custom420:w-[380px] w-[350px] h-[534px] rounded-[5px] flex flex-col gap-[24px bg-[#f7f7f7f7]'>
              <div className='custom420:w-[380px] w-[350px] h-[300px]'> <Image className='object-cover h-[300px] rounded-[5px]' src={img2} alt=''/></div>
              <div className=' custom420:w-[380px] custom420:px-[16px] w-[350px] h-[234px]  flex flex-col gap-[24px]'>
            <div className='w-[382px] h-[122px] flex flex-col gap-[8px]'>
            <div className='flex  h-[24px]'>
             <p className='w-[326px] text-[14px]  font-semibold laeding-[21px]'> Design</p>
             <div className='w-[48px] h-[24px] flex'>
             <div className='w-[22px] h-[22px]'><Image className='w-[20px] h-[20px] rounded-[1px]' src={star} alt=''/></div>
             <p className='w-[24px] h-[24px] text-[14px] font-semibold leading-[21px] text-right '>5.0</p>
             </div>
            </div>
            <h5 className=' text-[24px]  font-bold leading-[33.6px]'> UI/UX design 201</h5>
            <p className='text-[16px] leading-[24px]'>Lorem ipsum dolor sit amet,  consecteture  adipiscing elit. susoendisse varius enim in eros</p>
            </div>
            <div className='w-[382px] h-[40px] flex gap-[16px]'>
            <button className='w-[117px] h-[40px] border-solid border-black border-[1px] rounded-[5px]'>Enroll Now</button>
            <button className='w-[77px] h-[40px]'> $400</button>
            </div>
              </div>
               </div>
              {/* 3 */}
              <div className=' custom420:w-[380px] w-[350px] h-[534px] rounded-[5px] flex flex-col gap-[24px bg-[#f7f7f7f7]'>
              <div className='custom420:w-[380px] w-[350px] h-[300px]'> <Image className='object-cover h-[300px] rounded-[5px]' src={img3} alt=''/></div>
              <div className='custom420:w-[380px] custom420:px-[16px] w-[350px] h-[234px]  flex flex-col gap-[24px] '>
            <div className='w-[382px] h-[122px] flex flex-col gap-[8px]'>
            <div className='flex  h-[24px]'>
             <p className='w-[326px] text-[14px]  font-semibold laeding-[21px]'> Design</p>
             <div className='w-[48px] h-[24px] flex'>
             <div className='w-[22px] h-[22px]'><Image className='w-[20px] h-[20px] rounded-[1px]' src={star} alt=''/></div>
             <p className='w-[24px] h-[24px] text-[14px] font-semibold leading-[21px] text-right '>5.0</p>
             </div>
            </div>
            <h5 className=' text-[24px]  font-bold leading-[33.6px]'> UI/UX design 201</h5>
            <p className='text-[16px] leading-[24px]'>Lorem ipsum dolor sit amet,  consecteture  adipiscing elit. susoendisse varius enim in eros</p>
            </div>
            <div className='w-[382px] h-[40px] flex gap-[16px]'>
            <button className='w-[117px] h-[40px] border-solid border-black border-[1px] rounded-[5px]'>Enroll Now</button>
            <button className='w-[77px] h-[40px]'> $400</button>
            </div>
              </div>
               </div>
               </div>
            </div>
         <button className='w-[152px] h-[40px]  custom420:mx-[114px] test-[16px] leading-[24px] border-solid border-black border-[1px] rounded-[5px]'>View all Courses </button>
         </div>
         </section>
         )
         };
  
        
      