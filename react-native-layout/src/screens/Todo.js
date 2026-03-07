import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function TodoScreen() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [search, setSearch] = useState("");

  const addTodo = () => {
    if (task.trim() === "") return;

    const newTodo = {
      id: Date.now().toString(),
      text: task,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setTask("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(search.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <View style={styles.todoCard}>
      <TouchableOpacity onPress={() => toggleTodo(item.id)}>
        <Ionicons
          name={item.completed ? "checkbox" : "square-outline"}
          size={24}
          color="#4F46E5"
        />
      </TouchableOpacity>

      <Text
        style={[
          styles.todoText,
          item.completed && styles.completedText,
        ]}
      >
        {item.text}
      </Text>

      <TouchableOpacity onPress={() => deleteTodo(item.id)}>
        <Ionicons name="trash-outline" size={22} color="#EF4444" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>

      <Text style={styles.title}>My Todo List</Text>

      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color="#999" />
        <TextInput
          placeholder="Search tasks..."
          style={styles.searchInput}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <FlatList
        data={filteredTodos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.addContainer}>
        <TextInput
          placeholder="Enter a new task..."
          style={styles.input}
          value={task}
          onChangeText={setTask}
        />

        <TouchableOpacity style={styles.addButton} onPress={addTodo}>
          <Ionicons name="add" size={26} color="white" />
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
    paddingTop: 60,
    paddingHorizontal: 30,
  },

  title: {
    fontSize: 30,
    fontWeight: "800",
    marginBottom: 20,
    color: "#111827",
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 40,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  searchInput: {
    marginLeft: 8,
    flex: 1,
  },

  todoCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e9dfea",
    padding: 20,
    borderRadius: 16,
    marginBottom: 10,

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },

    elevation: 2,
  },

  todoText: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: "#111827",
  },

  completedText: {
    textDecorationLine: "line-through",
    color: "#9CA3AF",
  },

  addContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },

  input: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 14,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  addButton: {
    marginLeft: 10,
    backgroundColor: "#8d89e0",
    padding: 12,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

});