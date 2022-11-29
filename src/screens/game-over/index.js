import {Button, Image, Text, View} from 'react-native';

import { Card } from '../../components';
import React from 'react';
import colors from '../../constants/colors';
import {styles} from './styles';

const GameOver = ({rounds, selectedNumber, onRestart}) => {
    return (
        <View style={styles.container}>
           <Card style={styles.content}>
                <Image 
                source={{ uri: 'https://img.freepik.com/free-vector/game-cartoon-text-effect-editable-comic-funny-text-style_314614-1941.jpg?w=1800&t=st=1669687066~exp=1669687666~hmac=deece200c4e201d42e1e87aeb9ceb3311501f7cd0e1e6554c47d6452729019e4'}} 
                style={styles.image} />
                <Text style={styles.textContent}>Rounds: {rounds}</Text>
                <Text style={styles.textContent}>Picked Number: {selectedNumber}</Text>
                <Button 
                    title="Restart"
                    onPress={onRestart}
                    color={colors.buttons}
                />
           </Card>
        </View>
    )
}

export default GameOver;


