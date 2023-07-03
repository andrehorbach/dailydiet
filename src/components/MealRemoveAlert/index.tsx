import { Alert, Modal } from "react-native";
import { Container, Dialog, Title, DividerContainer } from "./styles"
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { Button } from "@components/Button"
import { MealProps } from "@components/Meals";
import { mealRemove } from '@storage/mealRemove';

type Props = {
  visible: boolean;
  mealToDelete: MealProps;
  onPress: Function;
}

export function MealRemoveAlert({ visible, mealToDelete, onPress } : Props) {
  
  const navigation = useNavigation();
  
  async function deleteMeal(mealToDelete: MealProps){
    try {
     
      await mealRemove(mealToDelete);
      navigation.navigate('home');
      
    } catch(err) {
      console.log(err)
      Alert.alert('Não foi possível remover a refeição.')
    }
  }

  return(
    <Modal 
      visible={visible}
      transparent={true}
    >
      <Container>
        <Dialog>
          <Title>Deseja realmente excluir o registro da refeição?</Title>
            <DividerContainer>
            <Button 
                title="Cancelar" 
                type="SECONDARY"
                onPress={()=>onPress()}
                noMargin
              />
              <Button 
                title="Sim, excluir" 
                onPress={()=>deleteMeal(mealToDelete)}
                noMargin
              /> 
            </DividerContainer>
        </Dialog>
      </Container>
    </Modal>
  )

}