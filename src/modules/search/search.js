import angular from 'angular';
import SearchController from './search.controller'

export const searchModule = angular
    .module('module.search',[])
    .controller('SearchController',SearchController)
    .name;