import { createAppContainer } from 'react-navigation';

const Router = createStackNavigator({
  // Add your App screens here, example:
  // Home: HomeScreen,
  // Other: OtherScreen
});

export default createAppContainer(Router);
