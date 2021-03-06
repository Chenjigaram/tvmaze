import 'angular'
import 'angular-mocks'
import SearchController from './search.controller';

describe('SearchController test',(()=>{
    let controller;
    let scope = {};

    beforeEach(()=>{
        controller = new SearchController(scope);
    });

    it('SearchController constructor test',()=>{
        expect(controller).toBeDefined();
        expect(controller.$scope).toEqual(scope);
    });
}));