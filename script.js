document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    const senderName = document.getElementById("senderName").value.trim();
    const receiverName = document.getElementById("receiverName").value.trim();
    const outputMessage = document.getElementById("outputMessage");

    if (senderName && receiverName) {
        const message = `${receiverName}, je te souhaite une très belle année pleine de joie et de succès ! 💖\nDe la part de ${senderName}.`;
        outputMessage.textContent = message;

        document.querySelector("form").classList.add("hidden");
        document.getElementById("customMessage").classList.remove("hidden");
    }
});

document.getElementById("reset").addEventListener("click", function() {
    document.getElementById("form").reset();
    document.querySelector("form").classList.remove("hidden");
    document.getElementById("customMessage").classList.add("hidden");
});
