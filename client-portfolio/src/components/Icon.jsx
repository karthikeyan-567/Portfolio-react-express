import React from 'react'

const Icon = (data) => {
    let progress = data.progress;
  return (
    <div className='flex flex-col justify-center items-center gap-5'>
      <img className='w-[50px]' src={data.img} alt="" />
      <h1>{data.icon}</h1>
      <div className='bg-[black] w-[200px] h-[35px] '>
        <div className='bg-[#6EACDA]  h-[100%]' style={{zIndex:"3" , width:progress}}>
            <p className='text-center'>{progress}</p>
        </div>
      </div>
    </div>
  )
}

export default Icon
