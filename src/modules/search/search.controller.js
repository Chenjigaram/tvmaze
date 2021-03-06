
export default class SearchController {

    constructor($scope,$location,$routeParams,ShowService){
        'ngInject';
        this.$scope = $scope;
        this.$location = $location;
        this.text = $routeParams.text;
        this.showService = ShowService;
        this.shows = [];
    }

    $onInit(){
        this.showService.searchShows(this.text).then((response)=>{
            this.shows = response.data;
        });
    }

    openShow(id){
        this.$location.path(`/show/${id}`)
    }
}