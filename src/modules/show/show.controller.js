
export default class ShowController {

    constructor($scope,$routeParams,ShowService){
        'ngInject';
        this.$scope = $scope;
        this.showId = $routeParams.id;
        this.showService = ShowService;
    }

    $onInit(){
        this.showService.getShow(this.showId).then((response)=>{
            this.show = response.data;
        });
    }
}