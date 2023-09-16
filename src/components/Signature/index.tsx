import * as FileSystem from 'expo-file-system'
import React, { useRef } from 'react'
import { ModalProps } from 'react-native'
import SignatureLib, { SignatureViewRef } from 'react-native-signature-canvas'
import Button from '../Button'
import {
  ButtonContainer,
  Container,
  Header,
  HeaderText,
  ModalContainer,
} from './styles'

type ISignatureProps = ModalProps & {
  onComplete: (signatureUri?: string) => void
}

const Signature: React.FC<ISignatureProps> = ({
  onComplete,

  ...rest
}) => {
  const ref = useRef<SignatureViewRef>()

  const handleOK = (signature) => {
    const path = FileSystem.cacheDirectory + `${Date.now()}-signature.png`
    FileSystem.writeAsStringAsync(
      path,
      signature.replace('data:image/png;base64,', ''),
      { encoding: FileSystem.EncodingType.Base64 },
    )
      .then(() => FileSystem.getInfoAsync(path))
      .then((value) => {
        onComplete(value.uri)
      })
      .catch(console.error)
  }

  const handleClear = () => {
    ref.current.clearSignature()
    onComplete('')
  }

  const handleConfirm = () => {
    ref.current.readSignature()
  }
  const handleEmpty = () => {
    onComplete('')
  }

  return (
    <ModalContainer {...rest}>
      <Container>
        <Header>
          <HeaderText>Assinatura do técnico</HeaderText>
        </Header>
        <SignatureLib ref={ref} onOK={handleOK} onEmpty={handleEmpty} rotated />
        <ButtonContainer>
          <Button title="Continuar" onPress={handleConfirm} />
          <Button title="Cancelar" type="cancel" onPress={handleClear} />
        </ButtonContainer>
      </Container>
    </ModalContainer>
  )
}

export default Signature
