import React from 'react'
import styles from "./categoryList.module.css"
import Link from 'next/link'
import Image from 'next/image'
const CategoryList = () =>{
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>Categorias</h1>
            <div className={styles.categories}>
                 <Link href="/blog" className={`${styles.category} ${styles.develop}`}>
                     <Image src="/desarrollo.png" 
                     alt="" 
                     width={32} 
                     height={32} 
                     className={styles.image}/>
                     Desarrollo de software
                 </Link>
                 <Link href="/blog" className={`${styles.category} ${styles.ia}`}>
                     <Image src="/ia.png" 
                     alt="" 
                     width={32} 
                     height={32} 
                     className={styles.image}/>
                     Inteligencia Artificial
                 </Link>
                 <Link href="/blog" className={`${styles.category} ${styles.security}`}>
                     <Image src="/security.png" 
                     alt="" 
                     width={32} 
                     height={32} 
                     className={styles.image}/>
                     Seguridad informática
                 </Link>
                 <Link href="/blog" className={`${styles.category} ${styles.developweb}`}>
                     <Image src="/movil.png" 
                     alt="" 
                     width={32} 
                     height={32} 
                     className={styles.image}/>
                     Desarrollo web y móvil
                 </Link>
                 <Link href="/blog" className={`${styles.category} ${styles.proyects}`}>
                     <Image src="/gestion.png" 
                     alt="" 
                     width={32} 
                     height={32} 
                     className={styles.image}/>
                     Gestión de proyectos de software
                 </Link>
            </div>
        </div>
    )    
}

export default CategoryList