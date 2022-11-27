import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  searchlist: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 20,
  },
  item: {
    padding: 15,
    backgroundColor: 'white',
    width: '50%',
    borderRadius: 12,
    margin: 5,
  },
  icon_container: {
    backgroundColor: 'white',
    borderRadius: 50,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item_heart: {
    width: 30,
    height: 30,
  },
  item_image: {
    width: '100%',
    height: 120,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  item_name: {
    fontWeight: '700',
    fontSize: 20,
    color: 'black',
    paddingBottom: 10,
  },
  item_price: {
    fontWeight: '500',
    fontSize: 15,
    color: '#333333',
  },
});

export default style;
