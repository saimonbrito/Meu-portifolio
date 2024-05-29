export function Header(){
    return(
        <div>
            <nav className='flex  items-center flex-col md:flex-row md:justify-between w-screen md:px-3 md:gap-4'>
               <h3 className="text-slate-600 py-4 text-4xl  hover:text-slate-200">Meu protifolio</h3>
              <ol className='flex justify-center items-center gap-4  text-slate-600 text-1xl'>
              <li className="  hover:text-slate-200">Sobre</li>
              <li className="  hover:text-slate-200">Projetos</li>
              <li className="  hover:text-slate-200">Contatos</li>
              </ol>
             </nav>
        </div>
    )
}