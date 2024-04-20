import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet,Image,Dimensions,ScrollView,TouchableOpacity,ActivityIndicator } from 'react-native';
import axios from 'axios';
import {fetchMovie} from "react-native-movies-sdk";
import { connect } from "react-redux";
import {GetMoviesAction} from "../store/actions/GetMoviesAction"
import { images } from '../resources/images';

interface Movie {
  title: string;
  year: string;
  //imdbID: string;
  poster: string;
  type: string;
}

const HomeScreen: React.FC = (props) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);
  const {width,height} = Dimensions.get("window");
  const [isLoading,setLoading] = useState(true);

  useEffect(() => {
    console.log(props);
    props.getMovie("Jawan");
  }, []);
  useEffect(() => {
    setLoading(false);
  }, [props?.mainState?.MoviesResponse?.movies]);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={searchQuery}
        onChangeText={(val)=>{
          setSearchQuery(val);
          setLoading(true);
          if(val==""){
            props.getMovie("Jawan");
          }
          else{
            props.getMovie(val);
          }
          
        }}
        placeholder="Search movies..."
        placeholderTextColor="white"
      />
      {/* <Button color="black"  title="Search" onPress={fetchMovies} /> */}
      {/* <TouchableOpacity style={{
        justifyContent:'center',
        alignItems:'center',
        overflow:'hidden',
        padding:10,
        //borderRadius:10,
        elevation:10,
      }}>
        <View style={{width:width,height:width/2,backgroundColor:'white',opacity:0.1,position:'absolute'}}>
          </View>
        <Text style={{color:'white',fontWeight:'bold'}}>Search</Text>
        </TouchableOpacity> */}
      {isLoading ? <ActivityIndicator ></ActivityIndicator>:
      props?.mainState?.MoviesResponse?.movies.length > 0 ?
      <FlatList
      columnWrapperStyle={{justifyContent:'space-between'}}
      contentContainerStyle={{justifyContent:'space-between'}}
      numColumns={2}
       keyExtractor={(item, index) => index.toString()}
        data={props?.mainState?.MoviesResponse?.movies||[]}
        renderItem={({ item }) => (
          <TouchableOpacity style={[styles.movieContainer,{width:width/2.3}]} onPress={()=>{
            props?.navigation.navigate("DetailScreen",{item});
          }}>
            <View style={{width:width/2,height:width/2,backgroundColor:'grey',position:'absolute',opacity:0.4}}></View>
            {item.poster=="N/A"?<Image source={images.altImage} style={{width:width/3,height:width/3}}></Image>:<Image source={{uri: item.poster}} style={{width:width/3,height:width/3}}></Image>}
            <Text style={{textAlign:'center',color:'white'}} numberOfLines={2}>{item.title} ({item.year})</Text>
            {/* <Text>{item.poster}</Text> */}
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.title}
      />:
      <View style={{justifyContent:'center',alignItems:'center'}}>
          <Text style={{color:'white'}}>No Movie Found!</Text>
      </View>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
    //justifyContent:'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    color:'white',
  },
  movieContainer: {
    marginBottom: 10,
    marginTop: 10,
    //backgroundColor:'black',
    overflow:"hidden",
    justifyContent:'center',
    alignItems:'center',
    padding:10,
    borderRadius:10,
    elevation:10,
  },
});

const mapStateToProps = (state:any) => ({
  mainState: state,
});

const mapDispatchToProps = (dispatch:any) => ({
  getMovie: (val:string) => {
    dispatch(GetMoviesAction(val));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
