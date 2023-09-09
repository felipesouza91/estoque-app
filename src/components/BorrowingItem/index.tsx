import React from 'react'
import {
  Border,
  Container,
  Content,
  DateText,
  FinishIcon,
  Rounded,
  StatusIcon,
  TimeContainer,
  TimeIcon,
  Title,
} from './styles'
const BorrowingItem: React.FC = () => {
  const isFinish = true
  return (
    <Container>
      <Border isFinish={isFinish} />
      <Content>
        <Title>Casa do Felipe Souza</Title>
        <TimeContainer>
          <TimeIcon name="hourglass-top" size={18} />
          <DateText>20/01/22 para João</DateText>
        </TimeContainer>
        {isFinish && (
          <TimeContainer>
            <TimeIcon name="hourglass-full" size={18} />
            <DateText>20/01/22 por Felipe</DateText>
          </TimeContainer>
        )}
      </Content>
      <Rounded>
        {isFinish ? (
          <FinishIcon name="checkmark-done" />
        ) : (
          <StatusIcon name="checkmark" size={24} />
        )}
      </Rounded>
    </Container>
  )
}

export { BorrowingItem }
