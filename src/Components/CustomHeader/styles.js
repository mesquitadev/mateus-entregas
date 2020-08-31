import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    height: 56,
    justifyContent: 'center',
    padding: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  iconContainer: {
    left: 0,
    paddingLeft: 18,
    position: 'absolute',
  },
  headerTitle: {
    color: '#263238',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
export default styles;
