
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

    filterShows(shows,genre){
        return shows.filter((show) => show.genres.filter((s)=>s==genre).length);
    }
    sortByRating(array) {
        return array.sort((a, b) => {
            let x = a['rating'].average; let y = b['rating'].average;
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        }).reverse();
    }
}

