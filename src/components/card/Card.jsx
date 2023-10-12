import styles from "./card.module.css"
import Image from "next/image"
import Link from "next/Link"
const Card = () =>{
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>26.09.2023 - </span>
                    <span className={styles.category}>CULTURA</span>
                </div>
                <Link href="/">
                    <h1>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </h1>
                </Link>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, ducimus cupiditate sapiente nulla rerum, reprehenderit laboriosam optio sint, maiores id in. 
                    Laboriosam architecto adipisci totam perferendis ducimus nobis neque voluptate.
                </p>
                <Link href="/" className={styles.link}>Leer mas</Link>
            </div>
        </div>
    )    
}

export default Card;