import 'angular'
import 'angular-mocks'
import ShowController from './show.controller';

describe('ShowController test',(()=>{
    let controller;
    const scope = {
        $apply: Function.prototype
    };
    const sce = {
        trustAsHtml: Function.prototype
    };
    const routeParams = {
        id: '9'
    };
    const showService = {
        getShow: Function.prototype,
        getCast: Function.prototype,
        getEpisodes: Function.prototype
    };
    const showFilterService = {
        getAllSeasons: Function.prototype
    };

    const show = {
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
    };

    const cast = [{
        "name":"Jerry"
    }];

    const episodes = [{
        "name":"Fire"
    }];

    beforeEach(()=>{
        controller = new ShowController(scope,routeParams,sce,showService,showFilterService);
    });

    it('ShowController constructor test',()=>{
        expect(controller).toBeDefined();
        expect(controller.$scope).toEqual(scope);
        expect(controller.showId).toEqual('9');
    });

    it('$onInit test',(done)=>{
        const seasons = ['1','2'];
        spyOn(showService,'getShow').and.returnValue(Promise.resolve({data:show}));
        spyOn(showService,'getCast').and.returnValue(Promise.resolve({data:cast}));
        spyOn(showService,'getEpisodes').and.returnValue(Promise.resolve({data:episodes}));
        spyOn(showFilterService,'getAllSeasons').and.returnValue(seasons);
        spyOn(sce,'trustAsHtml').and.returnValue('text');
        spyOn(scope,'$apply').and.stub();
        controller.$onInit().then(()=>{
            expect(showService.getShow).toHaveBeenCalledWith('9');
            expect(showService.getCast).toHaveBeenCalledWith('9');
            expect(showService.getEpisodes).toHaveBeenCalledWith('9');
            expect(showFilterService.getAllSeasons).toHaveBeenCalledWith(episodes);
            expect(controller.summary).toEqual('text');
            expect(controller.seasons).toEqual(seasons);
            expect(controller.episodes).toEqual(episodes);
            expect(controller.show).toEqual(show);
            expect(controller.cast).toEqual(cast);
            done();
        });
    });
}));