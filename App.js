import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import Weather from './Weather';

const API_KEY = "5acdb8cd065786c45c567a53258c2d29";

export default class App extends Component {
  state = {
    isLoaded: false,
    error: null,
    temperature: null,
    weather: null,
    name: null
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this._getWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error: error
        });
      }
    );
  }

  _getWeather = (lat, lon) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`
    )
    .then(response => response.json())
    .then(json => {
      // console.log(json.main.temp, json.weather[0].main, json.name)
      this.setState({
        temperature: json.main.temp,
        weather: json.weather[0].main,
        name: json.name,
        isLoaded: true
      });
    });
  };

  render() {
    const { isLoaded, error, temperature, weather, name } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        { isLoaded ? (
          <Weather weatherName={weather} location={name} temp={Math.floor(temperature - 273.15)} />
        ) : (
          <View style={styles.loading}>
            <Text style={styles.loadingText}>Getting the Weather</Text>
            { error ? (
              <Text style={styles.errorText}>{error}</Text>
            ) : (
              null
            )}
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  errorText: {
    color: 'red',
    backgroundColor: 'transparent',
    marginBottom: 40
  },
  loading: {
    flex: 1,
    backgroundColor: '#FDF6AA',
    justifyContent: 'flex-end',
    paddingLeft: 25
  },
  loadingText: {
    fontSize: 38,
    marginBottom: 100
  }
});
