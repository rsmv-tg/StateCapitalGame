//javaScript Portfolio Project. Goal is to have user select the proper capital of a randomply generated state. If the user selects the correct answer the corrects state will be displayed in text along with the location on an interactive map (ex. Google API)

const STATES = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
    'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland',
    'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
    'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
    'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']

const STATE_CAPITALS = ['Montgomery', 'Juneau', 'Phoenix', 'Little Rock', 'Sacramento', 'Denver', 'Hartford', 'Dover', 'Tallahassee', 'Atlanta',
    'Honolulu', 'Boise', 'Springfield', 'Indianapolis', 'Des Moines', 'Topeka', 'Frankfort', 'Baton Rouge', 'Augusta', 'Annapolis',
    'Boston', 'Lansing', 'St. Paul', 'Jackson', 'Jefferson City', 'Helena', 'Lincoln', 'Carson City', 'Concord', 'Trenton',
    'Santa Fe', 'Albany', 'Raleigh', 'Bismarck', 'Columbus', 'Oklahoma City', 'Salem', 'Harrisburg', 'Providence', 'Columbia',
    'Pierre', 'Nashville', 'Austin', 'Salt Lake City', 'Montpelier', 'Richmond', 'Olympia', 'Charleston', 'Madison', 'Cheyenne']

const CAPITAL_ZIPCODES = ['36101', '99801', '85001', '72201', '95814', '80201', '06101', '19901', '32301', '30301',
    '96801', '83701', '62701', '46201', '50301', '66101', '40201', '70801', '04101', '21401',
    '02108', '48901', '55101', '39201', '65101', '59601', '68101', '89701', '03301', '08608',
    '87501', '12201', '27601', '58101', '43201', '73101', '97301', '17101', '02901', '29201',
    '57101', '37201', '73301', '84101', '05601', '23218', '98501', '25301', '53701', '82001']

function runGame() {

    const targetIndex = Math.floor(Math.random() * STATES.length); //Randomizes the states in states to generate the target index
    const targetState = STATES[targetIndex]; //Logs the randomized indexed state in STATES
    const targetCapital = STATE_CAPITALS[targetIndex]; //Aligns the target state in STATES against the appropriate index in STATE_CAPITALS
    const targetZipCode = CAPITAL_ZIPCODES[targetIndex] //Aligns the target state in STATES against the appropriate index in CAPITAL_ZIPCODES

    console.log(`Target state is: ${targetState}.`);
    console.log(`Target capital is: ${targetCapital}.`);
    console.log(`Target Zip Code is: ${targetZipCode}.`);


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

        correct = checkAttempt(attempt, targetCapital);

    }

    while (!correct);

    if (attemptCount === 1) {

        alert(`Congratulations! You successfully identified ${targetCapital} as the capital of ${targetState} on your first try. Awesome!`);

    } else if (attemptCount <= 3) {

        alert(`Congratulations! You successfully identified ${targetCapital} as the capital of ${targetState} in just ${attemptCount} attempts. Great Job!`);

    } else {

        alert(`Congratulations! You successfully identified ${targetCapital} as the capital of ${targetState} in ${attemptCount} attempts. Thank you for playing.`);
    }


    function checkAttempt(attempt, targetCapital) {

        let correct = false;

        if (!STATE_CAPITALS.includes(attempt)) {

            alert(`Sorry, ${attempt} is not a recognized capital city within the United States. Please try again`)

        } else if (attempt !== targetCapital) {

            alert(`While ${attempt} is a capital city in the United States, it's not the capital of ${targetState}. Please try again.`)

        } else {

            correct = true

        }

        return correct;

    }
}