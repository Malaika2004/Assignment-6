import React from "react"; 
 
 export default function MobileAchievements (){
    return(
      <section  className="w-[428px] h-[451px] py-[48] px-[24px] flex flex-col items-center" >
      <div className="  w-[380px] max-380:w-[350px] h-[ 355px] flex flex-col   gap-[24px]  items-center">
       <div className=" h-[147px] w-[380px]  px-[4] gap-[24px] items-center">
         <h2 className="text-[32px] text-center leading-[41.6px] font-bold">Our Achievements</h2>
          <p className="text-[18px] leading-[27px] text-center">Lorem ipsum dolor sit amet,  consecteture  adipiscing elit. susoendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolar interdum nulla, ut commodo diam libero viate erat.</p>
       </div>
       <div className=" h-[176px] w-[380px]  gap-[24px]  flex-col flex ">
      <div className="  h-[76px] flex  gap-[16px] my-[2px] ">
       <div className="flex flex-col  w-[182px] gap-[8px] my-[8px]  h-[60px]">
          <h3 className="text-[20px]  leading-[28px] font-bold mx-[68px]">+200</h3>
          <p className="text-[16px] mx-[61.5px] leading-[24px]">Courses</p>
       </div>
       <div className=" w-[182px] h-[60px] flex flex-col gap-[8px] my-[8px]  ">
        <h3 className="text-[20px]  leading-[28px] font-bold mx-[73px] ">50k</h3>  
        <p className="text-[16px] mx-[61px] leading-[24px] ">Mentors</p>
      </div>
      </div>
      <div className=" h-[76px] flex  gap-[16px] my-[2px] ">
       <div className="flex flex-col   gap-[8px]  my-[8px][182px]  h-[60px]">
          <h3 className="text-[20px] mx-[68px]   leading-[28px] font-bold">370k</h3>
          <p className="text-[16px] mx-[596px] leading-[24px]">Students</p>
       </div>
       <div className="flex flex-col  w-[182px] gap-[8px] my-[8px] h-[60px]">
        <h3 className="text-[20px] mx-[68pxpx] leading-[28px] font-bold">100+</h3>  
        <p className="text-[16px] mx-[43px] leading-[24px]">Recogninition</p>
      </div>
      </div>
       </div>
      </div>
      </section>
  )
}