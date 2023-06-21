import { ThemeProvider } from 'styled-components';
import theme from './src/theme'
import { 
  useFonts, 
  Nunito_400Regular, 
  Nunito_700Bold 
} from '@expo-google-fonts/nunito'
import { StatusBar } from 'react-native';
import { Loading } from '@components/Loading';

import { Routes } from './src/routes';


export default function App() {

  const [fontsLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold })

  return (<>
    <ThemeProvider theme={theme}>
      { fontsLoaded ? <Routes /> : <Loading /> }
      <StatusBar 
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
    </ThemeProvider>
    </>
  );
}

