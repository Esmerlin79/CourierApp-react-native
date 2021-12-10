import React, { useContext, useEffect } from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { Alert, ImageBackground, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

import HeaderLogo from '../components/HeaderLogo';
import useForm from '../hooks/useForm';
import { AuthContext } from '../context/AuthContext';
import LoadingModal from '../components/LoadingModal';


interface Props extends StackScreenProps<any, any>{}

const LoginScreen = ({ navigation }: Props) => {

    const { isLoading, authenticated, errorMessage, signIn, resetError, addErrorMessage } = useContext(AuthContext);
    
    const { username, password, onChange, resetForm } = useForm({
        username: '',
        password: ''
    });

    useEffect(() => {
       if( errorMessage.length > 0 ) {
           Alert.alert('Demo Courier', errorMessage,[ { text: 'ok', onPress: resetError } ]);
       }

    }, [errorMessage])

    useEffect(() => {
        authenticated && navigation.replace('TabsNavigator');
    }, [authenticated])

    const handleLogin = () => {
        if( username.trim() === '' || password.trim() === '') 
                return addErrorMessage('Please type username and password');
        
        if(/[^a-zA-Z0-0]/.test(username) || /[^a-zA-Z0-0]/.test(password)) 
                return addErrorMessage('Special character are not allowed');

        signIn(username, password);
        resetForm();
    }

    return (
        <ImageBackground 
            source={ require('../assets/gradient_blue_lightblue.png') }
            style={{ flex: 1 }}
        >   
                <LoadingModal isLoading={ isLoading } />
                
                <KeyboardAvoidingView 
                    style={ styles.container }
                    behavior={ Platform.OS === 'ios' ? 'padding' : 'height'}
                > 
                
                    <HeaderLogo />

                    <View style={ styles.containerInput }>
                        <View style={{ marginHorizontal: 20,  }}>
                            <Text style={ styles.labelInput }>Usuario</Text>
                            <TextInput 
                                placeholder='Usuario'
                                style={ styles.input }
                                placeholderTextColor="#E4E3E6"
                                value={ username }
                                onChangeText={ (value) => onChange(value, 'username') }
                                autoCorrect={false}
                                autoCapitalize='none'
                                onSubmitEditing={handleLogin}
                                
                            />
                        </View>

                        <View style={{ marginHorizontal: 20,  }}>
                            <Text style={ styles.labelInput }>Password</Text>
                            <TextInput 
                                placeholder='Usuario'
                                style={ styles.input }
                                placeholderTextColor="#E4E3E6"
                                value={password}
                                onChangeText={ (value) => onChange(value, 'password') }
                                secureTextEntry={true}
                                autoCorrect={false}
                                onSubmitEditing={handleLogin}
                            />
                        </View>

                        <View style={{ marginHorizontal: 20, }}>
                            <TouchableOpacity 
                                    style={{ alignSelf: 'flex-end' }}
                                    activeOpacity={ 0.8 }
                                >
                                <Text style={{ fontSize: 16, color: '#3579AF' }}>Recuperar Password</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <TouchableOpacity
                        activeOpacity={ 0.8 }
                        style={ styles.button }
                        onPress={handleLogin}
                    >
                        <Text style={ styles.titleButton }>ingresar</Text>
                    </TouchableOpacity>
                    
            </KeyboardAvoidingView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerInput: {
        justifyContent:'space-evenly',
        backgroundColor: 'white',
        width: 350,
        height: 260,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    labelInput: {
        fontSize: 18,
        color: '#000',
        marginBottom: 10
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#E4E3E6',
        paddingVertical: 2,
        paddingHorizontal: 8,
        fontSize: 16,
    },
    button: {
        marginTop: 20,
        paddingHorizontal: 50,
        paddingVertical: 15,
        backgroundColor: '#01579B',
        alignSelf: 'flex-end',
        right: 20,
    },
    titleButton: {
        fontSize: 16,
        color: 'white',
    }
});

export default LoginScreen
