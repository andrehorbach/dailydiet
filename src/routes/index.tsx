import { View } from 'react-native';
import { useTheme } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './app.routes';
import { MealsProvider } from '@contexts/MealsContext';

export function Routes() {

  const { COLORS } = useTheme();

  return(
    <View style={{ flex: 1, backgroundColor: COLORS.GRAY_7}}>
      <NavigationContainer>
        <MealsProvider>
          <AppRoutes />
        </MealsProvider>
      </NavigationContainer>  
    </View>
  )
}

