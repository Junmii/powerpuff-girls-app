import {Episode} from "@/app/_models/episode-model";

export async function getEpisodesInfo() {
    try {
        const response = await fetch('https://api.tvmaze.com/shows/6771/episodes');
        return response.json();
    } catch (error: any) {
        return { error: error.message };
    }
}

export async function getSpecificEpisode(episodeId: string) {
    const episodes = await getEpisodesInfo();
    return episodes.filter((episode: Episode) => episode.id.toString() === episodeId)[0];
}