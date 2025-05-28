import {SeriesService} from "@/app/_services/series.service";
import styles from "./page.module.scss";
import DOMPurify from "isomorphic-dompurify";
import NotFound from "@/app/not-found";
import placeholder from "@/app/_assets/ppg-placeholder.jpg"

interface EpisodePageParams {
    params: Promise<{
        'episode-id': string;
    }>;
}

export default async function EpisodePage({ params }: EpisodePageParams) {
    const seriesService = new SeriesService();
    
    const episodeId = await params;
    const episode = await seriesService.getSpecificEpisode(episodeId['episode-id']);
    
    if (!episode) {
        return (
            <NotFound />
        )
    }

    const cleanSummary = DOMPurify.sanitize(episode.summary ?? "");
    const altText = `Cover image of episode ${episode.number} of season ${episode.season} of The Powerpuff Girls`;

    return (
        <div className={styles.page}>
            <div className={styles.contentContainer}>
                <img className={styles.episodeImage}
                     src={episode.image?.medium ?? placeholder.src}
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