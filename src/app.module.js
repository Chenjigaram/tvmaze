import angular from 'angular';
import 'angular-route';
import { appRouteConfig } from './app.route'
import { homeModule } from './modules/home/home';
import { searchModule } from './modules/search/search';
import { showModule } from './modules/show/show';
import AppController from './app.controller';
import { ShowCardComponent } from './components/show-card/show-card.component';
import ShowService from './data-access/show/show.service';

export const appModule = 
    angular.module('app',['ngRoute',homeModule,searchModule,showModule])
    .config(appRouteConfig)
    .controller('AppController',AppController)
    .component('showCard', ShowCardComponent)
    .service('ShowService',ShowService)
    .name;