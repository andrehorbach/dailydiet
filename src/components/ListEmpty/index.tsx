import { Container, CookingIcon, Message, MessageTitle } from "./styles";

type Props = {
  messageTitle: string,
  message: string,
}

export function ListEmpty({ messageTitle, message }: Props) {
  return (
    <Container>
      <CookingIcon />
      <MessageTitle>
        {messageTitle}
      </MessageTitle>
      <Message>
        {message}
      </Message>
    </Container>
  )
}