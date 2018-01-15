import {
    Menu,
    MenuProvider,
    MenuOptions,
    MenuOption,
    MenuTrigger,
    renderers,
  } from 'react-native-popup-menu';
  import { 
      Text, 
      View, 
      StyleSheet, 
      ToastAndroid, 
      TouchableOpacity,
      Image,
      ActivityIndicator,
    } from 'react-native';
  import React, { Component } from 'react';

  import Icon from 'react-native-vector-icons/dist/FontAwesome';
  
  const { Popover } = renderers

  function t (){
    ToastAndroid.show("AaAa",ToastAndroid.SHORT)
  }
  
  
export default class PopoverExample extends Component {
    constructor(){
        super()
        this.state ={
            indice: "nenhum",
        }
    }
    render(){

        return(
            <MenuProvider style={styles.container} customStyles={{ backdrop: styles.backdrop }}>
                
                <Text style={styles.contentText}>{this.state.indice}</Text>
            
            
            
            <View style={styles.row}>
                <Menu renderer={Popover} rendererProps={{ preferredPlacement: 'bottom' }}>
                    <MenuTrigger style={styles.menuTrigger} >
                        <Icon name="ellipsis-v" size={30} color="#900" />
                    </MenuTrigger>
                    <MenuOptions style={styles.menuOptions}>
                        <TouchableOpacity onPress={ () => this.setState({indice: 'Indice um'})}>
                            <Text style={styles.contentText}>Opção 1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={ () => this.setState({indice: 'Indice dois'})}>
                            <Text style={styles.contentText}>Opção 2</Text>
                        </TouchableOpacity>
                    </MenuOptions>
                </Menu>
            </View>



        
            <Menu>
                <MenuTrigger style={styles.menuTrigger} >
                    <Icon name="ellipsis-v" size={30} color="#009" />
                </MenuTrigger>
                <MenuOptions style={styles.menuOptions}>
                    <MenuOption onSelect={() => this.setState({indice: 'Indice um'})} text="Opção 1" />
                    <MenuOption onSelect={() => this.setState({indice: 'Indice dois'})} text='Opção 2' />
                </MenuOptions>
            </Menu>



            <Menu renderer={Popover} rendererProps={{ preferredPlacement: 'bottom' }}>
                <MenuTrigger style={styles.menuTrigger} >
                    <Icon name="ellipsis-v" size={30} color="#090" />
                </MenuTrigger>
                <MenuOptions style={styles.menuOptions}>
                    <MenuOption onSelect={() => this.setState({indice: 'Indice um'})} text="Opção 1"/>
                    <MenuOption onSelect={() => this.setState({indice: 'Indice dois'})} text='Opção 2' />
                </MenuOptions>
            </Menu>

            <View style={{backgroundColor: 'red',alignItems: 'center',justifyContent: 'center'}}>
                <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
                    style={{width: 100, height: 100}} />
                <ActivityIndicator size={70} color="#ff8800" 
                    style={{position: 'absolute', width: '100%', height: '100%', backgroundColor: 'rgba(255, 255, 255, .75)'}}/>
            </View>
               
            
            </MenuProvider>
        )
    }
}
    

  
  const styles = StyleSheet.create({
    container: {
      padding: 10,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.05)',
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    backdrop: {
    },
    menuOptions: {
      padding: 10,
      paddingHorizontal: 30,
    },
    menuTrigger: {
      padding: 5,
    },
    contentText: {
      fontSize: 18,
    },
  })
