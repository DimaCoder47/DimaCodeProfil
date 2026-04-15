function downloadImage() {
    const container = document.querySelector('#capture'); // Wir nutzen querySelector zur Sicherheit
    
    if (!container) {
        console.error("Container nicht gefunden!");
        return;
    }

    html2canvas(container, {
        backgroundColor: "#1a1a1a",
        backgroundColor: null, // Setzt Hintergrund auf transparent
        scale: 3, // Höhere Qualität
        logging: true, // Zeigt Fehler in der Konsole an
        useCORS: true  // Wichtig,für externe Bilder/Fonts
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = 'profile.png';
        link.href = canvas.toDataURL("image/png");
        link.click();
    }).catch(err => {
        console.error("Fehler beim Erstellen des Bildes:", err);
    });
}