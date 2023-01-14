import React, { useState } from "react";
import {
  Text,
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { appStyles as styles } from "./styles";

function App() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTasksPress = () => {
    setTasks([...tasks, text]);
    setText("");
  };

  const handleDeleteTaskPress = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index,1);
    setTasks(newTasks);
  }
  console.log(tasks);
  return (
    <SafeAreaView style={{ marginTop: 35, flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>My tasks</Text>
        <Text style={styles.subtitle}>enter your task in the text</Text>
        <TextInput
          style={styles.input}
          placeholder="enter your task here"
          value={text}
          onChangeText={setText}
        ></TextInput>
        <TouchableOpacity
          onPress={handleAddTasksPress}
          style={styles.buttonContainer}
        >
          <Text style={styles.buttonText}>app Add</Text>
        </TouchableOpacity>

        <FlatList
          data={tasks}
          renderItem={({ item,index }) => (
            <View style={styles.taskContainer}>
              <Text style={styles.taskText}>{item}</Text>
              <TouchableOpacity style={styles.taskDelete} onPress={()=>handleDeleteTaskPress(index)}>
                <Text style={styles.taskDeleteText}>x</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item)=>item + Date.now()+Math.random()}
        />
      </View>
    </SafeAreaView>
  );
}

export default App;
