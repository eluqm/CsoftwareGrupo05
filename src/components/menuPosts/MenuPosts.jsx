import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./menuPosts.module.css"

const MenuPosts = ({withImage}) => {

    return (
        <div className={styles.items}> 
        <Link href="/" className={styles.item}>
        {withImage && (<div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
            </div>)}
            <div className={styles.textContainer}>
                <span className={`${styles.category} ${styles.develop}`}>
                    Desarrollo Software
                </span>
                <h3 className={styles.postTitle}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                </h3>
                <div className={styles.detail}>
                    <span className={styles.username}>John Doe</span>
                    <span className={styles.date}>03.10.2023</span>
                </div>
            </div>
        </Link>

        <Link href="/" className={styles.item}>
        {withImage && (<div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
            </div>)}
            <div className={styles.textContainer}>
                <span className={`${styles.category} ${styles.ia}`}>
                    Inteligencia Artificial
                </span>
                <h3 className={styles.postTitle}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                </h3>
                <div className={styles.detail}>
                    <span className={styles.username}>John Doe</span>
                    <span className={styles.date}>03.10.2023</span>
                </div>
            </div>
        </Link>

        <Link href="/" className={styles.item}>
        {withImage && (<div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
            </div>)}
            <div className={styles.textContainer}>
                <span className={`${styles.category} ${styles.developweb}`}>
                    Desarrollo web
                </span>
                <h3 className={styles.postTitle}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                </h3>
                <div className={styles.detail}>
                    <span className={styles.username}>John Doe</span>
                    <span className={styles.date}>03.10.2023</span>
                </div>
            </div>
        </Link>
        
        <Link href="/" className={styles.item}>
        {withImage && (<div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
            </div>)}
            <div className={styles.textContainer}>
                <span className={`${styles.category} ${styles.proyects}`}>
                    Gestion de Proyectos
                </span>
                <h3 className={styles.postTitle}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                </h3>
                <div className={styles.detail}>
                    <span className={styles.username}>John Doe</span>
                    <span className={styles.date}>03.10.2023</span>
                </div>
            </div>
        </Link>

        <Link href="/" className={styles.item}>
            {withImage && (<div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
            </div>)}
            <div className={styles.textContainer}>
                <span className={`${styles.category} ${styles.security}`}>
                    Seguridad Informatica
                </span>
                <h3 className={styles.postTitle}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                </h3>
                <div className={styles.detail}>
                    <span className={styles.username}>John Doe</span>
                    <span className={styles.date}>03.10.2023</span>
                </div>
            </div>
        </Link>

    </div>

    )
}

export default MenuPosts;