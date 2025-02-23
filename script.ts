interface Planet {
    name: string;
    emoji: string; // Adicionando uma propriedade para o emoji
    sound: string;
    soundFile: string;
}

const planets: Planet[] = [
    { name: "Terra", emoji: "🌍", sound: "Beep!", soundFile: "assets/terra.mp3" },
    { name: "Marte", emoji: "🔴", sound: "Boop!", soundFile: "assets/marte.mp3" },
    { name: "Júpiter", emoji: "🟠", sound: "Buzz!", soundFile: "assets/jupiter.mp3" },
    { name: "Saturno", emoji: "🪐", sound: "Bing!", soundFile: "assets/saturno.mp3" },
    { name: "Nébula", emoji: "🌌", sound: "Wooosh!", soundFile: "assets/nebula.mp3" }
];

const outputElement = document.getElementById("output") as HTMLDivElement;
const startButton = document.getElementById("startJourney") as HTMLButtonElement;

function delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function playSound(soundFile: string): Promise<void> {
    return new Promise((resolve) => {
        const audio = new Audio(soundFile);
        audio.onended = () => resolve();
        audio.play();
    });
}

async function startJourney() {
    startButton.disabled = true;
    outputElement.innerHTML = "";

    outputElement.innerHTML += "A nave está se preparando para decolar. 3, 2, 1 ...<br>";
    await delay(2000);

    for (let i = 0; i < 3; i++) {
        for (const planet of planets) {
            outputElement.innerHTML += `A nave partiu para o seu próximo destino!<br>`;
            await playSound("assets/decolagem.mp3");
            await delay(7000);

            outputElement.innerHTML += `Você chegou ao seu destino: ${planet.emoji} ${planet.name}<br>`;
            await playSound(planet.soundFile);
            await delay(3000);
        }
        
        if (i < 2) {
            outputElement.innerHTML += "Preparando para o próximo ciclo...<br><br>";
            await delay(5000);
        }
    }

    startButton.disabled = false;
}

// Correção do erro de tipagem no event listener
startButton.addEventListener("click", (event: Event) => {
    void startJourney();
});
