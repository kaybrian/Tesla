import React from 'react';
import {View, Text,ImageBackground} from 'react-native';
import styles from './styles';
import Styledbutton from '../styledbutton/index';

const Caritem = (props) => {
    const {name, tagline, image, taglinecta} = props;
    return (
        <View style={styles.carContainer}>
            <ImageBackground source={image}
            style={styles.image}
            />
            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>{tagline}{' '}
                    <Text style={styles.tagcta}>{taglinecta}</Text>
                </Text>
            </View>

            <View style={styles.buttoncontainer}>

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
                
            </View>

    );
}


export default Caritem;