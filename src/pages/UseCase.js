import UseCases from "../components/useCases/UseCases";
import Contact from "../components/contact/Contact";
import Navbar from "../components/hero/components/Navbar";
import Footer from "../components/footer/Footer";
import { useParams } from "react-router-dom";

function UseCase() {
  // const handleMouseOver = (e) => {
  //   const object = e.target;
  //   console.log(`ETARGET: ${object}`);
  //   object.material.color.set(0xff0000); // Change color to red when hovered
  // };

  return (
    <div>
      <Navbar />
      <UseCases />
      <Contact />
      <Footer />
    </div>
  );
}

export default UseCase;
