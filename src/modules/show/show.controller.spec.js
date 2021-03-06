import 'angular'
import 'angular-mocks'
import ShowController from './show.controller';

describe('ShowController test',(()=>{
    let controller;
    let scope = {};

    beforeEach(()=>{
        controller = new ShowController(scope);
    });

    it('ShowController constructor test',()=>{
        expect(controller).toBeDefined();
        expect(controller.$scope).toEqual(scope);
    });
}));