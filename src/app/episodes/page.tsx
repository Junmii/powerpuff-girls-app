import styles from "./page.module.scss";
import EpisodeItem from "@/app/_components/episode-item";
import {getEpisodesInfo} from "@/app/_utils/get-episode-info";
import {Episode} from "@/app/_models/episode-model";

export default async function EpisodesPage() {
    const episodes = await getEpisodesInfo();
    
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
