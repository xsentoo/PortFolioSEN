import React from 'react'

const about = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About Me</p>
            </div>


              <p className='text-xl mt-20'> My name is Alexandros Georgiadis. I am Greek and the last 5 years I am living
              and working in Bordeaux. I am a cabin crew supervisor and recently I finished a full-stack intence Bootcamp
              in web Develpment
              Now I am looking forward to start my career as web developer  </p>


              <br />

              <p className='text-xl'> During the bootcamp we set up several Projects in teams of four.
              The stacks we used are Ruby, Ruby in Rails, HTML5, SASS, SQL, Javascript and Github.The projects were
              initialy designed on Figma and were deployd in Heroku.  </p>

              <br />

              <p className='text-xl'> After the bootcamp I kept studing new techs by my own.
              So far I am studing React with Tailwind. I have additional knowledge in Wordpress by
              using ready themes or even editing custom themes.</p>

              <br />

              <p className='text-xl'> My experiece in previous jobs tought me how to work
              in a team and proactive under preasure. I believe that my passion for coding and new technologies my great asset.
              I would be excited to work in your team </p>
        </div>
    </div>
  )
}

export default about
