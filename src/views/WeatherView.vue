<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { computed, onMounted } from 'vue';

const apiKey = '77fd619bbc851e158ecbd04347896504';

const city = ref('');
const weatherData = ref(null);

const temperature = computed(() =>
  weatherData.value.main?.temp
    ? Math.floor(weatherData.value.main?.temp - 273)
    : null
);

const iconUrl = computed(() =>
  weatherData.value.weather
    ? `http://api.openweathermap.org/img/w/${weatherData.value.weather[0].icon}.png`
    : null
);

const fetchWeatherData = async (latitude, longitude) => {
  try {
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
    const response = await axios.get(url);
    weatherData.value = response.data;
  } catch (error) {
    console.error('Error fetching weather data: ', error);
  }
}

const fetchCurrentLocationWeather = async () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      await fetchWeatherData(latitude, longitude);
    })
  }
}
onMounted(async () => {await fetchCurrentLocationWeather();})

const findCoordinatesOfCity = async () => {
  try {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city.value}&limit=5&appid=${apiKey}`;
    const response = await axios.get(url);
    // data[0] implicitly trusts that the first returned result will be the most relevant choice
    return { latitude: response.data[0].lat, longitude: response.data[0].lon };
  } catch (error) {
    console.error('Error fetching geolocation data: ', error);
    return null;
  }
}

const searchByCity = async () => {
  if (!city.value) {
    alert('Please enter a city');
    return;
  }

  const coordinates = await findCoordinatesOfCity();
  if (!coordinates) return;
  const { latitude, longitude } = coordinates;
  await fetchWeatherData(latitude, longitude);
}

</script>

<template>
  <div class="container text-center my-5">
    <div class="header">
      <h1>WEATHER APP</h1>
      <div class="search-bar">
        <input
          type="text"
          v-model="city"
          placeholder="Enter city name"
          class="search-input"
        />
        <button @click="searchByCity" class="search-button">Search</button>
      </div>
    </div>
    <main>
      <div v-if="weatherData">
        <h2>{{ weatherData.name }}, {{ weatherData.sys.country }}</h2>
        <div>
          <img :src="iconUrl" alt="Weather Icon" />
          <p>{{ temperature }} °C</p>
        </div>
        <span>{{ weatherData.weather[0].description }}</span>
      </div>
    </main>
  </div>
</template>
