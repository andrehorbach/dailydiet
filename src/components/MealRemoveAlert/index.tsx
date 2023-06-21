import { Modal } from "react-native";
import { Container, Dialog, Title, DividerContainer } from "./styles"
import { Button } from "@components/Button"

type Props = {
  visible: boolean;
  onPress: Function;
}

export function MealRemoveAlert({ visible, onPress } : Props) {

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
                noMargin
              /> 
            </DividerContainer>
        </Dialog>
      </Container>
    </Modal>
  )

}