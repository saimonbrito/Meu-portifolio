import Fotocapa from '../../public/img/foto.jpeg'
import { Carrocel } from './carrocel'

export function Navgator(){
  return(
    <div className="w-screen flex flex-col justify-center items-center bg-neutral-400 h-screen p-10">
        <nav className='flex gap-96'>
               <h3 className='text-black py-4 text-4xl'>Meu protifolio</h3>
              <ol className='flex justify-center items-center gap-20 text-black text-2xl'>
              <li>Sobre</li>
              <li>Projetos</li>
              <li>Contatos</li>
              </ol>
             </nav>
       <div className="w-4/5 h-4/5 p-24  rounded-2xl bg-slate-300">
                  {/* conteudo do corpo */}
                <div className='flex  justify-center items-center '> 
                    <div className='flex-1 text-gray-500 text-4xl'>
                    
                    <p>Com determinação e paixão pela tecnologia <br/>
                      estou pronto para mostrar meu potencial <br/>
                      como desenvolvedor full stack junior. <br/>
                      Vamos juntos construir um futuro digital incrível!
                    </p>
                    </div>

                    <div className='flex justify-center items-center'>
                    <img className='rounded-full w-32' src={Fotocapa} alt="" />
                    </div>
                </div>
                {/* carrocel */}
                <div>
                  <Carrocel/>
                </div>
       </div>
       
    </div>
  )
}