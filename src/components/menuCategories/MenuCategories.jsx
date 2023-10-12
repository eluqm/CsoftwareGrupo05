import React from "react";
import Link from "next/link";
import styles from "./menuCategories.module.css"

const MenuCategories = () =>{
    return (
        <div className={styles.categoryList}>
                <Link href="/blog?cat-style" className={`${styles.categoryItem} ${styles.develop}`}>Desarrollo Software</Link>
                <Link href="/blog" className={`${styles.categoryItem} ${styles.ia}`}>Inteligencia Artificial</Link>
                <Link href="/blog" className={`${styles.categoryItem} ${styles.security}`}> Seguridad Informatica</Link>
                <Link href="/blog" className={`${styles.categoryItem} ${styles.developweb}`}>Desarrollo web y movil</Link>
                <Link href="/blog" className={`${styles.categoryItem} ${styles.proyects}`}>Gestion de proyectos Software</Link>
            </div>
    )
}

export default MenuCategories;