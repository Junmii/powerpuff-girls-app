import {getSpecificEpisode} from "@/app/_utils/get-episode-info";
import styles from "./page.module.scss";
import DOMPurify from "isomorphic-dompurify";
import NotFound from "@/app/not-found";

export default async function EpisodePage({ params }: any) {
    const episodeId = await params;
    const episode = await getSpecificEpisode(episodeId["episode-id"]);
    
    if (!episode) {
        return (
            <NotFound />
        )
    }

    const cleanSummary = DOMPurify.sanitize(episode.summary);
    const altText = `Cover image of episode ${episode.number} of season ${episode.season} of The Powerpuff Girls`;

    return (
        <div className={styles.page}>
            <div className={styles.contentContainer}>
                <img className={styles.episodeImage}
                     src={episode.image?.medium ?? "https://occ-0-8407-90.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABVloo8iF8V3tS7pbvXxAfbuNRAgoNheZwgzaofxSBfPox5TPF0JYetktz4pD7nbRboHdhMB_95AjuouJDI0TBJC4AV5ha_uTQX_i.jpg?r=2f5"}
                     alt={altText}/>
                <h1 className={styles.title}>{episode.name}</h1>
                <div className={styles.summary}>
                    <div dangerouslySetInnerHTML={{__html: cleanSummary}}/>
                    <span className={styles.seasonEpisode}>(Season <strong>{episode.season}</strong> episode <strong>{episode.number}</strong>)</span>
                </div>
            </div>
        </div>
    )
}