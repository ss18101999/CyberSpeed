import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { connect } from "react-redux";
import { GetMoviesAction } from "../store/actions/GetMoviesAction";
import { images } from '../resources/images';

// Define the structure of a movie
interface Movie {
  title: string;
  year: string;
  poster: string;
  type: string;
}

const HomeScreen: React.FC = (props) => {
  // State variables
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);
  const { width, height } = Dimensions.get("window");
  const [isLoading, setLoading] = useState(true);

  // Fetch movies on component mount
  useEffect(() => {
    props.getMovie("Jawan"); // Initial movie fetch, by default "Jawan"
  }, []);

  // Update loading state based on movie list changes
  useEffect(() => {
    setLoading(false); // Set loading to false when movies are fetched
  }, [props?.mainState?.MoviesResponse?.movies]);

  // Handler for search query change
  const handleSearchQueryChange = (val: string) => {
    setSearchQuery(val); // Update search query state
    setLoading(true); // Set loading state to true

    // Fetch movies based on search query
    if (val === "") {
      props.getMovie("Jawan"); // Fetch default movies if query is empty, keeping it as "Jawan for now".
    } else {
      props.getMovie(val); // Fetch movies based on search query
    }
  };

  return (
    <View style={styles.container}>
      {/* Search input */}
      <TextInput
        style={styles.input}
        value={searchQuery}
        onChangeText={handleSearchQueryChange}
        placeholder="Search movies..."
        placeholderTextColor="white"
      />

      {/* Display loading indicator if data is loading */}
      {isLoading ? <ActivityIndicator /> :
        // Display movie list if available
        props?.mainState?.MoviesResponse?.movies.length > 0 ?
          <FlatList
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            contentContainerStyle={{ justifyContent: 'space-between' }}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
            data={props?.mainState?.MoviesResponse?.movies || []}
            renderItem={({ item }) => (
              <TouchableOpacity style={[styles.movieContainer, { width: width / 2.3 }]} onPress={() => {
                props?.navigation.navigate("DetailScreen", { item });
              }}>
                <View style={{ width: width / 2, height: width / 2, backgroundColor: 'grey', position: 'absolute', opacity: 0.4 }}></View>
                {item.poster === "N/A" ?
                  <Image source={images.altImage} style={{ width: width / 3, height: width / 3 }} /> :
                  <Image source={{ uri: item.poster }} style={{ width: width / 3, height: width / 3 }} />}
                <Text style={{ textAlign: 'center', color: 'white' }} numberOfLines={2}>{item.title} ({item.year})</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.title}
          /> :
          // Display message if no movies found
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'white' }}>No Movie Found!</Text>
          </View>
      }
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: 'white',
  },
  movieContainer: {
    marginBottom: 10,
    marginTop: 10,
    overflow: "hidden",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    elevation: 10,
  },
});

// Redux mapStateToProps function
const mapStateToProps = (state: any) => ({
  mainState: state,
});

// Redux mapDispatchToProps function
const mapDispatchToProps = (dispatch: any) => ({
  getMovie: (val: string) => {
    dispatch(GetMoviesAction(val));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
