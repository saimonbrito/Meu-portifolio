import Fotocapa from '../../public/img/foto.jpeg'

export function Main(){
    return(
        <div className="w-5/6 h-2/2 p-10 rounded-2xl bg-yellow-50 shadow-xl md:back 
            sm:bg-slate-500
            md:bg-red-500
            lg:bg-amber-500
            xl:bg-lime-500
            2xl:bg-slate-900
            ">
                  {/* conteudo do corpo */}
                <div className='flex fle justify-center items-center'> 
                    <div className='flex-1 text-green-900 text-sm text-1xl '>
                    
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