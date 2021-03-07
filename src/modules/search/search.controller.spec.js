import 'angular'
import 'angular-mocks'
import SearchController from './search.controller';

describe('SearchController test',(()=>{
    let controller;
    const routeParams = {
        text: 'test'
    };
    const showService = {
        searchShows: Function.prototype
    };
    const location = {
        path: Function.prototype
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
        controller = new SearchController(location,routeParams,showService);
    });

    it('SearchController constructor test',()=>{
        expect(controller).toBeDefined();
        expect(controller.text).toEqual('test');
    });

    it('$onInit test',(done)=>{
        spyOn(showService,'searchShows').and.returnValue(Promise.resolve({data:shows}));
        controller.$onInit().then(()=>{
            expect(showService.searchShows).toHaveBeenCalled();
            expect(controller.shows).toEqual(shows);
            done();
        });

    });

    it('openShow test',()=>{
        spyOn(location,'path').and.stub();
        controller.openShow('test')
        expect(location.path).toHaveBeenCalledWith('/show/test');
    });
}));