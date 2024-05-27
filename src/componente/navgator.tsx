
import {Header} from './header'
import {Main} from './main'
import { Carrocel } from './carrocel'

export function Navgator(){
  return(
    <div className="w-screen flex flex-col justify-center items-center bg-neutral-400 h-screen p-10">
                
        <Header/>
        <Main/>
        <Carrocel/>
                  
    </div>
  )
}