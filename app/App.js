import React from 'react';
import { SafeAreaView, StyleSheet, FlatList, StatusBar } from 'react-native';
import { Footer, ListElement, ListHeader } from 'components';

const items = [];
const App = () => {
  const isListEmpty = items && items.length === 0;

  const keyExtractor = (item, index) => item.id || `${index}`;
  const renderItem = ({ item }) => {
    return <ListElement {...item} />;
  };
  const handleOnPress = () => {};

  return (
    <React.Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <FlatList
          contentInsetAdjustmentBehavior="automatic"
          style={styles.flatList}
          keyExtractor={keyExtractor}
          contentContainerStyle={styles.contentContainerStyle}
          renderItem={renderItem}
          ListHeaderComponent={<ListHeader onPress={handleOnPress} />}
          ListFooterComponent={<Footer />}
          ListFooterComponentStyle={
            isListEmpty ? styles.listFooterEmptyStyle : styles.listFooter
          }
          data={items}
        />
      </SafeAreaView>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  flatList: {
    backgroundColor: 'white',
    width: '100%',
  },
  contentContainerStyle: {
    backgroundColor: 'white',
    width: '100%',
    alignItems: 'center',
  },
  listFooter: {
    alignSelf: 'flex-end',
    paddingTop: 50,
  },
  listFooterEmptyStyle: {
    alignSelf: 'flex-end',
    paddingTop: 110,
  },
});

export default App;
