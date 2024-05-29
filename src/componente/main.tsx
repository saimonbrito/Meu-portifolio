import Fotocapa from '../../public/img/foto.jpeg'
import In from '../../public/img/linkedin .png'
import Git from '../../public/img/github.png'
import zap from '../../public/img/whatsapp (1).png'


export function Main(){
    return(
        <div className="w-screen h-auto p-10   
            sm:
            md:bg-red-500
            lg:bg-amber-500
            xl:bg-lime-500
            2xl:bg-slate-900
            ">
                  {/* conteudo do corpo */}
                <div className='flex fle justify-between items-center'> 
                    <div className='flex flex-col gap-4'>
                       <strong><img src={In} width={40} alt="" /></strong>
                       <strong><img src={Git} width={40} alt="" /></strong>
                       <strong><img src={zap} width={40} alt="" /></strong>
                       <strong>iconi4</strong>
                    </div>
                    <div className=' text-green-900 text-sm text-1xl '>
                    
                    <p>Com determinação e paixão pela tecnologia <br/>
                      estou pronto para mostrar meu potencial <br/>
                      como desenvolvedor full stack junior. <br/>
                      Vamos juntos construir um futuro digital incrível!
                    </p>
                    </div>

                    <div className=''>
                    <img className='rounded-full w-32 ' src={Fotocapa} alt="" />
                    </div>
                </div>
    
       </div>
    )
}