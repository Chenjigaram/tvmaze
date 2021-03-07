export const ShowFilter = () => {
    return (shows, genre) => {
        return shows.filter((show) => show.genres.filter((s)=>s==genre).length);
      };
}

export const SeasonFilter = () => {
  return (episodes, season) => {
      return episodes.filter((episode) => episode.season == season);
    };
}