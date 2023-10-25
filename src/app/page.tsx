import Image from 'next/image'
import { FaInstagram } from 'react-icons/fa'
import { AiFillFacebook, AiOutlineMail } from 'react-icons/ai'

export default function Home() {
  return (
    <main className="">
      <div className=' bg-black '>
      <div className='text-center'>
        <h1 className='text-3xl mt-7 font-medium'>Lucas Reis fotografias</h1>
      </div>
        <div className='md:flex justify-center pt-7'> 
          <Image src={'/perfil2.jpg'} alt='Lucas Reis' width={400} height={400} className='rounded-full border-2 border-gray-800 ml-5 md:ml-0 w-[350px] h-[350px] md:w-[400px] md:h-[400px]'/>
          <p className='w-[300px] md:w-[500px] mt-6 ml-10 md:mt-36 font-medium text-lg md:ml-7 text-justify'>Hey! Meu nome é Lucas Reis! 
          Sou fotógrafo desde 2017. Cobrindo eventos, casamentos, festas e ensaios em geral. 
          Sempre com um olhar artístico, utilizando a criatividade como a melhor ferramenta para pintar a realidade que não enxergamos.</p>
        </div>
        <div className='mt-6 md:w-[940px] m-auto text-start '>
          <div className='ml-[40px] flex md:mt-[-100px] md:ml-[433px]'>
            <button className='text-xl pr-3 pl-3 py-2 bg-[#d1d5db] text-black rounded-xl flex hover:bg-white'>Contato
              <AiOutlineMail size={30} className="text-black flex ml-3"/>
            </button>
            <a href="" className='ml-7 mt-1'>
              <FaInstagram size={35} className="text-[#d1d5db] hover:text-white" />
            </a>
            <a href="" className='ml-7 mt-1'>
              <AiFillFacebook size={35} className="text-[#d1d5db] hover:text-white"/>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
