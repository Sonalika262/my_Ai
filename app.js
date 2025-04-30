// const btn = document.querySelector('.talk');
// const content = document.querySelector('.content');

// function speak(text) {
//     const text_speak = new SpeechSynthesisUtterance(text);

//     text_speak.rate = 1;
//     text_speak.volume = 1;
//     text_speak.pitch = 1;

//     window.speechSynthesis.speak(text_speak);
// }

// function wishMe() {
//     var day = new Date();
//     var hour = day.getHours();

//     if (hour >= 0 && hour < 12) {
//         speak("Good Morning Boss...");
//     } else if (hour >= 12 && hour < 17) {
//         speak("Good Afternoon Master...");
//     } else {
//         speak("Good Evening Sir...");
//     }
// }

// window.addEventListener('load', () => {
//     speak("Initializing Vocalis Enigma ...");
//     wishMe();
// });

// const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// const recognition = new SpeechRecognition();

// recognition.onresult = (event) => {
//     const currentIndex = event.resultIndex;
//     const transcript = event.results[currentIndex][0].transcript;
//     content.textContent = transcript;
//     takeCommand(transcript.toLowerCase());
// };

// btn.addEventListener('click', () => {
//     content.textContent = "Listening...";
//     recognition.start();
// });

// function takeCommand(message) {
//     if (message.includes('hey') || message.includes('hello')) {
//         speak("Hello Sir/Ma'am, How May I Help You?");
//     } else if (message.includes("open google")) {
//         window.open("https://google.com", "_blank");
//         speak("Opening Google...");
//     } else if (message.includes("open youtube")) {
//         window.open("https://youtube.com", "_blank");
//         speak("Opening Youtube...");
//     } else if (message.includes("open facebook")) {
//         window.open("https://facebook.com", "_blank");
//         speak("Opening Facebook...");
//     } else if (message.includes('what is') || message.includes('who is') || message.includes('what are')) {
//         window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
//         const finalText = "This is what I found on the internet regarding " + message;
//         speak(finalText);
//     } else if (message.includes('wikipedia')) {
//         window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "").trim()}`, "_blank");
//         const finalText = "This is what I found on Wikipedia regarding " + message;
//         speak(finalText);
//     } else if (message.includes('time')) {
//         const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
//         const finalText = "The current time is " + time;
//         speak(finalText);
//     } else if (message.includes('date')) {
//         const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" });
//         const finalText = "Today's date is " + date;
//         speak(finalText);
//     } else if (message.includes('calculator')) {
//         window.open('Calculator:///');
//         const finalText = "Opening Calculator";
//         speak(finalText);
//     } else {
//         window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
//         const finalText = "I found some information for " + message + " on Google";
//         speak(finalText);
//     }
// }
// const btn = document.querySelector('.talk');
// const content = document.querySelector('.content');

// function speak(text) {
//     const text_speak = new SpeechSynthesisUtterance(text);
//     text_speak.rate = 1;
//     text_speak.volume = 1;
//     text_speak.pitch = 1;
//     window.speechSynthesis.speak(text_speak);
// }

// function wishMe() {
//     let hour = new Date().getHours();
//     let greeting = hour < 12 ? "Good Morning" : hour < 17 ? "Good Afternoon" : "Good Evening";
//     speak(greeting + ", How can I assist you?");
// }

// window.addEventListener('load', () => {
//     speak("Initializing Vaishnavi...");
//     wishMe();
// });

// const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// const recognition = new SpeechRecognition();
// recognition.lang = "en-US";
// recognition.continuous = false;
// recognition.interimResults = false;

// recognition.onresult = (event) => {
//     const transcript = event.results[0][0].transcript.toLowerCase().trim();
//     content.textContent = "You said: " + transcript;
//     takeCommand(transcript);
// };

// btn.addEventListener('click', () => {
//     content.textContent = "Listening...";
//     recognition.start();
// });

// function takeCommand(message) {
//     if (message.includes('hey') || message.includes('hello')) {
//         speak("Hello, how may I assist you?");
//     } 
//     else if (message.includes("open google")) {
//         speak("Opening Google...");
//         window.open("https://google.com", "_blank");
//     } 
//     else if (message.includes("open youtube")) {
//         speak("Opening YouTube...");
//         window.open("https://youtube.com", "_blank");
//     } 
//     else if (message.includes("open facebook")) {
//         speak("Opening Facebook...");
//         window.open("https://facebook.com", "_blank");
//     } 
//     else if (message.includes('what is') || message.includes('who is') || message.includes('what are')) {
//         let query = encodeURIComponent(message);
//         speak("Searching Google for " + message);
//         window.open(`https://www.google.com/search?q=${query}`, "_blank");
//     } 
//     else if (message.includes('wikipedia')) {
//         let query = message.replace("wikipedia", "").trim();
//         if (query) {
//             window.open(`https://en.wikipedia.org/wiki/${encodeURIComponent(query)}`, "_blank");
//             speak("Here is what I found on Wikipedia about " + query);
//         } else {
//             speak("Please specify a topic for Wikipedia search.");
//         }
//     } 
//     else if (message.includes('time')) {
//         let time = new Date().toLocaleTimeString();
//         speak("The current time is " + time);
//     } 
//     else if (message.includes('date')) {
//         let date = new Date().toLocaleDateString();
//         speak("Today's date is " + date);
//     } 
//     else if (message.includes('calculator')) {
//         speak("Opening Calculator...");
//         try {
//             window.open('Calculator:///');
//         } catch {
//             speak("Calculator can't be opened from the browser.");
//         }
//     } 
//     else {
//         let query = encodeURIComponent(message);
//         speak("Searching Google for " + message);
//         window.open(`https://www.google.com/search?q=${query}`, "_blank");
//     }
// }

