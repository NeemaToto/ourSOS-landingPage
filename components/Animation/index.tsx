import React, { useRef } from "react";

export default function Animation(){
    const ref = useRef(null);
    React.useEffect(() => {
      import("@lottiefiles/lottie-player");
    });

    return(
        <div role='presentation'>
             <lottie-player
          id="firstLottie"
          ref={ref}
          autoplay
          mode="normal"
          src="animation/introPageAnimation.json"
          style={{ width: "100vw", height: "100vh" }}
        />
        </div>
    )
}