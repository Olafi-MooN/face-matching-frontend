import { StyleSheet } from "react-native";

const steps_css = StyleSheet.create({
  color: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center'
  },
  circleRadius: {
    width: 60,
    height: 60,
    backgroundColor: 'blue',
    marginHorizontal: 10,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerHeader: {
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 20,
    height: '10%',
  },
  textContainerHeader: {
    color: '#fff',
    fontSize: 20
  },
  containerMain: {
    height: '80%',
  },
  containerBottom: {
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  pressableButton: {
    backgroundColor: 'blue',
    padding: 17,
    borderRadius: 8,
    width: '45%',
  }
});

export { steps_css }