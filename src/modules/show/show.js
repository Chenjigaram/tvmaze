import angular from 'angular';
import ShowController from './show.controller'

export const showModule = angular
    .module('module.show',[])
    .controller('ShowController',ShowController)
    .name;