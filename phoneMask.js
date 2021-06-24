let example = document.querySelectorAll(".inputPhoneExample");

for (let i = 0; i < inputPhone.length; i++) {
    inputPhone[i].addEventListener("keydown", inputPhoneMask);
    inputPhone[i].addEventListener("focus", inputPhoneMask);
    inputPhone[i].addEventListener("paste", inputPhoneMask);
}

function inputPhoneMask(event) {
    let mask = "+7 (   )   -  -  ";
    target = event.currentTarget;
    let value = target.value;
    let newValue = "";
    if (event.type == "focus") {
        if (value.length < 3) {
            for (let i = 0; i < 4; i++) newValue += mask[i];
            event.currentTarget.value = newValue;
        }
    }
    if (event.type == "keydown") {
        if (Number(event.key) || (Number(event.key) == 0)) {
            if (target.selectionStart < 4) {
                event.preventDefault();
                target.selectionStart = 4;
            }
            if (target.selectionStart == 7) event.currentTarget.value += ") ";
            if (target.selectionStart == 12) event.currentTarget.value += "-";
            if (target.selectionStart == 15) event.currentTarget.value += "-";
        }
        else if (event.key == "Backspace") {
            if (target.selectionStart < 5) {
                event.preventDefault();
            }
        }
        else event.preventDefault();
    }
    if (event.type == "paste") {
        event.preventDefault();
    }
}
