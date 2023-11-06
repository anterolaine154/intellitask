/**
 * filename: complex_code.js
 * 
 * This complex JavaScript code demonstrates a simulation of a virtual weather system.
 * It generates random weather conditions for different locations and displays them in a UI.
 * The code contains multiple objects, arrays, classes, and functions to achieve the desired functionality.
 * 
 * Note: This code requires a graphical user interface framework to display the weather conditions.
 */

// Weather class represents a weather condition at a specific location
class Weather {
  constructor(location, temperature, humidity, windSpeed) {
    this.location = location;
    this.temperature = temperature;
    this.humidity = humidity;
    this.windSpeed = windSpeed;
  }

  toString() {
    return `${this.location}: ${this.temperature}°C, ${
      this.humidity
    }% humidity, ${this.windSpeed}km/h wind speed`;
  }
}

// WeatherSystem class manages the virtual weather system
class WeatherSystem {
  constructor() {
    this.locations = ['New York', 'London', 'Tokyo', 'Sydney', 'Paris'];
    this.weatherData = [];
    this.timerId = null;
  }

  startSimulation() {
    this.timerId = setInterval(() => {
      this.generateWeatherData();
      this.displayWeatherData();
    }, 3000);
  }

  stopSimulation() {
    clearInterval(this.timerId);
  }

  generateWeatherData() {
    this.weatherData = this.locations.map((location) => {
      const temperature = Math.random() * 40 - 10;
      const humidity = Math.random() * 100;
      const windSpeed = Math.random() * 50;
      return new Weather(location, temperature.toFixed(1), humidity.toFixed(1), windSpeed.toFixed(1));
    });
  }

  displayWeatherData() {
    // Assume the UI framework is available with functions to display weather data
    this.weatherData.forEach((weather) => {
      displayWeather(weather.toString());
    });
  }
}

// UI function to display weather data in a UI
function displayWeather(data) {
  console.log(data);
  // Assumes UI functions would handle displaying data in a UI
}

// Create a WeatherSystem instance and start the simulation
const weatherSystem = new WeatherSystem();
weatherSystem.startSimulation();

// Stop the simulation after 30 seconds
setTimeout(() => {
  weatherSystem.stopSimulation();
}, 30000);