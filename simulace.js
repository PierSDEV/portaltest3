// Simulace odpovědi administrátora
function simulateAdminResponse() {
    setTimeout(() => {
        const randomResponses = [
            "Dobrý den! Jak vám mohu pomoci?",
            "Moment, podívám se na to.",
            "Děkuji za váš dotaz, odpovím co nejdříve.",
            "Prosím, chvíli vydržte.",
            "Můžete mi poskytnout více informací?"
        ];
        const randomIndex = Math.floor(Math.random() * randomResponses.length);
        const adminMessage = randomResponses[randomIndex];

        // Přidání zprávy administrátora
        chatMessages.push({ text: adminMessage, sender: 'admin' });
        displayMessages();
    }, 2000); // Odpověď po 2 sekundách
}

// Přidání simulované odpovědi po každé odeslané zprávě uživatele
function sendMessage() {
    const chatInput = document.getElementById('chat-input');
    const message = chatInput.value.trim();

    if (message !== '') {
        // Přidání nové zprávy do seznamu
        chatMessages.push({ text: message, sender: 'user' });
        chatInput.value = ''; // Vymaže pole vstupu
        displayMessages();
        simulateAdminResponse(); // Simulace odpovědi administrátora
    }
}