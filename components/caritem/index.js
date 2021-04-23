import React from 'react';
import {View, Text,ImageBackground} from 'react-native';
import styles from './styles';
import Styledbutton from '../styledbutton/index';

const Caritem = (props) => {
    return (
        <View style={styles.carContainer}>
            <ImageBackground source={require('../../assets/images/ModelX.jpeg')}
            style={styles.image}
            />
            <View style={styles.titles}>
                <Text style={styles.title}>Model S</Text>
                <Text style={styles.subtitle}>Starting at $6800</Text>
            </View>

            <Styledbutton 
            type='primary'
            content={"Custom Order"}
            onPress={()=>
                console.warn("Button Pressed ")
            }
            />

            <Styledbutton 
            type='secondary'
            content={"Exisitng Car"}
            onPress={()=>
                console.warn("Exisitng Pressed ")
            }
            />
            </View>
    );
}


export default Caritem;