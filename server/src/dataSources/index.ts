import TrackAPI from "./track-api";

export type DataSources = {
    trackAPI: TrackAPI
}


const dataSources = (): DataSources => {
    return {
      trackAPI: new TrackAPI(),
    };
}
  
export default dataSources;
  