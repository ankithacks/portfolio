import { useState, useEffect, useRef } from "react";
import FOG from "vanta/dist/vanta.fog.min";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const Home = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <section ref={myRef} className="h-screen">
      <Navbar />
      <Hero/>
    </section>
  );
};

export default Home;
