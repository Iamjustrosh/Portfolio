import React from 'react'


const Footer = () => {
  return (
    <div className='border-t p-4 md:text-xl border-[#ccc] flex justify-between items-center text-white'>
      <div className="">Roshan Jain</div>
      <div className="">Made with ❤️ by <b>Roshan</b></div>
      <div className="md:flex hidden gap-3 justify-center items-center">
        <a href="https://www.instagram.com/am_crusher.hatake/" target="_blank" rel="noopener noreferrer" className="text-xl">
          <i className="ri-instagram-fill"></i>
        </a>
        <a href="https://www.linkedin.com/in/roshanjain7422/" target="_blank" rel="noopener noreferrer" className="text-xl">
          <i className="ri-linkedin-fill"></i>
        </a>
        <a href="https://github.com/Iamjustrosh/" target="_blank" rel="noopener noreferrer" className="text-xl">
          <i className="ri-github-fill"></i>
        </a>
        <a href="https://x.com/Iamjustrosh" target="_blank" rel="noopener noreferrer" className="text-xl">
          <i className="ri-twitter-fill"></i>
        </a>
      </div>
    </div>
  )
}

export default Footer