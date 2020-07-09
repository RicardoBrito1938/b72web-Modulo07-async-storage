import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Modal} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const Page = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: #eee;
  justify-content: center;
`;

const Botao = styled.Button`
  align-self: center;
`;

const Box = styled.View`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

const BoxBody = styled.View`
  width: 90%;
  height: 200px;
  background-color: #fff;
  border-radius: 10px;
`;

export default () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Page>
      <Botao title="Mostrar modal" onPress={() => setModalVisible(true)} />

      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={false}
        onRequestClose={() => setModalVisible(false)}>
        <Box>
          <BoxBody>
            <Botao
              title="Fechar modal"
              onPress={() => setModalVisible(false)}
            />
          </BoxBody>
        </Box>
      </Modal>
    </Page>
  );
};
