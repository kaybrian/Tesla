import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './style';

const Styledbutton = (props) => {
    const type = props.type;
    const content = props.content;
    const onpressed = props.onPress;

    const backgroundColor = type == 'primary' ? '#171A28CC' : '#FFFFFFAC'; 
    const textColor = type == 'primary' ? '#FFFFFFAC' : '#171A28CC';

    return (

        <View style={styles.Container}>
            <Pressable 
                style={[styles.button, {backgroundColor:backgroundColor}]}
                onPress={() =>onpressed()}
            >
                <Text style={[styles.text, {color:textColor}]}>{content}</Text>
            </Pressable>
        </View>

    );
}


export default Styledbutton;