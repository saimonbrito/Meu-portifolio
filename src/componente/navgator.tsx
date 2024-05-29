
import {Header} from './header'
import {Main} from './main'
import { Carrocel } from './carrocel'


export function Navgator(){
  return(
    <div  className=" bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 
                 w-screen flex flex-col items-center gap-6 bg-neutral-400 h-screen px-10 ">
        <Header/>
        <Main/>
        <Carrocel/>
                  
    </div>
  )
}