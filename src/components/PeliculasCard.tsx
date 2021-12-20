import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native'
import { SimplePelicula } from '../models/peliculasModels'

const windowsWidth = Dimensions.get('window').width;

interface Props {
    pelicula: SimplePelicula;
}

export const PeliculasCard = ( {pelicula}: Props ) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            activeOpacity={ 0.9 }
            onPress={() => navigation.navigate('PeliculaDetalle' as never, { pelicula: pelicula } as never)}
        >
            <View style={{
                ...styles.cardContainer,
                width: windowsWidth * 0.8
            }}>
                <View>
                    <Image
                        style={ styles.peliculaImg }
                        source={{ uri: pelicula.Poster }}
                    />
                    <Text style={ styles.name }>
                        { pelicula.Title }
                        { '      \tLanzamiento: ' + pelicula.Year }
                        { '\nDescripcion: SCI-FI movie'}
                    </Text>
                </View>

            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        backgroundColor: 'grey',
        height: 270,
        width: 140,
        marginBottom: 25,
        borderRadius: 10,
    },
    name: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        top: 20,
        left: 10
    },
    peliculaImg: {
        width: 329,
        height: 180,
        marginBottom: -20,
        alignSelf: 'stretch',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    }
})