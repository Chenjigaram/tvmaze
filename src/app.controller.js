
export default class AppController {

    constructor($location){
        'ngInject';
        this.$location = $location;
        this.text = '';
    }

    searchText(text){
        if(text){
            this.$location.path(`/search/${text}`);
            this.text = '';
        }
    }
}