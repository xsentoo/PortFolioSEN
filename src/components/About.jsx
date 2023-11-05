import React from 'react'

const about = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About Me</p>
            </div>


              <p className='text-xl mt-20'> My name is Alexandros Georgiadis. I am Greek and the last 5 years I living
              and working in Bordeaux. I am a cabin crew supervisor and recently I finished a full-stack intence Bootcamp
              in web Develpment
              Now I am looking forward to work as a developer  </p>


              <br />

              <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates,
              placeat aperiam? Necessitatibus itaque
              ipsa atque, quis placeat unde voluptatibus debitis nam distinctio
              sapiente, a corporis, rem sed modi non libero!</p>
        </div>
    </div>
  )
}

export default about
