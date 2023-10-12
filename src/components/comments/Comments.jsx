import styles from "./comments.module.css"
import Link from "next/link";
import Image from "next/image";

const Comments = () => {
    const status = "authenticated";
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>Comentarios</h1>
            {status === "authenticated" ? (
                <div className={styles.write}>
                    <textarea placeholder="Escribe un comentario" className={styles.input}></textarea>
                    <button className={styles.button}>Enviar</button>
                </div>
            ) : (
                <Link href="/login"> Inicia Sesion para escribir un comentario</Link>
            )}
            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image src="/p1.jpeg" 
                        alt=""
                        width={50}
                        height={50}
                        className={styles.image}/>
                        <div className={styles.userInfo}>
                            <span className={styles.username}>Luis Elescano</span>
                            <span className={styles.date}> 10.10.2023</span>
                        </div>
                    </div>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing.
                    </p>
                </div>

                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image src="/p1.jpeg" 
                        alt=""
                        width={50}
                        height={50}
                        className={styles.image}/>
                        <div className={styles.userInfo}>
                            <span className={styles.username}>Luis Elescano</span>
                            <span className={styles.date}> 10.10.2023</span>
                        </div>
                    </div>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing.
                    </p>
                </div>

                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image src="/p1.jpeg" 
                        alt=""
                        width={50}
                        height={50}
                        className={styles.image}/>
                        <div className={styles.userInfo}>
                            <span className={styles.username}>Luis Elescano</span>
                            <span className={styles.date}> 10.10.2023</span>
                        </div>
                    </div>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing.
                    </p>
                </div>


            </div>
        </div>
    );
};

export default Comments;