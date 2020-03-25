import React, { useState } from 'react';
import { SafeAreaView, FlatList, StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Footer, ListElement, ListHeader } from 'components';
import { forecastActions } from './modules/forecast';
import styles from './App.styles';

const App = () => {
  const dispatch = useDispatch();
  const itemsList = useSelector(({ list }) => list);
  const [searchText, setSearchedText] = useState('');
  const isListEmpty = itemsList && itemsList.length === 0;

  const keyExtractor = (item, index) => item.id || `${index}`;

  const renderItem = ({ item }) => {
    return <ListElement {...item} />;
  };

  const handleOnPress = async () => {
    try {
      await dispatch(forecastActions.getForecastData(searchText));
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnChangeText = text => {
    setSearchedText(text);
  };

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
          initialNumToRender={15}
          onEndReachedThreshold={0.5}
          ListHeaderComponent={
            <ListHeader
              onPress={handleOnPress}
              onChangeText={handleOnChangeText}
              onSubmitEditing={handleOnPress}
            />
          }
          ListFooterComponent={<Footer />}
          ListFooterComponentStyle={
            isListEmpty ? styles.listFooterEmptyStyle : styles.listFooter
          }
          data={itemsList}
        />
      </SafeAreaView>
    </React.Fragment>
  );
};

export default App;
