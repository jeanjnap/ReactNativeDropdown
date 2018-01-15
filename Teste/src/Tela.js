import React, { Component, PropTypes } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ToastAndroid,
  AsyncStorage,
  findNodeHandle,
  TouchableOpacity,
  NativeModules,
  Image,
} from 'react-native';

const UIManager = NativeModules.UIManager;
const  labels= ["Opção 1","Opção 2","Opção 3"];
import Icon from 'react-native-vector-icons/MaterialIcons'

const ICON_SIZE = 24

export default class App extends Component {
    static propTypes = {
        // array of strings, will be list items of Menu
        //actions:  PropTypes.arrayOf(PropTypes.string).isRequired,
        //onPress: PropTypes.func.isRequired
      }

    constructor(){
        super();
        this.state = {
            indice: "nenhum",
            icon: null,
        }
    }

    //onSelect={value => this.setState({option: value})}

    onSelect (value){
        this.setState({indice: value})
    }

    onMenuPressed = (labels) => {
        const { onPress } = this.props;
    
        UIManager.showPopupMenu(
          findNodeHandle(this.menu),
          labels,
          () => {},
          (result, index) => {
            if (onPress) {
              onPress({ action: 'menu', result, index });
            }
          },
        );
      };

  render() {
    return (

      
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>

        <View>
            <View ref={c => this.menu = c}
                style={{
                backgroundColor: 'transparent',
                marginTop: 20,
                marginLeft:20,
                height: StyleSheet.hairlineWidt
                }}
            />
            <TouchableOpacity 
                onPress={() => this.onMenuPressed(labels)}
                style={{position: 'absolute'}}>
                <Image
                    style={{width: 20, height: 20 }}
                    source={{uri: 'http://www.swiftspaceinc.com/wp-content/uploads/2014/04/scrollDown.png'}}
                />
            </TouchableOpacity>
        </View>


        <Text>{this.state.indice}</Text>
        
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
