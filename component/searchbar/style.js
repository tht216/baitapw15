import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  searchBar: {
    padding: 15,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    width: 200,
    marginBottom: 15,
  },
  search: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 10,
  },
  search_input: {
    borderWidth: 1,
    paddingLeft: 20,
    borderColor: 'white',
    fontSize: 18,
    fontWeight: '500',
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
  button: {
    backgroundColor: 'white',
    padding: 13,
    borderRadius: 12,
    borderColor: '#f8f8f8',
    marginLeft: 20,
  },
});

export default style;
