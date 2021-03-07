
export default class HomeController {

    constructor($location,ShowService,ShowFilterService){
        'ngInject';
        this.$location = $location;
        this.showService = ShowService;
        this.showFilterService = ShowFilterService
    }

    $onInit(){
        return this.showService.getAllShows().then((response)=>{
            this.allShows = this.showFilterService.sortByRating(response.data);
            this.generes = this.showFilterService.getAllGeneres(this.allShows);
        });
    }

    openShow(id){
        this.$location.path(`/show/${id}`)
    }
}