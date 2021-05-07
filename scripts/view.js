function setResultsMargin(item) {
    const height = item.offsetHeight;
    item.style.marginBottom = `-${height/2}px`
}

function clearData(item) {
    item.innerHTML = ''
}

function showMessage(message) {
    const messageBar = document.getElementById('message');
    const messageItem = document.createElement('div');
    messageItem.classList.add('message__item');
    messageItem.textContent = message;
    messageItem.style.display = 'block';
    messageBar.appendChild(messageItem);

    setTimeout(() => {messageItem.remove()}, 5000)
}

function toggleLoader(loaderId) {
    document.getElementById(loaderId).classList.toggle('element-hidden');
    }

function viewLocationDetails(location, parent) {
    function createComponent(parent, header, content) {
        const item = document.createElement('div');
        const p = document.createElement('p');
        const h = document.createElement('h2');


        parent.appendChild(item);
        item.appendChild(h);
        item.appendChild(p);
        h.textContent = header;
        p.textContent = content;

        item.classList.add('app__main__results__item');
    }

    const cityDetails = (location => `${location.location.city}, ${location.location.region} ${location.location.postalCode}`);
    clearData(parent);

    createComponent(parent, 'Ip address', location.ip)
    createComponent(parent, 'Location', cityDetails(location))
    createComponent(parent, 'Timezone', `UTC ${location.location.timezone}`)
    createComponent(parent, 'Isp', location.isp)

    setResultsMargin(parent)
}

class Map {
    constructor(location, container) {
        this.location = location;
        this.container = container;
        this.map
    }

    buildMap() {
        this.map = L.map(this.container);
        
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: "sk.eyJ1Ijoia29ucmFkb2xlY2giLCJhIjoiY2tvNjNvendqMXo0NTJycGcxOTlkbm8xcCJ9.op23Nt8qCVu2KUNWOfELFg"
        }).addTo(this.map);
        
        this.setLocation(this.location)
    }

    setLocation(location) {
        const { lat, lng } = location.location;

        this.map.setView([lat, lng], 13);

        const myIcon = L.icon({
            iconUrl: '/images/icon-location.svg'
        });

        L.marker([lat, lng], { icon: myIcon }).addTo(this.map);
    }
}


export {setResultsMargin, viewLocationDetails,  toggleLoader, showMessage, Map, clearData}