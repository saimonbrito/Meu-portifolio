import { Carousel } from "flowbite-react";

import img1 from '../../public/img/foto.jpeg'
import img2 from '../../public/img/mysql (1).png'
import img3 from '../../public/img/nodejs.png'
import img4 from '../../public/img/script-java (2).png'


export function Carrocel() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 w-64">
      <Carousel>
        <img src={img1} alt="..." />
        <img src={img2}alt="..." />
        <img src={img3} alt="..." />
        <img src={img4} alt="..." />
       
      </Carousel>
    </div>
  );
}