//javaScript Portfolio Project. Goal is to have user select teh proper capital of a randomply generated state. If the user selects the correct answer the corrects state will be displayed in text along with the location on an interactive map (ex. Google API)

const STATES = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland',
'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']

const STATE_CAPITALS = [  'Montgomery', 'Juneau', 'Phoenix', 'Little Rock', 'Sacramento', 'Denver', 'Hartford', 'Dover', 'Tallahassee', 'Atlanta',
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

    function runGame() {

        const sourceIndex = Math.floor(Math.random() * STATES.length);
        const targetIndex = Math.floor(Math.random() * STATES.length);
        const sourceState = STATES[sourceIndex];
        const targetState = STATES[targetIndex];
        const targetCapital = STATE_CAPITALS[targetIndex];
        const targetZip = CAPITAL_ZIPCODES[targetIndex]
    
        console.log("Source state: " + sourceState);
        console.log("Target state: " + targetState);
        console.log("Target capital: " + targetCapital);
    
        let guess = " ";
        let correct = false;
        let guessCount = 0;

    console.log("This is the target " + targetState);
    do {
        guess = prompt('I am thinking of one of these colors:\n\n' + COLORS_ARRAY.join(", ") +
            '\n\nWhat color am I thinking of?\n');
        guessCount++;
        if (guess === null) {
            return;
        }
        correct = checkGuess(guess, target);

    } while (!correct);
    alert(`Congratulations! You guessed the correct color (${target}) in ${guessCount} guesses.`);
    document.body.style.background = guess;
}

function checkGuess(guess, target) {
    let correct = false;
    if (!COLORS_ARRAY.includes(guess)) {
        alert("The guess wasn't from the option,please choose from provided colors");
    }
    else if (guess > target) {
        alert("Sorry, Please try again.")
    }
    else if (guess < target) {
        alert("Sorry, Please try again.")
    }
    else {
        correct = true;
    }
    return correct;
}