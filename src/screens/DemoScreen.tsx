import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from "react-redux";
import { CountAction } from '../store/actions/CountAction';
class DemoScreen extends Component {
  constructor(props: any) {
    super(props);
    // You can initialize state or bind methods here if needed
  }
  componentDidMount(){
    console.log(this.props);
  }
  render() {
    return (
      <View style={{backgroundColor:'pink',width:200,height:200}}>
        <Text>Hello, world!</Text>
        <Button
        title="Increase" 
        onPress={()=>{
          this.props?.toggleTheme();
        }}></Button>
        <Text style={{textAlign:'center'}}>{this.props.mainState?.CountResponse.count}</Text>
      </View>
    );
  }
}
const mapStateToProps = (state:any) => ({
  mainState: state,
});

const mapDispatchToProps = (dispatch:any) => ({
  toggleTheme: () => {
    dispatch(CountAction());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(DemoScreen);

