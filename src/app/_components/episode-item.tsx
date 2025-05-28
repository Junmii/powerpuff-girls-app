import styles from './episode-item.module.scss'
import Link from "next/link";
import placeholder from "@/app/_assets/ppg-placeholder.jpg"
import {Episode} from "@/app/_models/series-model";

interface EpisodeItemProps {
    episode: Episode
}

export default function EpisodeItem({episode}: EpisodeItemProps) {
    const altText = `Link to general info about episode ${episode.number} of season ${episode.season} of The Powerpuff Girls`;
    
    return (
        <Link className={styles.episodeItemContainer} href={`/episodes/${episode.id}`}>
            <div>
                <img className={styles.episodeImage} src={episode.image?.medium ?? placeholder.src} alt={altText}/>
                <strong>{episode.name}</strong>
            </div>
        </Link>
    );
}