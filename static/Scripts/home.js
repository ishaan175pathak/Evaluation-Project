const consentBox = document.getElementById("consent-box");
const agreeText = document.getElementById("agree-text");
const agreeBtn = document.getElementById("consent-checkbox")
const consentCheckbox = document.getElementById("consent-checkbox");

// Enabling checkbox if the content size is less than container size

function checkIfScrollable() {
    if (consentBox.scrollHeight <= consentBox.clientHeight) {
        // Content is not scrollable, enable checkbox and text
        consentCheckbox.disabled = false;
        agreeText.classList.remove("disabled");
    }
}

// Enable checkbox once user scrolls to the bottom
consentBox.addEventListener('scroll', () => {
    if (consentBox.scrollTop + consentBox.clientHeight >= consentBox.scrollHeight - 10) {
        consentCheckbox.disabled = false;
        agreeText.classList.remove("disabled");
    }
});

// Enable button only when checkbox is checked
consentCheckbox.addEventListener('change', () => {
    agreeBtn.disabled = !consentCheckbox.checked;
});

// Show processing and redirect
agreeBtn.addEventListener('click', () => {
    agreeBtn.disabled = true;
    agreeText.innerText = "Processing...";
    setTimeout(() => {
        window.location.href = nextURLPath;
    }, 2000);
});

window.onload = checkIfScrollable;