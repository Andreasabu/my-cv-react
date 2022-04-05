import React from 'react'

const About = ({aboutMe}) => {
  return (
    <div className='card'>
        {aboutMe.map((item) => 
            <p>{item.info}</p>
        )}
    </div>
  )
}

export default About