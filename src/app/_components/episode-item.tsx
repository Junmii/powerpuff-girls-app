import styles from './episode-item.module.scss'
import Link from "next/link";
import placeholder from "@/app/_assets/ppg-placeholder.jpg"
import {Episode} from "@/app/_models/series-model";

interface EpisodeItemProps {
    episode: Episode
}

export default function EpisodeItem({episode}: EpisodeItemProps) {    
    return (
        <Link className={styles.episodeItemContainer} href={`/episodes/${episode.id}`}>
            <div>
                <img className={styles.episodeImage} src={episode.image?.medium ?? placeholder.src} alt="episode"/>
                <strong>{episode.name}</strong>
            </div>
        </Link>
    );
}