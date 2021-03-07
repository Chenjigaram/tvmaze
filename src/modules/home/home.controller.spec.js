import 'angular'
import 'angular-mocks'
import HomeController from './home.controller';

describe('HomeController',(()=>{
    let controller;
    const location = {
        path: Function.prototype
    };
    const showService = {
        getAllShows: Function.prototype
    };
    const showFilterService = {
        sortByRating: Function.prototype,
        getAllGeneres: Function.prototype
    };
    const shows = [
        {
           "id":1,
           "name":"Under the Dome",
           "genres":[
              "Drama",
              "Science-Fiction",
              "Thriller"
           ],
           "rating":{
              "average":6.5
           }
        },
        {
           "id":2,
           "name":"Person of Interest",
           "genres":[
              "Action",
              "Crime",
              "Science-Fiction"
           ],
           "rating":{
              "average":8.9
           },
        },
        {
           "id":3,
           "name":"Bitten",
           "genres":[
              "Drama",
              "Horror",
              "Romance"
           ],
           "rating":{
              "average":7.5
           }
        }
    ];
    beforeEach(()=>{
        controller = new HomeController(location,showService,showFilterService);
    });

    it('constructor test',()=>{
        expect(controller).toBeDefined();
    });

    it('$onInit test',(done)=>{
        const generes = ['Drama','Animation'];
        spyOn(showService,'getAllShows').and.returnValue(Promise.resolve({data:shows}));
        spyOn(showFilterService,'getAllGeneres').and.returnValue(generes);
        spyOn(showFilterService,'sortByRating').and.returnValue(shows);
        controller.$onInit().then(()=>{
            expect(showService.getAllShows).toHaveBeenCalled();
            expect(showFilterService.sortByRating).toHaveBeenCalledWith(shows);
            expect(controller.allShows).toEqual(shows);
            expect(controller.generes).toEqual(generes);
            done();
        });
    });

    it('openShow test',()=>{
        spyOn(location,'path').and.stub();
        controller.openShow('test')
        expect(location.path).toHaveBeenCalledWith('/show/test');
    });
}));