import {View, Text, StyleSheet} from 'react-native';
import ProjectDetail from './src/screens/ProjectDetailsScreen/Index';

const App = () => {
  
  return(
    //Aqui se llaman todos los componentes a mostrar
    <View style={styles.container}>
      <ProjectDetail/>
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

export default App;