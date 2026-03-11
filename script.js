const helpCommands = [
    'top secret',
    'joke',
    'clear' ,
    'hello',
    'sleep',
    'error',
    'system',
];
topsecret = [
    'why should I tell you the secret?'
]
joke = [
'Why do programmers use dark mode? because light attracts bugs'
]
hello = [
   'hello! welcome to the terminal'
]
system = [
'System working perfectly fine!'
]
sleep = [
    'system going to sleep...'
]
error = [
    'error,system not working'
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
      if (userInput === 'hello') {
            displayhello();
        }

        if (userInput === 'clear') {
            clearTerminal();
        }
         if (userInput === 'joke') {
            displayjoke();
        }
          if (userInput === 'system') {
            displaysystem();
        }
          if (userInput === 'sleep') {
            displaysleep();
        }
           if (userInput === 'error') {
            displayerror();
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
function displayjoke() {
    let jokeText = '';
    joke.forEach((command, index) => {
        jokeText += ` ${command}\n`;
    });
    inputArea.value += '\n' + jokeText;
}
function displayhello() {
    let helloText = '';
    hello.forEach((command, index) => {
        helloText += ` ${command}\n`;
    });
    inputArea.value += '\n' + helloText;
}
function displaysleep() {
    let sleepText = '';
    sleep.forEach((command, index) => {
        sleepText += ` ${command}\n`;
    });
    inputArea.value += '\n' + sleepText;
}
function displaysystem() {
    let systemText = '';
    system.forEach((command, index) => {
        systemText += ` ${command}\n`;
    });
    inputArea.value += '\n' + systemText;
}
function displayerror() {
    let errorText = '';
    error.forEach((command, index) => {
        errorText += ` ${command}\n`;
    });
    inputArea.value += '\n' + errorText;
}