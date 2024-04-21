import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from "react-redux";
import { images } from '../resources/images';

interface Movie {
  title: string;
  year: string;
  poster: string;
  type: string;
  rating: number; // New property for movie rating
}

const DetailScreen: React.FC = (props) => {
  const [movie, setMovie] = useState<Movie>(props.route?.params?.item);
  const { width, height } = Dimensions.get("window");

  useEffect(() => {
    console.log(movie);
  }, []);

  // Static actor data
  const actors = [
    { name: 'Sam Worthington', character: 'Jake Sully' },
    { name: 'Zoe Saldana', character: 'Neytiri' },
    { name: 'Sigourney Weaver', character: 'Dr. Grace Augustine' },
    { name: 'Stephen Lang', character: 'Colonel Miles Quaritch' },
    { name: 'Michelle Rodriguez', character: 'Trudy Chacón' },
  ];

  // Static review data
  const reviews: Review[] = [
    { author: 'Shivansh', content: 'Great movie! Highly recommended.', rating: 4 },
    { author: 'Rohan', content: 'One of the best movies I have ever watched.', rating: 5 },
    { author: 'Om', content: 'A must-watch for all movie enthusiasts.', rating: 4 },
  ];

  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<Image key={i} source={images.filledStar} style={styles.starIcon} />);
      } else {
        stars.push(<Image key={i} source={images.emptyStar} style={styles.starIcon} />);
      }
    }
    return stars;
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Text style={styles.backButton}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>{movie.title}</Text>
      </View>

      <View style={styles.posterContainer}>
        {movie.poster === "N/A" ?
          <Image source={images.altImage} style={styles.poster} /> :
          <Image source={{ uri: movie.poster }} style={styles.poster} />}
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.sectionTitle}>Details</Text>
        <Text style={styles.detailText}>Type: {movie.type}</Text>
        <Text style={styles.detailText}>Year: {movie.year}</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>Rating:</Text>
          <View style={styles.starsContainer}>
            {renderStars(3)}
          </View>
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Actors</Text>
        {actors.map((actor, index) => (
          <View key={index} style={styles.actorContainer}>
            <Text style={styles.actorName}>{actor.name}</Text>
            <Text style={styles.characterName}>as {actor.character}</Text>
          </View>
        ))}
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Reviews</Text>
        {reviews.map((review, index) => (
          <View key={index} style={styles.reviewContainer}>
            <View style={styles.reviewHeader}>
              <Text style={styles.reviewAuthor}>{review.author}</Text>
              {renderStars(review.rating)}
            </View>
            <Text style={styles.reviewContent}>{review.content}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  backButton: {
    color: 'white',
    fontSize: 16,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  posterContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  poster: {
    width: 200,
    height: 300,
    resizeMode: 'contain',
  },
  detailsContainer: {
    paddingHorizontal: 20,
  },
  sectionContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailText: {
    color: 'white',
    fontSize: 14,
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  ratingText: {
    color: 'white',
    marginRight: 5,
  },
  starsContainer: {
    flexDirection: 'row',
  },
  starIcon: {
    width: 20,
    height: 20,
    marginRight: 2,
  },
  actorContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  actorName: {
    color: 'white',
    fontWeight: 'bold',
  },
  characterName: {
    color: 'white',
    marginLeft: 5,
  },
  reviewContainer: {
    marginBottom: 10,
  },
  reviewAuthor: {
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  reviewContent: {
    color: 'white',
  },
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
});

export default DetailScreen;
