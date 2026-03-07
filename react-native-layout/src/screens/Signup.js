import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Signup() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Create Your Account</Text>

      {/* Full Name */}
      <View style={styles.inputContainer}>
        <Ionicons name="person-outline" size={20} color="#888" />
        <TextInput
          placeholder="Full Name"
          style={styles.input}
        />
      </View>

      {/* Email */}
      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={20} color="#888" />
        <TextInput
          placeholder="Email Address"
          style={styles.input}
        />
      </View>

      {/* Password */}
      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={20} color="#888" />
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
        />
      </View>

      {/* Signup Button */}
      <TouchableOpacity style={styles.button}>
        <Ionicons name="person-add-outline" size={20} color="#fff" />
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Login Link */}
      <View style={styles.footer}>
        <Text>Already have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.link}>Log In</Text>
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
    backgroundColor: "#e7d9ee",
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 50,
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
    backgroundColor: "#894995",
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
    color: "#721c81",
    fontWeight: "bold",
  }

});