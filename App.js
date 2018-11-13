import React, { Component } from 'react';
import { AppRegistry, FlatList, View, Linking, TouchableNativeFeedback } from 'react-native';
import { Text, Button, Card, Divider } from 'react-native-elements';
var striptags = require('striptags');

var REQUEST_URL = 'http://uscpfa-mn.org/wp-json/wp/v2/posts/';

class SingleNews extends React.Component {
    render() {
      const {
        date,
        title,
        excerpt,
        link
      } = this.props.news;

      return (
        <TouchableNativeFeedback
          useForeground
          onPress={() => Linking.openURL(link)}
        >

          <Card
            featuredTitle={striptags(title.rendered.toString().replace(/\[.*\]|\&.*?\; /g,""))}
          >

            <Text style = {{ marginBottom: 10 }}>
              {striptags(excerpt.rendered.toString().replace(/\[.*\]|\&.*?\; /g,"")) || 'Read More..'}
            </Text>
          </Card>
        </TouchableNativeFeedback>
      )
  }
}

export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      articles: []
    }
  }

  componentDidMount() {
    return fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseJson) =>
        this.setState({
          isLoading: false,
          articles: responseJson
        })
      )
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <FlatList
        data = {this.state.articles}
        renderItem = {({item}) => <SingleNews news = {item} />}
        keyExtractor = {item => item.link}
      />
    );
  }
}

AppRegistry.registerComponent('newApp', () => App);
