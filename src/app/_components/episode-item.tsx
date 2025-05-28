import styles from './episode-item.module.scss'
import Link from "next/link";

export default function EpisodeItem({episode}: any) {    
    return (
        <Link className={styles.episodeItemContainer} href={`/episodes/${episode.id}`}>
            <div>
                <img className={styles.episodeImage} src={episode.image?.medium ?? "https://occ-0-8407-90.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABVloo8iF8V3tS7pbvXxAfbuNRAgoNheZwgzaofxSBfPox5TPF0JYetktz4pD7nbRboHdhMB_95AjuouJDI0TBJC4AV5ha_uTQX_i.jpg?r=2f5"} alt="episode"/>
                <strong>{episode.name}</strong>
            </div>
        </Link>
    );
}