import React, {useState} from "react";
import { View, Text, StyleSheet, TextInput,TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
    const navigation = useNavigation();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    
    const handleLogin = () =>{
        if (username.length > 10) {
            setError("El ususario no debe superar los 10 caracteres.");
            return;
        }
        if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
            setError("La contraseña debe tener al menos 8 caracteres, una mayuscula, un numero y un caracter especial.");
            return;
        }
        setError("");
        alert("Inicio de sesion exitoso");
    };

    return (
        <View style={styles.container}>
             <Text style={styles.title}>Iniciar Sesion</Text>
             <TextInput style={styles.input} placeholder="Usuario" value={username} onChangeText={setUsername} maxLength={10}/>
             <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry value={password} onChangeText={setPassword}/>
             {error ? < Text style={styles.error}>error</Text> : null}
             <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Entrar</Text>
             </TouchableOpacity>
             <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text style={styles.link}>¡No tienes cuenta? Registrate</Text>
             </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f8f9fa"},
    title: {fontSize: 22, fontWeight: "bold", marginBottom: 20},
    input: { width: "80%", padding: 10, borderWidth: 1, borderColor: "#ccc", borderRadius: 5, marginBottom: 10},
    button: { backgroundColor: "#007bff" ,padding: 12, borderRadius: 8, width: "80%", alignItems: "center" },
    buttonText: { color: "#fff", fontWeight:"bold"},
    link: { marginTop: 10, color: "#007bff"},
    error: { color: "red", marginBottom: 10},
});

export default LoginScreen