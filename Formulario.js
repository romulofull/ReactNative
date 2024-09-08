import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [mensajeEstado, setMensajeEstado] = useState('');

  const manejarEnvio = async () => {
    try {
      await axios.post('http://localhost:5000/api/interesados', {
        nombre,
        telefono,
        correo,
        mensaje
      });
      setMensajeEstado('Datos enviados correctamente');
      setNombre('');
      setTelefono('');
      setCorreo('');
      setMensaje('');
    } catch (error) {
      setMensajeEstado(`Error al enviar los datos: ${error.response?.data?.mensaje || error.message}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formulario de Contacto</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Teléfono (opcional)"
        value={telefono}
        onChangeText={setTelefono}
      />
      <TextInput
        style={styles.input}
        placeholder="Correo Electrónico"
        value={correo}
        onChangeText={setCorreo}
      />
      <TextInput
        style={styles.textarea}
        placeholder="Mensaje"
        value={mensaje}
        onChangeText={setMensaje}
        multiline
      />
      <Button title="Enviar" onPress={manejarEnvio} />
      {mensajeEstado ? (
        <Text style={[styles.statusMessage, mensajeEstado.startsWith('Error') ? styles.error : styles.success]}>
          {mensajeEstado}
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
  textarea: {
    height: 80,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
  statusMessage: {
    marginTop: 10,
    fontSize: 16,
  },
  error: {
    color: 'red',
  },
  success: {
    color: 'green',
  },
});

export default Formulario;
