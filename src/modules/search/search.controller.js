
export default class SearchController {

    constructor($location,$routeParams,ShowService){
        'ngInject';
        this.$location = $location;
        this.text = $routeParams.text;
        this.showService = ShowService;
        this.shows = [];
    }

    $onInit(){
        return this.showService.searchShows(this.text).then((response)=>{
            this.shows = response.data;
        });
    }

    openShow(id){
        this.$location.path(`/show/${id}`)
    }
}