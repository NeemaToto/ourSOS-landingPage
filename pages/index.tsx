import { Button, Group } from "@mantine/core";
import React, { useRef } from "react";
import styles from 'styles/Home.module.css'


export default function IndexPage() {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return (
    <div>
      <div>
        <lottie-player
          id="firstLottie"
          ref={ref}
          autoplay
          mode="normal"
          src="animation/introPageAnimation.json"
          style={{ width: "100vw", height: "100vh" }}
        />
      </div>
      <div>

      </div>
    </div>
  );
}
