 async function fetchIPData(input) {
    const ipCheck = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

    const response = (input == ipCheck) ? await fetch(`https://geo.ipify.org/api/v1?apiKey=at_BxLTikt6hbevcOGvkSQIVRZRXiEAH&ipAddress=${input}`) : await fetch(`https://geo.ipify.org/api/v1?apiKey=at_BxLTikt6hbevcOGvkSQIVRZRXiEAH&domain=${input}`)
    .then((res) => {
        if (res.ok) {
            return res.json()
        } else {
            throw new Error('Failed to fetch data')
        }
    })
     
    return response;
}
    

export { fetchIPData}