export const ShowFilter = () => {
    return (shows, genre) => {
        return shows.filter((show) => show.genres.filter((s)=>s==genre).length);
      };
}