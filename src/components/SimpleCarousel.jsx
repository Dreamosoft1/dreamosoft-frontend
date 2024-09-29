import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import { useState, useEffect } from "react";

const imageStyle = {
  transform: "scale(1.7)",
};

function TechStack() {
  const [icons, setIcons] = useState([]);
  useEffect(() => {
    const loadIcons = async () => {
      const importedIcons = [];
      for (let i = 1; i <= 23; i++) {
        const icon = await import(`../assets/icons/tech_stack/${i}.svg`);
        importedIcons.push(icon.default);
      }
      setIcons(importedIcons);
    };
    loadIcons();
  }, []);

  return (
    <div className="relative flex h-full w-screen bg-transparent">
      <div className="container w-screen relative z-20 overflow-x-hidden">
        <Splide
          options={{
            type: "loop", // Loop back to the beginning when reaching the end
            autoScroll: {
              pauseOnHover: false, // Do not pause scrolling when hovering over the carousel
              pauseOnFocus: false, // Do not pause scrolling when the carousel is focused
              rewind: true, // Rewind to start when the end is reached
              speed: 1.5, // Scrolling speed
            },
            arrows: false, // Hide navigation arrows
            pagination: false, // Hide pagination dots
            fixedWidth: "100px", // Fixed width for each slide
            gap: "50px", // Gap between slides
          }}
          extensions={{ AutoScroll }} // Use the AutoScroll extension
        >
          {icons.map((icon, index) => (
            <SplideSlide key={index}>
              <img
                src={icon}
                alt="Poster Brooklyn"
                style={imageStyle}
                className="w-28 md:w-96"
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
}

export default TechStack;
