import 'angular'
import 'angular-mocks'
import HomeController from './home.controller';

describe('HomeController test',(()=>{
    let controller;
    let scope = {};

    beforeEach(()=>{
        controller = new HomeController(scope);
    });

    it('HomeController constructor test',()=>{
        expect(controller).toBeDefined();
        expect(controller.$scope).toEqual(scope);
    });
}));