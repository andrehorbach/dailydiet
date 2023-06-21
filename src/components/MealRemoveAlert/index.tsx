import { Modal } from "react-native";
import { Container, Dialog, Title, DividerContainer } from "./styles"
import { Button } from "@components/Button"

export function MealRemoveAlert() {

  return(
    <Modal visible >
      <Container>
        <Dialog>
          <Title>Deseja realmente excluir o registro da refeição?</Title>
            <DividerContainer>
            <Button 
                title="Sim" 
                type="PRIMARY"
                noMargin
              />
              <Button 
                title="Não" 
                type="SECONDARY"
                noMargin
              /> 
            </DividerContainer>
        </Dialog>
      </Container>
    </Modal>
  )

}