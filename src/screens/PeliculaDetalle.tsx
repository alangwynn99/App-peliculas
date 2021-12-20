import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { PeliculaDetails } from '../components/PeliculaDetails'
import { peliculaDetalle } from '../hooks/peliculaDetalle'
import { RootStackParams } from '../navigator/Navigatos'

interface Props extends StackScreenProps<RootStackParams, 'PeliculaDetalle'> {};

export const PeliculaDetalle = ({ navigation, route }: Props) => {
    
    const { pelicula } = route.params;
    const { imdbID } = pelicula;

    const {isLoading, peliculaFull} = peliculaDetalle(imdbID)
    
    return (
        <View style={{backgroundColor: '#355E82', flex: 1}}>

            <View style={{
                ...styles.headerContainer,
            }}>

            <Image
                style={styles.peliculaImg}
                source={{uri: pelicula.Poster}}
            />

            {
                isLoading ? (
                    <ActivityIndicator
                        color='grey'
                        size={ 50 }
                        style={{marginTop: 100}}
                    />
                )
                : <PeliculaDetails pelicula={peliculaFull} />
            }
                
            </View>

        </View>
        
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        height: 800,
        zIndex: 999,
        alignItems: 'center',
    },
    peliculaImg: {
        width: 412,
        height: 430,
        marginBottom: -20,
        alignSelf: 'stretch',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
})