import angular from 'angular';
import HomeController from './home.controller';
import ShowFilterService from '../../services/show-filter/show-filter.service';
import { ShowFilter } from '../../filters/show-filter';

export const homeModule = angular
    .module('module.home',[])
    .controller('HomeController',HomeController)
    .service('ShowFilterService',ShowFilterService)
    .filter('showFilter', ShowFilter)
    .name;