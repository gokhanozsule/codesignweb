import React from 'react'

const ProjectCard = ({text, src, to, ...props}) => {

  
  return (
    <div className='w-[60%] rounded-3xl custom-shadow opacity-90 
    hover:opacity-100 hover:scale-[1.02] hover:border-[2px] hover:border-[#e5e4e2] transition-all cursor-pointer relative'
    onClick={() => document.location.href = to}
    >
        <img src={src} className='w-full rounded-3xl custom-shadow ' />
        <div className='absolute left-0 bottom-[20%] w-full h-10 bg-slate-200/70 flex text-center items-center justify-center  '>
            {text}
        </div>
    </div>
  )
}

export default ProjectCard