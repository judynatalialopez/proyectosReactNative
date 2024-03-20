import { StatusBar} from 'expo-status-bar';
import { StyleSheet, Text, View,  Image } from "react-native";

export default function APP(){
    return (
        <view style={styles.container}>
          <Image
          source={ require('./assets/chef.jpg')}
          style={styles.imageBackground}
          />
            <view style={styles.form}>
            </view>
        </view>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'brack',
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        opacity: 0.7,
        bottom: '30%',
    },
    form: {
        width: '100%',
        height: '40%',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,

    }
});
