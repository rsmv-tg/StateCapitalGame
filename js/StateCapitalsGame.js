const US_STATES = [
    { name: 'Alabama', capital: 'Montgomery', zipCode: '36101', coordinates: { lat: 32.3792, lon: -86.3077 } },
    { name: 'Alaska', capital: 'Juneau', zipCode: '99801', coordinates: { lat: 58.3019, lon: -134.4197 } },
    { name: 'Arizona', capital: 'Phoenix', zipCode: '85001', coordinates: { lat: 33.4484, lon: -112.0740 } },
    { name: 'Arkansas', capital: 'Little Rock', zipCode: '72201', coordinates: { lat: 34.7465, lon: -92.2896 } },
    { name: 'California', capital: 'Sacramento', zipCode: '95814', coordinates: { lat: 38.5791, lon: -121.4917 } },
    { name: 'Colorado', capital: 'Denver', zipCode: '80201', coordinates: { lat: 39.7392, lon: -104.9903 } },
    { name: 'Connecticut', capital: 'Hartford', zipCode: '06101', coordinates: { lat: 41.7658, lon: -72.6734 } },
    { name: 'Delaware', capital: 'Dover', zipCode: '19901', coordinates: { lat: 39.1582, lon: -75.5244 } },
    { name: 'Florida', capital: 'Tallahassee', zipCode: '32301', coordinates: { lat: 30.4383, lon: -84.2807 } },
    { name: 'Georgia', capital: 'Atlanta', zipCode: '30301', coordinates: { lat: 33.7490, lon: -84.3880 } },
    { name: 'Hawaii', capital: 'Honolulu', zipCode: '96801', coordinates: { lat: 21.3069, lon: -157.8583 } },
    { name: 'Idaho', capital: 'Boise', zipCode: '83701', coordinates: { lat: 43.6150, lon: -116.2023 } },
    { name: 'Illinois', capital: 'Springfield', zipCode: '62701', coordinates: { lat: 39.7817, lon: -89.6501 } },
    { name: 'Indiana', capital: 'Indianapolis', zipCode: '46201', coordinates: { lat: 39.7684, lon: -86.1581 } },
    { name: 'Iowa', capital: 'Des Moines', zipCode: '50301', coordinates: { lat: 41.5908, lon: -93.6208 } },
    { name: 'Kansas', capital: 'Topeka', zipCode: '66101', coordinates: { lat: 39.7686, lon: -86.1626 } },
    { name: 'Kentucky', capital: 'Frankfort', zipCode: '40201', coordinates: { lat: 38.2527, lon: -85.7585 } },
    { name: 'Louisiana', capital: 'Baton Rouge', zipCode: '70801', coordinates: { lat: 30.4515, lon: -91.1871 } },
    { name: 'Maine', capital: 'Augusta', zipCode: '04101', coordinates: { lat: 43.6532, lon: -70.2676 } },
    { name: 'Maryland', capital: 'Annapolis', zipCode: '21401', coordinates: { lat: 38.9784, lon: -76.4922 } },
    { name: 'Massachusetts', capital: 'Boston', zipCode: '02108', coordinates: { lat: 42.3601, lon: -71.0589 } },
    { name: 'Michigan', capital: 'Lansing', zipCode: '48901', coordinates: { lat: 42.7336, lon: -84.5555 } },
    { name: 'Minnesota', capital: 'St. Paul', zipCode: '55101', coordinates: { lat: 44.9778, lon: -93.2650 } },
    { name: 'Mississippi', capital: 'Jackson', zipCode: '39201', coordinates: { lat: 32.2988, lon: -90.1848 } },
    { name: 'Missouri', capital: 'Jefferson City', zipCode: '65101', coordinates: { lat: 38.5767, lon: -92.1735 } },
    { name: 'Montana', capital: 'Helena', zipCode: '59601', coordinates: { lat: 46.8772, lon: -110.3626 } },
    { name: 'Nebraska', capital: 'Lincoln', zipCode: '68101', coordinates: { lat: 41.2587, lon: -95.9378 } },
    { name: 'Nevada', capital: 'Carson City', zipCode: '89701', coordinates: { lat: 39.1638, lon: -119.7674 } },
    { name: 'New Hampshire', capital: 'Concord', zipCode: '03301', coordinates: { lat: 43.2081, lon: -71.5375 } },
    { name: 'New Jersey', capital: 'Trenton', zipCode: '08608', coordinates: { lat: 40.2206, lon: -74.7597 } },
    { name: 'New Mexico', capital: 'Santa Fe', zipCode: '87501', coordinates: { lat: 35.6870, lon: -105.9378 } },
    { name: 'New York', capital: 'Albany', zipCode: '12201', coordinates: { lat: 42.6510, lon: -73.7552 } },
    { name: 'North Carolina', capital: 'Raleigh', zipCode: '27601', coordinates: { lat: 35.7795, lon: -78.6382 } },
    { name: 'North Dakota', capital: 'Bismarck', zipCode: '58101', coordinates: { lat: 46.8083, lon: -100.7837 } },
    { name: 'Ohio', capital: 'Columbus', zipCode: '43201', coordinates: { lat: 39.9612, lon: -83.0007 } },
    { name: 'Oklahoma', capital: 'Oklahoma City', zipCode: '73101', coordinates: { lat: 35.4676, lon: -97.5164 } },
    { name: 'Oregon', capital: 'Salem', zipCode: '97301', coordinates: { lat: 44.9429, lon: -123.0351 } },
    { name: 'Pennsylvania', capital: 'Harrisburg', zipCode: '17101', coordinates: { lat: 40.2699, lon: -76.8756 } },
    { name: 'Rhode Island', capital: 'Providence', zipCode: '02901', coordinates: { lat: 41.8236, lon: -71.4222 } },
    { name: 'South Carolina', capital: 'Columbia', zipCode: '29201', coordinates: { lat: 34.0007, lon: -81.0348 } },
    { name: 'South Dakota', capital: 'Pierre', zipCode: '57101', coordinates: { lat: 44.3683, lon: -100.3509 } },
    { name: 'Tennessee', capital: 'Nashville', zipCode: '37201', coordinates: { lat: 35.0479, lon: -89.8045 } },
    { name: 'Texas', capital: 'Austin', zipCode: '73301', coordinates: { lat: 30.2500, lon: -97.7500 } },
    { name: 'Utah', capital: 'Salt Lake City', zipCode: '84101', coordinates: { lat: 40.7608, lon: -111.8910 } },
    { name: 'Vermont', capital: 'Montpelier', zipCode: '05601', coordinates: { lat: 44.2601, lon: -72.5754 } },
    { name: 'Virginia', capital: 'Richmond', zipCode: '23218', coordinates: { lat: 37.5407, lon: -77.4360 } },
    { name: 'Washington', capital: 'Olympia', zipCode: '98501', coordinates: { lat: 47.6062, lon: -122.3321 } },
    { name: 'West Virginia', capital: 'Charleston', zipCode: '25301', coordinates: { lat: 38.3498, lon: -81.6326 } },
    { name: 'Wisconsin', capital: 'Madison', zipCode: '53701', coordinates: { lat: 43.0747, lon: -89.3838 } },
    { name: 'Wyoming', capital: 'Cheyenne', zipCode: '82001', coordinates: { lat: 41.1390, lon: -104.8202 } }
];

