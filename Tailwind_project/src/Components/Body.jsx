import React from 'react'

const Body = () => {
  return (
    <div className='space-y-4 lg:flex'> 
      <div className='flex items-center justify-center lg:flex-1 lg:order-2 lg:justify-end'>
        <img src='./assets/Blue-Shape.svg' alt='1st' className='-rotate-45 h-64 md:h-72 lg:h-[400px]'></img>
        <img src='./assets/Pink-Shape.svg' alt='2nd' className='absolute -rotate-[30deg] h-64 md:h-72 lg:h-[400px]'></img>
        <img src='./assets/Purple-Shape.svg' alt='3rd' className='absolute -rotate-[15deg] h-64 md:h-72 lg:h-[400px]'></img>
        <img src='./assets/Hero-Model.png' alt='4th' className='absolute h-64 md:h-72 lg:h-[400px]'></img>
      </div>
      <div className='lg:flex-1 lg:order-1'>
        <h1 className='text-5xl font-bold font-playfair leading-tight'>Host your website in less than 5 minutes</h1>
        <p className='font-lato text-gray-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo dolores ex cumque deleniti, totam natus eos explicabo eum maxime magnam?</p>
        <form action='' className='flex flex-col gap-4 md:flex-row'>
          <input className = 'rounded-md px-4 py-3 placeholder:text-blue-500' type='email' placeholder='Enter your mail'></input>
          <button className='rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-700 text-white'>Join waitlist</button>
        </form>
        <div>
          <img src='./assets/Checkmark.svg' alt='Checkmark'></img>
          <p className='font-lato text-gray-400'>No Spam ever.</p>
        </div>
      </div>
    </div>
  )
}

export default Body