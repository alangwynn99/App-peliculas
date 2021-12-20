import React, { useEffect, useState } from 'react'
import { Text, View, FlatList, ActivityIndicator, Image, Button, TextInput, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { peliculasApi } from '../api/peliculasApi'
import { ButtonSr } from '../components/ButtonSr'
import { PeliculasCard } from '../components/PeliculasCard'
import { peliculaBusqueda } from '../hooks/peliculaBusqueda'
import { peliculasPaginated } from '../hooks/peliculasPaginated'
import { PeliculaFull, SimplePelicula } from '../models/peliculasModels'
import { style } from '../theme/appTheme'

export const Home = () => {

    let { peliculasList, loadPeliculas } = peliculasPaginated();
    const [name, setName] = useState('');
    const [year, setYear] = useState(' ');
    const [buscado, setBuscado] = useState(false);
        
    const handleClick = async () => {
        const resp = await peliculasApi.get<SimplePelicula[]>(`http://www.omdbapi.com/?t=${name}&y=${year}&plot=full&apikey=d713e8aa`);
        peliculasList = resp.data
        console.log(peliculasList)
        setBuscado(!buscado);
    }

    return (
        <>
            <View
                style={{
                    alignItems: 'center',
                    height: 760
                }}
            >

                <Text style={{
                    ...style.title,
                    ...style.globalMargin,
                    top: 0,
                    marginBottom: 0
                }}>Movies</Text>

                <TextInput
                    placeholder='Movie Name'
                    style={styles.input}
                    onChangeText={(val) => setName(val)}
                />

                <TextInput
                    placeholder='Year'
                    style={styles.inputMovie}
                    onChangeText={(val) => setYear(val)}
                />

                <TouchableOpacity onPress={() => handleClick()}>
                    <ButtonSr></ButtonSr>
                </TouchableOpacity>

                <FlatList
                    data={ peliculasList }
                    keyExtractor={ (pelicula) => pelicula.imdbID }
                    showsVerticalScrollIndicator={ false }
                    extraData={ !buscado }

                    renderItem={({ item }) => ( <PeliculasCard pelicula={item} ></PeliculasCard> )}
                />

                {/* {
                    peliculasList.map(pelicula => {
                        <PeliculasCard key={pelicula.imdbID} pelicula={pelicula}></PeliculasCard>
                    })
                } */}

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        margin: 5,
        width: 150,
        borderRadius: 12,
        height: 40,
        alignSelf: 'flex-start',
        marginLeft: 40
    },
    inputMovie: {
        borderWidth: 1,
        borderColor: '#777',
        margin: 5,
        borderRadius: 12,
        height: 40,
        alignSelf: 'flex-end',
        marginTop: -45,
        marginRight: 40,
        width: 150,
        marginBottom: 15
    },
    button: {
        borderRadius: 12,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#3C94EB',
        height: 50,
        marginBottom: 10,
        width: 325
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center'
    }
})