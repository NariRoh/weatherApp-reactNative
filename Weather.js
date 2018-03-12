import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const weatherCases = {
  Rain: {
    colors: ['#00C6FB', '#005BEA'],
    title: 'Singing in the rain🎶 ☔️',
    subtitle: 'For more info look outside',
    icon: 'ios-rainy'
  },
  Clear: {
    colors: ['#F2F252', '#FF7300'],
    title: 'I love sunny days 😍',
    subtitle: 'Go out for nice tanned skin!',
    icon: 'ios-sunny'
  },
  Thunderstorm: {
    colors: ['#002CBC', '#007ADF'],
    title: 'Thunderstorm in the house',
    subtitle: 'Actually, outside of the house',
    icon: 'ios-thunderstorm'
  },
  Clouds: {
    colors: ['#D7D2CC', '#304352'],
    title: 'Clouds',
    subtitle: "I know, it's boring",
    icon: 'ios-cloudy'
  },
  Snow: {
    colors: ['#7DEEFC', '#B9B6E5'],
    title: 'Snowwwwwy',
    subtitle: 'Typical Winterpeg weather',
    icon: 'ios-snow'
  },
  Drizzle: {
    colors: ['#89F7F2', '#66A6FF'],
    title: 'Drizzle',
    subtitle: 'Are we in Vancouver',
    icon: 'ios-rainy-outline'
  },
  Haze: {
    colors: ['#D7D2CC', '#304352'],
    title: 'Haze',
    subtitle: "I don't know what that is 💩",
    icon: 'weather-fog'
  }
}

function Weather({ weatherName, temp }) {
  console.log(weatherName);
  return (
    <LinearGradient
      colors={weatherCases["Clear"].colors}
      style={styles.container}
    >
      <View style={styles.upper}>
        <Ionicons color="white" size={144} name={weatherCases["Clear"].icon} />
        <Text style={styles.temp}>{temp}º</Text>
      </View>
      <View style={styles.lower}>
        <Text style={styles.title}>{weatherCases["Clear"].title}</Text>
        <Text style={styles.subtitle}>{weatherCases["Clear"].subtitle}</Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired
}

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  lower: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25
  },
  temp: {
    fontSize: 38,
    color: 'white',
    backgroundColor: 'transparent',
    marginTop: 10
  },
  title: {
    fontSize: 38,
    color: 'white',
    backgroundColor: 'transparent',
    marginBottom: 10,
    fontWeight: '300'
  },
  subtitle: {
    fontSize: 24,
    color: 'white',
    backgroundColor: 'transparent',
    marginBottom: 24
  }
});
