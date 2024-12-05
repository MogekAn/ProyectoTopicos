import React, { useState } from 'react';
import { Modal, View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function OpinionesModal() {
  const [modalVisible, setModalVisible] = useState(true);
  const [opiniones, setOpiniones] = useState([
    { id: '1', texto: 'Por allá nos vemos, para tomar unas buenas postales, saludos' },
    { id: '2', texto: 'MUCHAS GRACIAS AHORA SI NOS VAMOS A PODER PREPARAR CON ANTICIPACIÓN' },
  ]);
  const [nuevaOpinion, setNuevaOpinion] = useState('');

  const agregarOpinion = () => {
    if (nuevaOpinion.trim() !== '') {
      setOpiniones([...opiniones, { id: Date.now().toString(), texto: nuevaOpinion }]);
      setNuevaOpinion('');
    }
  };

  return (
    <Modal visible={modalVisible} transparent={true} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <View style={styles.header}>
          <Icon
                  name="chatbox-ellipses"
                  size={30}
                  color="gray"
                  style={styles.socialIcon}
                />
            <Text style={styles.title}> OPINIONES </Text>
          </View>

          <FlatList
            data={opiniones}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.opinionContainer}>
                <Icon
                  name="people-circle"
                  size={30}
                  color="gray"
                  style={styles.socialIcon}
                />
                <View style={styles.opinionTextContainer}>
                  <Text style={styles.opinionText}>{item.texto}</Text>
                  <Text style={styles.username}>Name</Text>
                </View>
              </View>
            )}
          />

          <TextInput
            style={styles.input}
            placeholder="Dar opinión como (nombre de usuario)"
            placeholderTextColor="#999"
            value={nuevaOpinion}
            onChangeText={setNuevaOpinion}
          />

          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => navigation.navigate('Home')} // Navega a HomeScreen
            >
              <Text style={styles.buttonText}>VOLVER AL INICIO</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.addButton} onPress={agregarOpinion}>
              <Text style={styles.buttonText}>AGREGAR OPINIÓN</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  opinionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  opinionTextContainer: {
    flex: 1,
  },
  opinionText: {
    fontSize: 14,
    color: '#333',
  },
  username: {
    fontSize: 12,
    color: '#999',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 20,
    fontSize: 14,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  closeButton: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 8,
  },
  addButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  socialIcon: {
    marginHorizontal: 10,
  },
});

export default OpinionesModal;
