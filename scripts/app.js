import * as controller from './controller.js';

const searchForm = document.getElementById('search');
const resultsContainer = document.getElementById('location-results')
const mapContainer = document.getElementById('mapContainer')
const inputForm = document.getElementById('addressInput')

    
// Showing user current location
controller.showLocationDetails(inputForm, resultsContainer, mapContainer)

// Handling search form
searchForm.addEventListener('submit', e => {
    e.preventDefault()
    controller.updateLocationDetails(inputForm, resultsContainer, mapContainer)
 
})









