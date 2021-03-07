
export default class ShowFilterService{

    constructor() {
        'ngInject';
    }

    getAllGeneres(shows){
        let genres = [];
         shows.forEach((show)=>{
            genres = genres.concat(show.genres);
         });
        return [...new Set(genres)].sort();
    }

    getAllSeasons(episodes){
        let seasons = [];
        episodes.forEach((episode)=>{
            seasons = seasons.concat(episode.season);
         });
        return [...new Set(seasons)].sort();
    }
    
    sortByRating(array) {
        return array.sort((a, b) => {
            let x = a['rating'].average; let y = b['rating'].average;
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        }).reverse();
    }
}

