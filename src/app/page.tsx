import styles from "./page.module.scss";
import {getEpisodesInfo, getSeriesInfo} from "@/app/_utils/get-series-info";
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";
import {Episode} from "@/app/_models/series-model";

export default async function MainInfoPage() {
  const info = await getSeriesInfo();
  const episodes = await getEpisodesInfo();
  const cleanSummary = DOMPurify.sanitize(info.summary);
    
  return (
    <div className={styles.page}>
      <div className={styles.contentContainer}>
          <div className={styles.imageAndTagsContainer}>
              <img className={styles.ppgImage} src={info.image.original} alt=""/>
              <div className={styles.genreTagsContainer}>
                  {info.genres.map((genre: string, index: number) => {
                      return (
                          <div key={index} className={styles.genreTag}>{genre}</div>
                      )
                  })}                      
              </div>
          </div>
          <h1 className={styles.title}>{info.name}</h1>
          <div className={styles.summary} dangerouslySetInnerHTML={{__html: cleanSummary}}/>
          <div className={styles.quickEpisodeList}>
              <strong>Quick episode list</strong>
              {episodes.map((episode: Episode, index: number) => {
                  return (
                      <Link key={index} className={styles.episodeLink} href={`episodes/${episode.id}`}>{episode.name}</Link>
                  )
              })}              
          </div>
      </div>
    </div>
  );
}
