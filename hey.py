import speech_recognition as sr
import pyttsx3
import webbrowser
import requests

# Initialize the recognizer and text-to-speech engine
recognizer = sr.Recognizer()
tts_engine = pyttsx3.init()

def speak(text):
    """Function to make the assistant speak."""
    tts_engine.say(text)
    tts_engine.runAndWait()

def listen():
    """Function to listen to user input through the microphone."""
    with sr.Microphone() as source:
        print("Listening...")
        audio = recognizer.listen(source)
        try:
            command = recognizer.recognize_google(audio)
            print(f"You said: {command}")
            return command.lower()
        except sr.UnknownValueError:
            speak("Sorry, I did not understand that.")
        except sr.RequestError:
            speak("Could not request results from speech recognition service.")
        return ""

def get_weather(city):
    """Fetch weather information from OpenWeatherMap API."""
    api_key = 'your_openweathermap_api_key'
    url = f'http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric'
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        weather = data['weather'][0]['description']
        temp = data['main']['temp']
        speak(f"The weather in {city} is {weather} with a temperature of {temp}°C.")
    else:
        speak(f"Sorry, I couldn't fetch the weather for {city}.")

def perform_task(command):
    """Process commands and perform tasks."""
    if "weather" in command:
        speak("Which city?")
        city = listen()
        if city:
            get_weather(city)
    elif "open youtube" in command:
        speak("Opening YouTube.")
        webbrowser.open("https://www.youtube.com")
    elif "play music" in command:
        speak("Playing music.")
        webbrowser.open("https://open.spotify.com")
    elif "exit" in command or "quit" in command:
        speak("Goodbye!")
        exit(0)
    else:
        speak("Sorry, I can't do that yet.")

if __name__ == "__main__":
    speak("Hello, how can I assist you today?")
    while True:
        command = listen()
        if command:
            perform_task(command)
