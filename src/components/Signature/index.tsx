import * as FileSystem from 'expo-file-system'
import React, { useRef } from 'react'
import SignatureLib, { SignatureViewRef } from 'react-native-signature-canvas'

import Button from '../Button'
import { ButtonContainer, Container } from './styles'

const Signature: React.FC = () => {
  const ref = useRef<SignatureViewRef>()

  const handleOK = (signature) => {
    const path = FileSystem.cacheDirectory + `${Date.now()}-signature.png`
    FileSystem.writeAsStringAsync(
      path,
      signature.replace('data:image/png;base64,', ''),
      { encoding: FileSystem.EncodingType.Base64 },
    )
      .then(() => FileSystem.getInfoAsync(path))
      .then(console.log)
      .catch(console.error)
  }

  const handleClear = () => {
    ref.current.clearSignature()
  }

  const handleConfirm = () => {
    ref.current.readSignature()
  }
  const handleEmpty = () => {
    console.log('Empty')
  }

  return (
    <Container>
      <SignatureLib ref={ref} onOK={handleOK} onEmpty={handleEmpty} rotated />
      {
        <ButtonContainer>
          <Button title="Salvar" onPress={handleConfirm} />
          <Button title="Cancelar" type="cancel" onPress={handleClear} />
        </ButtonContainer>
      }
    </Container>
  )
}

export default Signature
