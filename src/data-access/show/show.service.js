
export default class ShowService{

    constructor($http) {
        'ngInject';
        this.$http = $http;
        this.baseURL = "https://api.tvmaze.com"
    }

    getAllShows(){
        return this.$http.get(`${this.baseURL}/shows`);
    }

    searchShows(query){
        return this.$http.get(`${this.baseURL}/search/shows?q=${query}`);
    }

    getShow(showId){
        return this.$http.get(`${this.baseURL}/shows/${showId}?embed=cast`);
    }
}

