// import { useState, useEffect, useCallback } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { Link } from "react-router-dom";
// import hero1 from "@/assets/hero-1.jpg";
// import hero2 from "@/assets/hero-2.jpeg";
// import hero3 from "@/assets/hero-3.jpg";

// const slides = [hero3];

// const HeroSlider = () => {
//   const [current, setCurrent] = useState(0);

//   const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
//   const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

//   useEffect(() => {
//     const timer = setInterval(next, 5000);
//     return () => clearInterval(timer);
//   }, [next]);

//   return (
//     <section className="relative h-screen min-h-[600px] overflow-hidden">
//       {/* Background Images */}
//       {slides.map((slide, i) => (
//         <div
//           key={i}
//           className="absolute inset-0 transition-opacity duration-1000"
//           style={{
//             opacity: i === current ? 1 : 0,
//             backgroundImage: `url(${slide})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         />
//       ))}

//       {/* Overlay */}
//       <div className="absolute inset-0" style={{ background: "var(--gradient-hero-overlay)" }} />

//       {/* Static Content */}
//       <div className="relative z-10 h-full flex items-center">
//         <div className="container-custom px-4 sm:px-6 lg:px-8">
//           <div className="max-w-3xl">
//             <p className="text-primary font-medium mb-4 tracking-wider uppercase text-sm animate-fade-up">
//               IT Solutions & Consulting
//             </p>
//             <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
//               Empowering Your Business Through{" "}
//               <span className="text-primary">Digital Transformation</span>
//             </h1>
//             <p className="text-primary-foreground/80 text-lg sm:text-xl mb-8 leading-relaxed max-w-2xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
//               Expert ERP solutions, cloud technologies, and professional staffing services tailored to accelerate your enterprise growth.
//             </p>
//             <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
//               <Link
//                 to="/services"
//                 className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all duration-200 shadow-lg"
//               >
//                 Explore Services
//               </Link>
//               <Link
//                 to="/contact"
//                 className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border-2 border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-all duration-200"
//               >
//                 Contact Us
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Slider Controls */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
//         <button onClick={prev} className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground transition-colors" aria-label="Previous slide">
//           <ChevronLeft className="h-5 w-5" />
//         </button>
//         <div className="flex gap-2">
//           {slides.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setCurrent(i)}
//               className={`h-2 rounded-full transition-all duration-300 ${
//                 i === current ? "w-8 bg-primary" : "w-2 bg-primary-foreground/40"
//               }`}
//               aria-label={`Go to slide ${i + 1}`}
//             />
//           ))}
//         </div>
//         <button onClick={next} className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground transition-colors" aria-label="Next slide">
//           <ChevronRight className="h-5 w-5" />
//         </button>
//       </div>
//     </section>
//   );
// };

// export default HeroSlider;


import { Link } from "react-router-dom";
import hero3 from "@/assets/hero-3.jpg";

const HeroSlider = () => {
  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${hero3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero-overlay)" }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            
            <p className="text-primary font-medium mb-4 tracking-wider uppercase text-sm animate-fade-up">
              IT Solutions & Consulting
            </p>

            <h1
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              Empowering Your Business Through{" "}
              <span className="text-primary">Digital Transformation</span>
            </h1>

            <p
              className="text-primary-foreground/80 text-lg sm:text-xl mb-8 leading-relaxed max-w-2xl animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              Expert ERP solutions, cloud technologies, and professional staffing services tailored to accelerate your enterprise growth.
            </p>

            <div
              className="flex flex-wrap gap-4 animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all duration-200 shadow-lg"
              >
                Explore Services
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border-2 border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;