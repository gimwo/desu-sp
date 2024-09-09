import { useContext, useEffect } from "react";
import Hero from "../components/hero/Hero";
import Section from "../components/section/Section";
import PageContext from "../context/PageContext";
import Navbar from "../components/hero/components/Navbar";
import Contact from "../components/contact/Contact";

function Home() {
  const { setPage } = useContext(PageContext);
  useEffect(() => {
    setPage(() => "");
  }, [setPage]);
  return (
    <div>
      <Navbar />
      <Hero />
      <Section
        name="feature1"
        type="1"
        headText="A New Beginning"
        text="Our projects stand for technical building equipment (TGA) that
        consistently thinks energy concepts, ecology and economic efficiency
        together and forward. Discover now."
      />
      <Section
        name="feature2"
        type="2"
        headText="A New Beginning"
        text="Our projects stand for technical building equipment (TGA) that
        consistently thinks energy concepts, ecology and economic efficiency
        together and forward. Discover now."
      />
      <Section
        name="feature3"
        type="1"
        headText="A New Beginning"
        text="Our projects stand for technical building equipment (TGA) that
        consistently thinks energy concepts, ecology and economic efficiency
        together and forward. Discover now."
      />
       <Contact />
    </div>
  );
}

export default Home;
