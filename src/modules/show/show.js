import angular from 'angular';
import ShowController from './show.controller'
import ShowFilterService from '../../services/show-filter/show-filter.service';
import { SeasonFilter } from '../../filters/show-filter';

export const showModule = angular
    .module('module.show',[])
    .controller('ShowController',ShowController)
    .service('ShowFilterService',ShowFilterService)
    .filter('seasonFilter', SeasonFilter)
    .name;