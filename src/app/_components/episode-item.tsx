import styles from './episode-item.module.scss'
import Link from "next/link";
import placeholder from "@/app/_assets/ppg-placeholder.jpg"

export default function EpisodeItem({episode}: any) {    
    return (
        <Link className={styles.episodeItemContainer} href={`/episodes/${episode.id}`}>
            <div>
                <img className={styles.episodeImage} src={episode.image?.medium ?? placeholder.src} alt="episode"/>
                <strong>{episode.name}</strong>
            </div>
        </Link>
    );
}