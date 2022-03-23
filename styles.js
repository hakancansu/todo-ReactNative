import { StyleSheet } from "react-native";
export const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 30,
  },
  subtitle: {
    fontSize: 20,
    marginTop: 4,
    color: "#666",
  },
  input: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#ddd",
    fontSize: 10,
  },
  buttonContainer: {
    backgroundColor: "lightgreen",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 6,
    alignSelf: "flex-end",
    marginTop: 8,
  },
  buttonText: {
    fontSize: 18,
  },
  divider: {
      height:1,
      backgroundColor:"#ddd",
      marginVertical:32,
  },
  
  taskContainer: {
      flexDirection:"row",
      justifyContent:"space-between",
      marginBottom:8,
      borderBottomWidth:1,
      borderColor:"#ddd",

  },
  taskText:{
      fontSize:18,
  },
  taskDelete:{
    backgroundColor:"red",
    width:24,
    height:24,
    borderRadius:12,
    justifyContent:"center",
    alignItems:"center",
    
  },
  taskDeleteText:{
    fontSize:18,
    color:"white",
  },
});
