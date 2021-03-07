import 'angular'
import 'angular-mocks'
import AppController from './app.controller';

describe('AppController test',(()=>{
    let controller;
    const location = {
        path: Function.prototype
    };

    beforeEach(()=>{
        controller = new AppController(location);
    });

    it('constructor test',()=>{
        expect(controller).toBeDefined();
    });

    it('searchText test with defined value',()=>{
        spyOn(location,'path').and.stub();
        controller.searchText('text');
        expect(location.path).toHaveBeenCalledWith('/search/text');
    });
    it('searchText test with undefined value',()=>{
        spyOn(location,'path').and.stub();
        controller.searchText('');
        expect(location.path).not.toHaveBeenCalledWith('/search/text');
    });
}));
