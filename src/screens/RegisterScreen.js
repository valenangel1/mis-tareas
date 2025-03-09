import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
    const navigation = useNavigation();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handlerRegister = () => {
        if (username.length > 10){
            setError("El usuario no debe superar los 10 caracteres.");
            return;
        }
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            setError("Correo electronico invalido.");
            return;
        }
        if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)){
            setError("La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un carácter especial.");
            return;
        }
        setError("");
        alert("Registro exitoso");
        navigation.navigate("Login")
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registro</Text>
            <TextInput style={styles.input} placeholder="Usuario" value={username} onChangeText={setUsername} maxLength={10}/>
            <TextInput style={styles.input} placeholder="Correo Electronico"keyboardType="email-address" value={email} onChangeText={setEmail}/>
            <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry value={password} onChangeText={setPassword}/>
            {error ? <Text style={styles.error}>{error}</Text> : null}
            <TouchableOpacity style={styles.button} onPress={handlerRegister}>
                <Text style={styles.buttonText}>Registrarse</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.link}>¿Ya tienes cuenta? Inicia sesion</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f8f9fa" },
    title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
    input: { width: "80%", padding: 10, borderWidth: 1, borderColor: "#ccc", borderRadius: 5, marginBottom: 10 },
    button: { backgroundColor: "#28a745", padding: 12, borderRadius: 8, width: "80%", alignItems: "center" },
    buttonText: { color: "#fff", fontWeight: "bold" },
    link: { marginTop: 10, color: "#007bff" },
    error: { color: "red", marginBottom: 10 },
});

export default RegisterScreen;