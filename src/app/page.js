import Image from "next/image";
import styles from "./page.module.css";



export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
       
      </div>

      
   

    <div className={styles.hh} >
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/OIG4.svg"
          alt="HerHack Logo"
          width={200}
          height={300}
          priority
          
        />
        
      </div>

      <div className={styles.title}> <h1>HerHacks</h1> </div>

     
          
      </div>

       <div> 

       <div className={styles.signup}><button><h2>Sign in!</h2></button>  </div>

      </div>
      
       
      
      
      



      <div className={styles.grid}>
        <a
          href= "page2"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            About <span>-&gt;</span>
          </h2>
          <p>Learn more about the creators!</p>
        </a>

        <a
          href="page3"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn how to code in Python with our comprehensive tutorials and interactive exercises!</p>
        </a>

        <a
          href="page4"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Create <span>-&gt;</span>
          </h2>
          <p>Create a new event!</p>
        </a>

        <a
          href="page5"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
