import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedTextComponent = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "A MERN Stack Developer.",
        "Passionate About Innovation and Design",
        "Expertise in MongoDB, Express.js, React, Node.js",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return <span className="font-font2 md:text-xl" ref={typedRef}></span>;
};

export default TypedTextComponent;
