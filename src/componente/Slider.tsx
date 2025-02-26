

import img1 from "../../public/img/projeto Portifolio.png";
import img2 from "../../public/img/mysql (1).png";
import img3 from "../../public/img/nodejs.png";
import img4 from "../../public/img/script-java (2).png";

export function Slider() {
	return (
		<div className=" flex  justify-between items-center flex-wrap m-4  gap-8" >
			
				<a href=""><img src={img1} alt="..." className="w-96 h-80"/></a>
				<a href=""><img src={img2} alt="..." className="w-96 h-80"/></a>
				<a href=""><img src={img3} alt="..." className="w-96 h-80"/></a>
				<a href=""><img src={img4} alt="..." className="w-96 h-80"/></a>
			
		</div>
	);
}
