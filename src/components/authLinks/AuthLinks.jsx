"use client"
import Link from "next/link";
import { useState } from "react";
import styles from "./authLinks.module.css";
import { signOut } from "next-auth/react";
const AuthLinks = () => {

    const [open, setOpen] = useState(false)

    const status = "authenticated"
    return (
        <>
            {status === "notauthenticated"?(
                <Link href="/login" className={styles.link}>Login</Link>
            ) : (
                <>
                <Link href="/write" className={styles.link}>Write</Link>
                <span className={styles.Link} onClick={signOut}>Logout</span>
                </>
            )        
            }

            <div className={styles.burger} onClick={() => setOpen(!open)}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                {open && (
                <div className={styles.responsiveMenu}>
                    <Link href="/">Homepage</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Contact</Link>
                            {status === "notauthenticated"?(
                        <Link href="/login">Login</Link>
                    ) : (
                        <>
                        <Link href="/write">Write</Link>
                        <span className={styles.Link}>Logout</span>
                        </>
                    )}       
                    
                </div>
            )}
            </div>
            
        </>
    );
};
export default AuthLinks;