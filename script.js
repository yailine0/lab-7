
const MyName = "Yailine Cano";

function init() {
    
    const entryButton = document.getElementById('entrybutton');
    const entryInput = document.getElementById('entryinput');
    const textOutput = document.getElementById('textoutput');

    function handleButtonClick() {
        
        const message = entryInput.value;

        const alertMessage = MyName + ": " + message;
        alert(alertMessage);

        textOutput.innerText = message;
    }

    entryButton.addEventListener('click', handleButtonClick);
}

window.addEventListener('load', init);
    