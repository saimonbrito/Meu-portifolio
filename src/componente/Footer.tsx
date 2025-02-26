import Fotocapa from "../../public/img/foto.jpeg";
import In from "../../public/img/linkedin .png";
import Git from "../../public/img/github.png";
import zap from "../../public/img/whatsapp (1).png";

export function Footer() {
	return (
		<div
			className="w-screen h-auto p-10 bg-slate-900"
		>
			{/* conteudo do corpo */}
			<div className="flex fle justify-between items-center">
				<div className="flex flex-col gap-4">
					<strong >
						<a href="https://www.linkedin.com/in/mauricio-fernandes-8393071a6/">
							<img src={In} width={40} alt=""   className="bg-white rounded-xl"/>
						</a>
					</strong>
					<strong>
						<a href="https://github.com/saimonbrito">
							<img src={Git} width={40} alt="" className="bg-white rounded-xl" />{" "}
						</a>
					</strong>
					<strong>
						<a href="https://wa.me/5511965261983">
							<img src={zap} width={40} alt=""  className="bg-white rounded-xl" />
						</a>
					</strong>
					<strong></strong>
				</div>
				<div className=" text-gray-100 text-sm text-1xl ">
					<p>
						Com determinação e paixão pela tecnologia <br />
						estou pronto para mostrar meu potencial <br />
						como desenvolvedor full stack junior. <br />
						Vamos juntos construir um futuro digital incrível!
					</p>
				</div>

				<div className="">
					<img className="rounded-full w-32 " src={Fotocapa} alt="" />
				</div>
			</div>
		</div>
	);
}
