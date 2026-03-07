import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Login() {
  return (
    <View style={styles.container}>

      <Image
        source={require("./../../assets/login.png")}
        style={styles.image}
      />

      <Text style={styles.title}>Log In to Your Account</Text>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={20} color="#888" />
        <TextInput
          placeholder="Email Address"
          style={styles.input}
        />
      </View>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={20} color="#888" />
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
        />
      </View>

      {/* Login Button */}
      <TouchableOpacity style={styles.button}>
        <Ionicons name="log-in-outline" size={20} color="#fff" />
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Signup Link */}
      <View style={styles.footer}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.link}>Sign Up</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 30,
    justifyContent: "center",
    backgroundColor: "#e9e9e9",
  },

  image: {
    width: "70%",
    height: 150,
    alignSelf: "center",
    marginBottom: 20,
    resizeMode: "contain"
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F3F3",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    gap: 10
  },

  input: {
    flex: 1,
  },

  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4f65bd",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    gap: 8
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },


  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 25,
  },

  link: {
    color: "#4A6CF7",
    fontWeight: "bold",
  }
});