import { Provider as PaperProvider } from 'react-native-paper'
import { Provider } from 'react-redux';
import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
  return (
    <Provider>
      <PaperProvider>
        <AppNavigator />
      </PaperProvider>
    </Provider>
  )
}