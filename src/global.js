/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

export const colors = {
  GREY: '#d0d5dc',
  BLUE: '#1992fe',
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  innerContainer: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
  },
});