let usMap;
let map;

function runGame() {

    const targetIndex = Math.floor(Math.random() * US_STATES.length);
    const targetState = US_STATES[targetIndex].name;
    const targetCapital = US_STATES[targetIndex].capital;
    const targetZipCode = US_STATES[targetIndex].zipCode;
    const targetCoordinates = US_STATES[targetIndex].coordinates;
    const targetLat = targetCoordinates.lat;
    const targetLon = targetCoordinates.lon;

    console.log(`Target state is: ${targetState}.`);
    console.log(`Target capital is: ${targetCapital}.`);
    console.log(`Target Zip Code is: ${targetZipCode}.`);
    console.log("Target Latitude:", targetLat);
    console.log("Target Longitude:", targetLon);

    let attempt = " ";
    let correct = false;
    let attemptCount = 0;

    do {

        attempt = prompt(`What is the capital of ${targetState}?`);

        attemptCount++;

        if (attempt === null) {

            alert(`Thank you for playing. The capital of ${targetState} is ${targetCapital}.`)

            return;

        }

        if (attempt.trim() === "") {
            alert(`No answer was submitted. Please enter the capital of the ${targetState}.`);
            continue;
        }

        correct = checkAttempt(attempt, targetCapital, targetState);

    }

    while (!correct);

    initMap(targetLat, targetLon, targetCapital, targetState);

    //switchMap();

    if (attemptCount === 1) {

        alert(`Congratulations! You successfully identified ${targetCapital} as the capital of ${targetState} on your first try. Awesome!`);

    } else if (attemptCount <= 3) {

        alert(`Congratulations! You successfully identified ${targetCapital} as the capital of ${targetState} in just ${attemptCount} attempts. Great Job!`);

    } else {

        alert(`Congratulations! You successfully identified ${targetCapital} as the capital of ${targetState} in ${attemptCount} attempts. Thank you for playing.`);
    }

    function checkAttempt(attempt, targetCapital, targetState) {
        let correct = false;


        if (US_STATES.some(state => attempt.toLowerCase().includes(state.capital.toLowerCase()))) {



            if (attempt.toLowerCase() !== targetCapital.toLowerCase()) {

                alert(`While ${attempt} is a capital city in the United States, it's not the capital of ${targetState}. Please try again.`);

            } else {

                correct = true;
            }

        } else {

            alert(`Sorry, ${attempt} is not a recognized capital city within the United States. Please try again`);
        }

        return correct;
    }

    function initMap(latitude, longitude, targetCapital, targetState) {

        if (!usMap) {

            usMap = L.map('initMapContainer').setView([latitude, longitude], 4.5);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors'
            }).addTo(usMap);
        }

        usMap.eachLayer(function (layer) {
            if (layer instanceof L.Marker) {
                usMap.removeLayer(layer);
            }
        });

        L.marker([latitude, longitude]).addTo(usMap)
            .bindPopup(`${targetCapital}, ${targetState}`)
            .openPopup();
    }

}

function initUSMap() {

    var usMap = L.map('mapContainer').setView([37.8, -96], 4);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

        attribution: '© OpenStreetMap contributors'

    }).addTo(usMap);
}

// Function to switch between the maps
function switchMap() {
    // Check if the regular map is already initialized
    if (!map) {
        // If not, initialize the regular map
        initMap();
    }

    // Hide the U.S. overview map container
    usMap._container.style.display = 'none';

    // Show the regular map container
    map._container.style.display = 'block';
}