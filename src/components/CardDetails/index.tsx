import { FontAwesome } from '@expo/vector-icons'
import type { Icon as Icon_ } from '@expo/vector-icons/build/createIconSet'
import React, { ReactNode } from 'react'
import {
  Container,
  Description,
  Footer,
  FooterText,
  Icon,
  Row,
  Title,
} from './styles'

interface DescriptionData {
  description: string
  footer?: string
}

interface ICardDetailsService {
  iconName: typeof FontAwesome extends Icon_<infer Type, string> ? Type : never
  data?: DescriptionData
  title: string
  children?: ReactNode
}

const CardDetails: React.FC<ICardDetailsService> = ({
  iconName,
  title,
  data,
  children,
}) => {
  return (
    <Container>
      <Row>
        <Icon name={iconName} />
        <Title>{title}</Title>
      </Row>
      {data && <Description>{data.description}</Description>}
      {children}
      {data && !!data.footer && (
        <Footer>
          <FooterText>{data.footer}</FooterText>
        </Footer>
      )}
    </Container>
  )
}

export { CardDetails }
