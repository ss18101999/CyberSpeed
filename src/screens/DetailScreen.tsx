import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet,Image,Dimensions,ScrollView,TouchableOpacity } from 'react-native';
import axios from 'axios';
import {fetchMovie} from "react-native-movies-sdk";
import { connect } from "react-redux";
import {GetMoviesAction} from "../store/actions/GetMoviesAction"
import { images } from '../resources/images';

interface Movie {
  title: string;
  year: string;
  poster: string;
  type: string;
}

const DetailScreen: React.FC = (props) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movie, setMovie] = useState<Movie>(props.route?.params?.item);
  const {width,height} = Dimensions.get("window");

  useEffect(()=>{
    console.log(movie);
},[])
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={()=>{
            props.navigation.goBack();
        }}>
            <Text style={{color:'white'}}>back</Text>
        </TouchableOpacity>
      <View style={{
          justifyContent:'center',
          alignItems:'center',
          margin:10,
          width:width*0.8,
          height:width*0.8,
          overflow:'hidden',
          alignSelf:'center',
          borderRadius:10,
      }}>
          <View style={{backgroundColor:'white',opacity:0.3,position:'absolute',width,height}}></View>
          <Image source={{uri:movie.poster}} style={{width:width*0.7,height:width*0.7}}></Image>
      </View>
      <View>
          <Text style={{color:'white',fontWeight:'bold',fontSize:14,marginTop:20,}}>Title:</Text>
          <Text style={{color:'white'}}>{movie.title}</Text>
      </View>
      <View>
          <Text style={{color:'white',fontWeight:'bold',fontSize:14}}>Type:</Text>
          <Text style={{color:'white'}}>{movie.type}</Text>
      </View>
      <View>
          <Text style={{color:'white',fontWeight:'bold',fontSize:14}}>Year:</Text>
          <Text style={{color:'white'}}>{movie.year}</Text>
      </View>

      <View>
          <Text style={{color:'white',fontWeight:'bold',fontSize:14,marginTop:20,}}>Description:</Text>
          <Text style={{color:'white'}}>A prison warden recruits inmates to commit outrageous crimes that shed light on corruption and injustice - and that lead him to an unexpected reunion.</Text>
      </View>
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
export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen);
