import * as view from './view.js';
import * as model from './model.js';

let map;

async function showLocationDetails(input, locationDetailsContainer, mapContainer) {
    try {
        view.toggleLoader('loader');

        let user = await model.fetchIPData(input.value)
        
        view.viewLocationDetails(user, locationDetailsContainer);
         
        map = new view.Map(user, mapContainer);
        map.buildMap();

        view.toggleLoader('loader');

    } catch (err) {
            view.showMessage('Ups, something is wrong. Please try again');
            view.toggleLoader('loader');
            console.log(err)
    } 
}

async function updateLocationDetails(input, locationDetailsContainer) {
    try {
        view.toggleLoader('loader');
    
        let user = await model.fetchIPData(input.value)
    
        view.viewLocationDetails(user, locationDetailsContainer);
        
        map.setLocation(user)
    
        view.toggleLoader('loader');

    } catch (err) {
            view.showMessage('Failed to recive location. Please check if entered data is correct IP Address or domain');
            view.toggleLoader('loader');
            console.log(err)
    } 
}

export {showLocationDetails, updateLocationDetails}