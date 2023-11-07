import { Button, Group } from "@mantine/core";
import styles from 'styles/Home.module.css'
import Animation from 'components/Animation'
import { Features } from "components/Features";
import { Footer } from 'components/Footer'
import { NewsLetter } from 'components/Newsletter'

export default function IndexPage() {
  
  return (
    <div className={styles.container}>
      <Animation />
     
      <Features />
      
      <NewsLetter />
        <Footer/>

      
    </div>
  );
}
