import react from 'react';
import { StyleSheet,View,SafeAreaView,Text } from 'react-native';


const styles = StyleSheet.create({
    root:{
        flex:1,
    }
});

const Home = () => {
   return (
    <SafeAreaView>
        <View>
            <Text>
                Home
            </Text>
        </View>
    </SafeAreaView>
   )
};

export default Home;