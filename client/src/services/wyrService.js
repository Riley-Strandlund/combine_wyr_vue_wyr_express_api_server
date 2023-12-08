export default {
    getRandomWYR() {//function that returns a promise
        return fetch('/wyr').then(response => {
            return response.json()
        })
    }
}//Fetch file then when fetch is done get response and convert to json. In this case it fetches from the webpage /wyr shown in index.js
//These fetch requests return a promise which means its gonna happen, but it may take some time.