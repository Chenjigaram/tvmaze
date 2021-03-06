
export default class HomeController {

    constructor($scope,$location,ShowService,ShowFilterService){
        'ngInject';
        this.$scope = $scope;
        this.$location = $location;
        this.showService = ShowService;
        this.showFilterService = ShowFilterService
    }

    $onInit(){
        this.showService.getAllShows().then((response)=>{
            this.allShows = this.showFilterService.sortByRating(response.data);
            this.generes = this.showFilterService.getAllGeneres(this.allShows);
        });
    }

    openShow(id){
        this.$location.path(`/show/${id}`)
    }
}