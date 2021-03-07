import 'angular'
import 'angular-mocks'
import ShowService from './show.service'

describe('service test',()=>{
    let http,httpBackend,service;
    const baseURl = "https://api.tvmaze.com";
    const dummyResponse = {show:"test"};
    
    beforeEach(inject(($http, $httpBackend) => {
        'ngInject';
        http = $http;
        httpBackend = $httpBackend;
        service = new ShowService(http);
    }));
    afterEach(() => {
        httpBackend.verifyNoOutstandingRequest();
        httpBackend.verifyNoOutstandingExpectation();
    });
    describe('ShowService',() => {
        it('constructor check',()=>{
            expect(service.baseURL).toBe(baseURl);
        })
    });
    
    describe('ShowService ',() => {
        it('getAllShows',(done)=>{
            httpBackend.expectGET(`${baseURl}/shows`).respond(dummyResponse);
            service.getAllShows()
                .then((response) => {
                    expect(response.data).toEqual(dummyResponse);
                    done();
                });
            httpBackend.flush();
        })
    
        it('searchShows',(done)=>{
            httpBackend.expectGET(`${baseURl}/search/shows?q=test`).respond(dummyResponse);
            service.searchShows("test")
                .then((response) => {
                    expect(response.data).toEqual(dummyResponse);
                    done();
                });
            httpBackend.flush();
        })
    
        it('getShow',(done)=>{
            httpBackend.expectGET(`${baseURl}/shows/1`).respond(dummyResponse);
            service.getShow("1")
                .then((response) => {
                    expect(response.data).toEqual(dummyResponse);
                    done();
                });
            httpBackend.flush();
        })
        it('getCast',(done)=>{
            httpBackend.expectGET(`${baseURl}/shows/1/cast`).respond(dummyResponse);
            service.getCast("1")
                .then((response) => {
                    expect(response.data).toEqual(dummyResponse);
                    done();
                });
            httpBackend.flush();
        })
        it('getEpisodes',(done)=>{
            httpBackend.expectGET(`${baseURl}/shows/1/episodes`).respond(dummyResponse);
            service.getEpisodes("1")
                .then((response) => {
                    expect(response.data).toEqual(dummyResponse);
                    done();
                });
            httpBackend.flush();
        })
    });
});
