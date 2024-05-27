import Fotocapa from '../../public/img/foto.jpeg'

export function Main(){
    return(
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
    
       </div>
    )
}