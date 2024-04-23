import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AdicionarItemScreen = () => {
  const [nomeProduto, setNomeProduto] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [estoque, setEstoque] = useState('');

  const navigation = useNavigation();

  const adicionarItem = () => {
    const novoItem = {
      NomeProduto: nomeProduto,
      Descricao: descricao,
      Preco: preco,
      Estoque: estoque,
    };
    console.log('Novo item:', novoItem);
    // Aqui você pode enviar o novo item para um servidor, armazená-lo em um estado global, etc.
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome do produto"
        value={nomeProduto}
        onChangeText={(text) => setNomeProduto(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={descricao}
        onChangeText={(text) => setDescricao(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Preço"
        value={preco}
        onChangeText={(text) => setPreco(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Estoque"
        value={estoque}
        onChangeText={(text) => setEstoque(text)}
      />
      <Button title="Adicionar Item" onPress={adicionarItem} />
      <View style={styles.buttonContainer}>
      <Button title="Voltar" onPress={() => navigation.goBack()}/>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    height: 40,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  buttonContainer: {
    marginTop: 10,
  }
});

export default AdicionarItemScreen;