const btn = document.querySelector('.talk');
const content = document.getElementById('content');

const greetings = ["Hello!", "Hi there!", "Namaste!", "Wassup!", "Hey friend!"];
const jokes = [
    "Life is full of happiness and tears; be strong and have faith.",
    "I told my computer I needed a break, and it said 'No problem, I’ll go to sleep.'",
    "Why don’t robots get scared? Because they have nerves of steel."
];
const quotes = [
    "Believe in yourself and you’re halfway there.",
    "The only limit is your imagination.",
    "Push yourself, because no one else is going to do it for you."
];
const moodReplies = [
    "I'm vibing high today!",
    "Feeling electric!",
    "Always ready for action!",
    "Buzzing with energy!"
];

function speak(text) {
    content.textContent = "";
    const message = new SpeechSynthesisUtterance(text);
    message.rate = 1;
    message.volume = 1;
    message.pitch = 1;
    window.speechSynthesis.speak(message);
    typingEffect(text);
}

function typingEffect(text) {
    let index = 0;
    content.textContent = "";
    const interval = setInterval(() => {
        content.textContent += text.charAt(index);
        index++;
        if (index >= text.length) clearInterval(interval);
    }, 50);
}

function wishMe() {
    const hour = new Date().getHours();
    const greeting = hour < 12 ? "Good Morning" : hour < 17 ? "Good Afternoon" : "Good Evening";
    speak(`${greeting}! I am your assistant. How can I help you today?`);
}

window.addEventListener('load', () => {
    speak("Hello Sonalika...");
    setTimeout(wishMe, 1000);
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = "en-US";
recognition.continuous = false;

btn.addEventListener('click', () => {
    btn.classList.add("listening");
    content.textContent = "Listening...";
    recognition.start();
});

recognition.onend = () => {
    btn.classList.remove("listening");
};

recognition.onresult = function (event) {
    const transcript = event.results[0][0].transcript.toLowerCase().trim();
    handleCommand(transcript);
};

function handleCommand(message) {
    // Wake word check
    if (message.includes('sonalika')) {
        speak("Yes? I'm listening...");
        return;
    }

    // Common voice commands
    if (message.includes('google')) {
        speak("Opening Google...");
        window.open("https://www.google.com", "_blank");
    } else if (message.includes('youtube')) {
        speak("Opening YouTube...");
        window.open("https://www.youtube.com", "_blank");
    } else if (message.includes('facebook')) {
        speak("Opening Facebook...");
        window.open("https://www.facebook.com", "_blank");
    } else if (message.includes('github')) {
        speak("Opening GitHub...");
        window.open("https://www.github.com", "_blank");
    } else if (message.includes('linkedin')) {
        speak("Opening LinkedIn...");
        window.open("https://www.linkedin.com", "_blank");
    } else if (message.includes('joke')) {
        const joke = jokes[Math.floor(Math.random() * jokes.length)];
        speak(joke);
    } else if (message.includes('quote')) {
        const quote = quotes[Math.floor(Math.random() * quotes.length)];
        speak(quote);
    } else if (message.includes('how are you')) {
        const mood = moodReplies[Math.floor(Math.random() * moodReplies.length)];
        speak(mood);
    } else if (message.includes('your name')) {
        speak("I’m Friday — your digital buddy!");
    } else if (message.includes('i am sad')) {
        speak("I’m here for you. Want to hear a joke?");
    } else if (message.includes('time')) {
        const time = new Date().toLocaleTimeString();
        speak("It is " + time);
    } else if (message.includes('date')) {
        const date = new Date().toLocaleDateString();
        speak("Today is " + date);
    }

    else if (message.match(/(add|plus)/)) {
        const numbers = message.match(/(\d+).*(add|plus).*(\d+)/);
        if (numbers) {
            const result = parseFloat(numbers[1]) + parseFloat(numbers[3]);
            speak(`The result is ${result}`);
        } else {
            speak("Sorry, I couldn't find the numbers to add.");
        }
    } else if (message.match(/(subtract|minus)/)) {
        const numbers = message.match(/(\d+).*(subtract|minus).*(\d+)/);
        if (numbers) {
            const result = parseFloat(numbers[1]) - parseFloat(numbers[3]);
            speak(`The result is ${result}`);
        } else {
            speak("Sorry, I couldn't find the numbers to subtract.");
        }
    } else if (message.match(/(multiply|times|into)/)) {
        const numbers = message.match(/(\d+).*(multiply|times|into).*(\d+)/);
        if (numbers) {
            const result = parseFloat(numbers[1]) * parseFloat(numbers[3]);
            speak(`The result is ${result}`);
        } else {
            speak("Sorry, I couldn't find the numbers to multiply.");
        }
    } else if (message.match(/(divide|divided by|over)/)) {
        const numbers = message.match(/(\d+).*(divide|divided by|over).*(\d+)/);
        if (numbers) {
            const result = parseFloat(numbers[1]) / parseFloat(numbers[3]);
            speak(`The result is ${result}`);
        } else {
            speak("Sorry, I couldn't find the numbers to divide.");
        }
    }
    else if (message.includes('bye') || message.includes('goodbye') || message.includes('see you')) {
        speak("Bye bye, have a great day!");
    }
    
    else {
        speak("Let me search that for you!");
        window.open(`https://www.google.com/search?q=${encodeURIComponent(message)}`, "_blank");
    }
}
