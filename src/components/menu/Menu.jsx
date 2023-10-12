import React from 'react'
import styles from "./menu.module.css"
import Link from "next/link";
import Image from 'next/image';
import MenuPosts from '../menuPosts/MenuPosts';
import MenuCategories from '../menuCategories/MenuCategories';

const Menu = () =>{
    return(
        <div className={styles.container}>
            <h2 className={styles.subtitle}>{"Que se lee mas"}</h2>
            <h1 className={styles.title}>Blog populares</h1>
            <MenuPosts withImage={false}/>
            
            
            <h2 className={styles.subtitle}>Descubrir por temas</h2>
            <h1 className={styles.title}>Categorias</h1>
            

            <MenuCategories/>
            <h2 className={styles.subtitle}>Elegido por Editor</h2>
            <h1 className={styles.title}>SELECCIONES DEL EDITOR</h1>
            <MenuPosts withImage={true}/>
        </div>

    )    
}

export default Menu