import {Episode, Series} from "@/app/_models/series-model";

export async function getSeriesInfo(): Promise<Series> {
    try {
        const response = await fetch('https://api.tvmaze.com/shows/6771');
        return response.json();
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function getEpisodesInfo(): Promise<Episode[]> {
    try {
        const response = await fetch('https://api.tvmaze.com/shows/6771/episodes');
        return response.json();
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function getSpecificEpisode(episodeId: string): Promise<Episode> {
    try {
        const response = await fetch(`https://api.tvmaze.com/episodes/${episodeId}`);
        return response.json();
    } catch (error: any) {
        throw new Error(error);
    }
}