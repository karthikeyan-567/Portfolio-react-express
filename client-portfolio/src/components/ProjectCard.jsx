import React from 'react'

const ProjectCard = (data) => {
  return (
    <div>
      <div className='Card-project bg-[#1E3E62] w-[450px] p-1 py-2  flex justify-center  relative left-20 '>
        <img className='w-[97%] h-[80%] ' src={data.img} alt="" />
        <div></div>
      </div>
    </div>
  )
}

export default ProjectCard
