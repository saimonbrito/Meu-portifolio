import { Header } from "./header";
import { Footer } from "./Footer";
import { Slider } from "./Slider";

export function Navgator() {
	return (
		<div
			className=" w-screen flex flex-col items-center gap-6h-screen px-10 "
		>
			<Header />
			<Slider />
			<Footer />
		
		</div>
	);
}
