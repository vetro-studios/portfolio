const helpCommands = [
    'top secret',
    
    'clear' ,
];
topsecret = [
    'why should I tell you the secret?'
]

const inputArea = document.getElementById('input-area');

inputArea.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        const userInput = this.value.split('\n').pop().trim().toLowerCase();
        
        if (userInput === 'help') {
            displayHelp();
        }

        if (userInput === 'top secret') {
            displaytopsecret();
        }
     

        if (userInput === 'clear') {
            clearTerminal();
        }
        if (userInput === 'who am I') {
            displaytopsecret();
        }
    }
});

function displayHelp() {
    let helpText = 'Available Commands:\n';
    helpCommands.forEach((command, index) => {
        helpText += ` ${command}\n`;
    });
    inputArea.value += '\n' + helpText;
}
function displaytopsecret() {
    let secretText = '';
    topsecret.forEach((command, index) => {
        secretText += ` ${command}\n`;
    });
    inputArea.value += '\n' + secretText;
}

function clearTerminal() {
    inputArea.value = '';
}
