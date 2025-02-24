function makeTextBigger() {
    document.getElementById("textInput").style.fontSize = "4em"; 
}

function applyTextStyle() {
    alert("Style changed!"); 

    let textArea = document.getElementById("textInput");
    let fancyRadio = document.getElementById("fancyShmancy");

    if (fancyRadio.checked) {
        textArea.style.fontWeight = "bold"; 
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline"; 
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function makeTextMoo() {
    let textArea = document.getElementById("textInput");
    let text = textArea.value.toUpperCase(); 
    let sentences = text.split(".");

    for (let i = 0; i < sentences.length; i++) {
        let sentence = sentences[i].trim();
        if (sentence.length > 0) {
            let words = sentence.split(" "); 
            words[words.length - 1] += "-Moo"; 
            sentences[i] = words.join(" "); 
        }
    }
    textArea.value = sentences.join(". "); 
}


