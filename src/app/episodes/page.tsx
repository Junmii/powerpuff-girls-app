import styles from "./page.module.scss";
import EpisodeItem from "@/app/_components/episode-item";
import {SeriesService} from "@/app/_services/series.service";
import {Episode} from "@/app/_models/series-model";

export default async function EpisodesPage() {
    const seriesService = new SeriesService();
    const episodes = await seriesService.getEpisodesInfo();
    
    return (
        <div className={styles.page}>
            <div className={styles.contentContainer}>
                <h1>Episodes</h1>
                <div className={styles.episodesContainer}>
                    {episodes.map((episode: Episode, index: number) => {
                        return (
                            <EpisodeItem episode={episode} key={index}/>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
