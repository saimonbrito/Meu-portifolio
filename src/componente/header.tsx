

export function Header() {
	return (
		<div >
			<nav className="flex  bg-gray-900 items-center flex-col md:flex-row md:justify-around w-screen md:px-3 md:gap-4">
				<h3 className="text-slate-600 py-4 text-4xl  hover:text-slate-200">
					Meu protifolio
				</h3>
				<ol className="flex justify-center items-center gap-8  text-slate-600 text-1xl">
					<a href="#sobre"><li className="  hover:text-slate-200">Sobre</li></a>
					<a href=""><li className="  hover:text-slate-200">Projetos</li></a>
					<a href=""><li className="  hover:text-slate-200">Contatos</li></a>
				</ol>
			</nav>
		</div>
	);
}
