import React from 'react';
import styles from "./Featured.module.css";
import Image from 'next/image';
const Featured = () =>{
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b className={styles.bold}>Compartiendo Conocimiento a Través de BlogConnect.</b>
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/p1.jpeg" alt='' fill className={styles.image}/>
                </div> 
                    <div className={styles.textContainer}>
                        <h1 className={styles.postTitle}>¡Bienvenido a BlogConnect! </h1>
                        <p className={styles.postDescription}>
                        Aquí encontrarás una plataforma dedicada a intercambiar conocimientos científicos.
                         Nuestro objetivo es crear un espacio donde científicos, investigadores y 
                         entusiastas de la ciencia puedan compartir sus descubrimientos, teorías y experiencias. Explora una amplia variedad de temas científicos, desde la física y la biología hasta la astrología y la tecnología. Únete a nuestra comunidad y sumérgete en un mundo de 
                        aprendizaje colaborativo, donde la ciencia se conecta y se comparte. 
                        ¡Descubre, aprende y contribuye en BlogConnect!"
                        </p>
                        <button className={styles.button}>Lee mas</button>
                    </div>
            </div>
        </div>

        
    )    
}

export default Featured;