import Link from "next/link";
import styles from './navigation-bar.module.scss'

export default function NavigationBar() {
    return (
        <div className={styles.navbar}>
            <Link className={styles.navigationItem} href="/">Home</Link>
            <Link className={styles.navigationItem} href="/episodes">Episodes</Link>
        </div>
    );
}