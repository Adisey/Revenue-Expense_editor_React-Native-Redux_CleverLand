import { createStackNavigator } from 'react-navigation';

import { CashFlow, Categories, Charts, Tools } from '../Pages';

export default App = createStackNavigator({
    CashFlow:   { screen: CashFlow },
    Categories: { screen: Categories },
    Charts:     { screen: Charts },
    Tools:      { screen: Tools },
});
