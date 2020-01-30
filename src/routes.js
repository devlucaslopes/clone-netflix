import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from './screens/Login';
import Home from './screens/Home';

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    Home,
  }),
);

export default Routes;
