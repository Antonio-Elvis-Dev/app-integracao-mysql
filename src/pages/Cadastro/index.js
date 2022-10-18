import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";

import config from "../../../config/config.json";

export default function Cadastro({ navigation }) {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  async function registerUser()
{
    let reqs = await fetch(config.urlRootNode+'create',{
        method: 'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            nameUser: user,
            passwordUser: password,
            emailUser: email
        })
    });
    let ress=await reqs.json();
    setMessage(ress);
}
  

  
  return (
    <View style={styles.container}>
      <View style={styles.areaForm}>

        <TextInput
          style={styles.form}
          placeholder="Nome"
          onChangeText={(text) => setUser(text)}
          value={user}
        />

        <TextInput
          style={styles.form}
          placeholder="E-mail"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />

        <TextInput
          style={styles.form}
          placeholder="Senha"
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
      </View>

      <View style={{ flexDirection: "row", justifyContent: "center" }}>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>Voltar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={registerUser}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  button: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#c09999",
    marginLeft: 10,
    marginRight: 10,
  },
  areaForm: {
    marginBottom: 20,
    marginHorizontal: 50,
  },
  form: {
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
  },
});
