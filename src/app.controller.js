
export default class AppController {

    constructor($location){
        'ngInject';
        this.$location = $location;
    }

    searchText(text){
        if(text){
            this.$location.path(`/search/${text}`)
        }
    }
}