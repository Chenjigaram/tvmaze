import 'angular'
import 'angular-mocks'
import ShowFilterService from './show-filter.service'

describe('service test',()=>{
    let service = new ShowFilterService();;
    const shows = [
        {
           "id":1,
           "url":"https://www.tvmaze.com/shows/1/under-the-dome",
           "name":"Under the Dome",
           "type":"Scripted",
           "language":"English",
           "genres":[
              "Drama",
              "Science-Fiction",
              "Thriller"
           ],
           "rating":{
              "average":6.5
           },
           "image":{
              "medium":"https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
              "original":"https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg"
           },
           "summary":"Under the Dome",
        },
        {
           "id":2,
           "url":"https://www.tvmaze.com/shows/2/person-of-interest",
           "name":"Person of Interest",
           "type":"Scripted",
           "language":"English",
           "genres":[
              "Action",
              "Crime",
              "Science-Fiction"
           ],
           "rating":{
              "average":8.9
           },
           "image":{
              "medium":"https://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg",
              "original":"https://static.tvmaze.com/uploads/images/original_untouched/163/407679.jpg"
           },
           "summary":"You are being watched.",
        },
        {
           "id":3,
           "url":"https://www.tvmaze.com/shows/3/bitten",
           "name":"Bitten",
           "type":"Scripted",
           "language":"English",
           "genres":[
              "Drama",
              "Horror",
              "Romance"
           ],
           "rating":{
              "average":7.5
           },
           "image":{
              "medium":"https://static.tvmaze.com/uploads/images/medium_portrait/0/15.jpg",
              "original":"https://static.tvmaze.com/uploads/images/original_untouched/0/15.jpg"
           },
           "summary":"28-year-old Elena Michaels, the world's only female werewolf.",
        }
    ];
    describe('ShowFilterService ',() => {

        it('getAllGeneres',()=>{
            const generes = service.getAllGeneres(shows);
            expect(generes.length).toEqual(7);
        });

        it('sortByRating',()=>{
            const sortShows = service.sortByRating(shows);
            expect(sortShows[0].id).toEqual(2);
        });
    });
});
