import { useRef, useEffect } from "react";
import {motion, useInView, useAnimation} from "framer-motion";

function Reveal({children, width}) {

    const ref = useRef(null);
    const isInview = useInView(ref, {once: true});
    const mainControls = useAnimation();
    useEffect(() => {
        if(isInview){
            mainControls.start("visible");
        }
    }, [isInview]);

  return (
    <div ref={ref} className={`relative w-${width}`}>
        <motion.div
        variants={{
            hidden: {
                opacity: 0,
                y: 75,
            },
            visible: {
                opacity: 1,
                y: 0,
            }
        }}

        initial="hidden"
        animate={mainControls}
        transition={{
            duration: 0.50,
            ease: "easeInOut",
            delay: 0.5
        }}
        >
            {children}
        </motion.div>
    </div>
  )
}

export default Reveal