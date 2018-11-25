import { createStackNavigator } from 'react-navigation';

import { CashFlow, Categories, Charts} from '../Pages';

export default App = createStackNavigator ({
    CashFlow: { screen: CashFlow },
    Categories: { screen: Categories },
    Charts: { screen: Charts },
});
