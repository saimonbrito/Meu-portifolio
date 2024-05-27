export function Header(){
    return(
        <div>
            <nav className='flex gap-96'>
               <h3 className='text-black py-4 text-4xl'>Meu protifolio</h3>
              <ol className='flex justify-center items-center gap-20 text-black text-2xl'>
              <li>Sobre</li>
              <li>Projetos</li>
              <li>Contatos</li>
              </ol>
             </nav>
        </div>
    )
}