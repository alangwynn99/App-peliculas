import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { PeliculaFull } from '../models/peliculasModels'

interface Props {
    pelicula: PeliculaFull;
}

export const PeliculaDetails = ({ pelicula }: Props) => {
    return (
        <ScrollView
        showsVerticalScrollIndicator={false}
            style={{
                ...StyleSheet.absoluteFillObject
            }}
        >

            <View style={{
                marginTop: 420
            }}>

            </View>
            
            <Text
                style={{
                    ...styles.peliculaName,
                    marginTop: 20
                }}
            >
                { pelicula.Title }
            </Text>
            <Text
                style={styles.peliculaLanzamiento}
            >
                {'Lanzamiento: '+pelicula.Year}
                {'\nRating: '+pelicula.imdbRating}
                {'\nDirector: '+pelicula.Director}
                {'\nActors: '+pelicula.Actors}
                {'\n'+pelicula.Plot}
            </Text>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    peliculaLanzamiento: {
        fontSize: 16,
        color: 'white',
        alignSelf: 'flex-start',
        marginLeft: 10
    },
    peliculaName: {
        color: 'white',
        fontSize: 30,
        alignSelf: 'flex-start',
        marginLeft: 10
    },
    peliculaImg: {
        width: 412,
        height: 430,
        marginBottom: -20,
        alignSelf: 'stretch',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    container: {
        marginHorizontal: 20
    }
})