import {Episode, Series} from "@/app/_models/series-model";

export class SeriesService {

    /**
     * Gets the general info of the series "The Powerpuff Girls"
     */
    async getSeriesInfo(): Promise<Series> {
        try {
            const response = await fetch('https://api.tvmaze.com/shows/6771');
            return response.json();
        } catch (error: any) {
            throw new Error(error);
        }
    }

    /**
     * Gets the general info of all the episodes of "The Powerpuff Girls"
     */
    async getEpisodesInfo(): Promise<Episode[]> {
        try {
            const response = await fetch('https://api.tvmaze.com/shows/6771/episodes');
            return response.json();
        } catch (error: any) {
            throw new Error(error);
        }
    }

    /**
     * Gets the general info of a specific episode of "The Powerpuff Girls" based on the episode id
     * @param episodeId - The id of the episode to request
     */
    async getSpecificEpisode(episodeId: string): Promise<Episode | undefined> {
        try {
            const response = await fetch(`https://api.tvmaze.com/episodes/${episodeId}`);
            const episodeObject = await response.json();
            if (episodeObject._links.show.name === "The Powerpuff Girls") {
                return episodeObject;
            }
        } catch (error: any) {
            throw new Error(error);
        }
    }    
}