import React from "react";
import { View, StyleSheet, Text, TextInput} from "react-native";
import { Ionicons } from '@expo/vector-icons';


export default function Senha({ label, placeholder, value, onChangeText}){
    return (   
        <View>
            <Text style={styles.texto}>{label}</Text>
            <View style={styles.inputSenha}>
                <TextInput 
                    style={styles.input} 
                    placeholder={placeholder} 
                    placeholderTextColor='#918f8f'
                    secureTextEntry 
                    value={value}
                    onChangeText={onChangeText}
                />
                <Ionicons name="eye-outline" size={20} color='#000'></Ionicons>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({

    texto: {
        fontSize: 14,
        marginBottom: 5,
    },
    inputSenha: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ececec',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 16,
    },
    input: {
        flex: 1,
        paddingVertical: 16,
        fontSize: 14,
    }
})

