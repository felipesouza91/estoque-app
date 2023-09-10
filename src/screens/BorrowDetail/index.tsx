import React from 'react'
import { CardDetails } from '../../components/CardDetails'
import HeaderTitle from '../../components/HeaderTitle'
import { ImageList } from '../../components/ImageList'
import {
  ButtonWrapper,
  Container,
  Content,
  Icon,
  StatusTag,
  Title,
} from './styles'
const BorrowDetail: React.FC = () => {
  const isOpen = true
  return (
    <Container>
      <HeaderTitle title="Editar Saida" />
      <StatusTag>
        <Icon isOpen={isOpen} name={isOpen ? 'checkmark' : 'checkmark-done'} />
        <Title isOpen={isOpen}>{isOpen ? 'em andamento' : 'concluido'}</Title>
      </StatusTag>
      <Content>
        <CardDetails
          title="Entrega"
          iconName="laptop"
          data={{ description: 'PENDRIVE DE 16BG' }}
        />
        <CardDetails
          title="Descrição"
          iconName="file-o"
          data={{
            description: 'file',
            footer: 'Entregue em 20/10/2023',
          }}
        />
        {!isOpen && (
          <>
            <CardDetails
              title="Conclusão"
              iconName="check-circle"
              data={{
                description: '',
                footer: 'Finalizado em 20/10/2023',
              }}
            />
            <CardDetails title="Imagens" iconName="camera">
              <ImageList
                data={[
                  'https://github.com/felipesouza91.png',
                  'https://github.com/felipesouza91.png',
                ]}
              />
            </CardDetails>
          </>
        )}
        {isOpen && <ButtonWrapper title="Finalizar" />}
      </Content>
    </Container>
  )
}

export { BorrowDetail }
