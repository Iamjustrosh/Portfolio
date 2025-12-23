import React from 'react'


const Footer = () => {
  return (
    <div className='border-t p-4 md:text-xl border-[#ccc] flex justify-between items-center text-white'>
      <div className="">Iamjustrosh</div>
      <div className="">Made with ❤️ by <b>Roshan</b></div>
      <div className="md:flex hidden gap-3 justify-center items-center">
        <a href="https://www.instagram.com/iamjustrosh/" target="_blank">
        <div className="text-xl"><i class="ri-instagram-fill"></i></div>
        </a>
        <a href="https://www.linkedin.com/in/iamjustrosh/" target="_blank">
        <div className="text-xl"><i class="ri-linkedin-fill"></i></div>
        </a>
        <a href="https://github.com/Iamjustrosh/" target="_blank">
        <div className="text-xl"><i class="ri-github-fill"></i></div>
        </a>
      </div>
    </div>
  )
}

export default Footer