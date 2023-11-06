import lottie from 'lottie-web'
import { createRef, useEffect } from 'react'
import styles from './IntroAnimation.module.css'

export default function IntroAnimation(){

    let animationContainer = createRef();

    useEffect(() => {
      const anim = lottie.loadAnimation({
        container: animationContainer.current,
        rerender: 'svg',
        loop: false,
        autoplay: true,
        path: '/animations/introPageAnimation.json'
      })
  
      return () => anim.destroy();
    }, [])

    return(
        <div className={styles.animationContainer} ref={animationContainer}/>  
    )
}