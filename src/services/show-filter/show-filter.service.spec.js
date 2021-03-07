import 'angular'
import 'angular-mocks'
import ShowFilterService from './show-filter.service';

describe('service test',()=>{
    let service = new ShowFilterService();;
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
    describe('ShowFilterService ',() => {
      it('getAllGeneres',()=>{
         const generes = service.getAllGeneres(shows);
         expect(generes.length).toEqual(7);
      });
      it('sortByRating',()=>{
         const sortShows = service.sortByRating(shows);
         expect(sortShows[0].id).toEqual(2);
      });
      it('getAllSeasons',()=>{
         const episodes = [{season:1},{season:2},{season:3}]
         const seasons = service.getAllSeasons(episodes);
         expect(seasons).toEqual([ 1, 2, 3 ]);
      });
    });
});
