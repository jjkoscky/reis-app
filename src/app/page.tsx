'use client'

import Image from 'next/image'
import { FaInstagram } from 'react-icons/fa'
import { AiFillFacebook, AiOutlineMail } from 'react-icons/ai'

import 'lightbox.js-react/dist/index.css'
import {SlideshowLightbox, initLightboxJS} from 'lightbox.js-react'
import ArrowDwon from './Components/ArrowDown'
import ArrowDown from './Components/ArrowDown'

export default function Home() {
  



  return (
    <main className="">
  
      <div className=' bg-black mt-2 md:mt-[7.75rem] h-screen w-fit m-auto'>
      
        <div className='md:flex justify-center md:pt-7'> 
          <div>
            <Image src={'/perfil2.jpg'} alt='Lucas Reis' width={400} height={400} className='rounded-full border-2 border-gray-800  md:mr-10  w-[350px] h-[350px] md:w-[400px] md:h-[400px] md:mt-[3.25rem]'/>
          </div>
          <div className='mt-3 md:mt-10 w-fit m-auto'>
            <p className='text-4xl md:leading-[80px] md:w-[600px] md:text-7xl font-medium bg-gradient-to-r from-blue-400 to-violet-500 text-transparent bg-clip-text'>
            Hey! Meu nome é <br /> Lucas Reis! <br />          
            </p>
            <p className='w-[300px] md:w-[500px] font-medium text-lg text-justify mt-2 text-slate-200'>
            Sou fotógrafo desde 2017.  
            Sempre com um olhar artístico, utilizando a criatividade como a melhor ferramenta para pintar a realidade que não enxergamos.
            </p>
          </div>
        </div>
        <div className='mt-2 md:mt-14 md:w-[940px] m-auto text-start '>
          <div className='ml-[30px] flex md:mt-[-147px] md:ml-[391px]'>
            <a href='mailto:lucasreis.097s@gmail.com' className='text-xl pr-3 pl-3 py-2 bg-[#d1d5db] text-black rounded-xl flex hover:bg-white'>Contato
              <AiOutlineMail size={30} className="text-black flex ml-3"/>
            </a>
            <a href="https://www.instagram.com/lreis.ph" target='_blank' className='ml-7 mt-1'>
              <FaInstagram size={35} className="text-[#d1d5db] hover:text-white" />
            </a>
            
            <a href="" className='ml-7 mt-1 hidden'>
              <AiFillFacebook size={35} className="text-[#d1d5db] hover:text-white"/>
            </a>
          </div>
          
        </div>
        <div className='flex md:block m-auto w-fit md:mt-[120px]'>
          <span className='hidden md:block mt-5 text-lg md:text-xl font-medium m-auto text-slate-200'>Conheça Meu Trabalho</span>
          <div className='ml-4 md:ml-[100px]'>
              <ArrowDown />
          </div>
        </div>
      </div>
     <div className='p-2 md:p-0 m-auto pt-[150px]  w-fit h-screen bg-black' >
      <SlideshowLightbox className='container grid grid-cols-1 md:grid-cols-2 gap-2 mx-auto' showThumbnails={true}>
        <img className='w-full rounded' src='/Fotos/001.jpeg' />
        <img className='w-full rounded' src='/Fotos/002.jpeg' />
        <img className='w-full rounded ' src='/Fotos/003.jpeg' />
        <img className='w-full rounded' src='/Fotos/004.jpeg' />
      </SlideshowLightbox> 
     </div>
    </main>
  )
}
