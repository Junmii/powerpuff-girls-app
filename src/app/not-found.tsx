import Link from 'next/link'
import styles from "./not-found.module.scss";

export default function NotFound() {
    return (
        <div className={styles.page}>
            <h2>Not Found</h2>
            <p>Oops! This page doesn't exist.</p>
            <Link className={styles.homeButton} href="/">Return Home</Link>
        </div>
    )
}