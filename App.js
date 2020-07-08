import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import AsyncStorage from '@react-native-community/async-storage';

const Page = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;
const Input = styled.TextInput`
  font-size: 15px;
  border: 1px solid #000;
  height: 50px;
  width: 90%;
  padding: 10px;
`;

const Save = styled.Button``;

const NameArea = styled.View`
  padding: 20px;
  background-color: #ccc;
  width: 100%;
`;

const Nome = styled.Text`
  font-size: 18px;
`;

export default () => {
  const [name, setName] = useState('');
  const [newName, setNewName] = useState('');

  const handleSave = async () => {
    if (newName !== '') {
      await AsyncStorage.setItem('@nome', newName);
      setName(newName);
      setNewName('');
    }
  };

  const getName = async () => {
    const n = await AsyncStorage.getItem('@nome');
    setName(n);
  };

  useEffect(() => {
    getName();
  }, []);

  return (
    <Page>
      <Input
        placeholder="Qual seu nome?"
        value={newName}
        onChangeText={(e) => setNewName(e)}
      />
      <Save title="save" onPress={handleSave} />

      <NameArea>
        <Nome>{name}</Nome>
      </NameArea>
    </Page>
  );
};
