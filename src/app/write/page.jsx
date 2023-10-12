"use client";
import Image from "next/image";
import styles from "./write.module.css";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

const WritePage = () => {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");


    return(
        <div className={styles.container}>
            <input type="text" placeholder="Titulo" className={styles.input}/>
            <div className={styles.editor}>
                <button className={styles.button} onClick={() => setOpen(!open)}>
                    <Image src="/plus.png" alt=""  width={26} height={26}/>
                </button>
                {open && (<div className={styles.add}>
                <button className={styles.addButton}>
                    <Image src="/image.png" alt="" width={16} height={16}/>
                </button>
                <button className={styles.addButton}>
                    <Image src="/external.png" alt="" width={16} height={16}/>
                </button>
                <button className={styles.addButton}>
                    <Image src="/video.png" alt="" width={16} height={16}/>
                </button>
                </div>
                )}
                <ReactQuill 
                className={styles.textArea}
                theme="bubble" 
                value={value} 
                onChange={setValue} 
                placeholder="Ingresa tu aporte"/>
            </div>
            <button className={styles.publish}>Publicar</button>
        </div>
    )
}

export default WritePage