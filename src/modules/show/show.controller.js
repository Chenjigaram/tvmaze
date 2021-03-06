
export default class ShowController {

    constructor($scope,$routeParams,$sce,ShowService){
        'ngInject';
        this.$scope = $scope;
        this.showId = $routeParams.id;
        this.showService = ShowService;
        this.$sce = $sce;
        
    }

    $onInit(){
        return Promise.all([this.showService.getShow(this.showId),
            this.showService.getCast(this.showId),
            this.showService.getEpisodes(this.showId)])
            .then((response)=>{
                this.show = response[0].data;
                this.episodes = response[2].data;
                this.cast = response[1].data;
                this.summary = this.$sce.trustAsHtml(this.show.summary);
                this.$scope.$apply();
        });
    }
}