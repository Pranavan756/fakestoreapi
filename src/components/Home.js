import React,{useState,useEffect} from 'react';
import { StyleSheet,View,SafeAreaView,Text, ActivityIndicator, FlatList } from 'react-native';
import axios from 'axios'


const styles = StyleSheet.create({
    root:{
        flex:1,
    },
    loadingContainer: {
        alignItems:'center',
        justifyContent:'center',
        },
    image:{
        width:150,
        height:18
    },
    wrapper:{
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center',
        marginVertical:20,
    },
    imageWrapper:{
        flex:1,
    },
    textwrapper:{
        flex:1,
    }
})


const Home = () => {
    const [products,setProducts]=useState([]);
    const [loading,setLoading]=useEffect(false);

    useEffect(() =>{
        setLoading(true);

        axios.get ('https://fakestoreapi.com/products')
        .then(res=>{
                setProducts(res.data);
        })
        .catch(e =>console.log(e))
        .finally(() => setLoading(false));
    }, []);

     const renderItem=({item}) =>(
   <View style={styles.wrapper}>
<View style={styles.imageWrapper}>
    <Image source={{uri:item.image}} style={styles.image}/>
</View>
<View style={styles.textwrapper}>
    <Text styles={styles.text}>{item.title}</Text>
    <Text styles={styles.text}>{item.description}</Text>
    <Text styles={styles.text}>{item.price}</Text>

</View>
   </View>
   );



   return (
    <SafeAreaView style={styles.root}>
        {loading ? (
        <View style={styles.loadingContainer}>
           <ActivityIndicator size={'large'} color={'#000000'}/>
        </View>
        ) : (
                <FlatList
                data={products}
                keyExtractor={element=>element.id}
                renderItem={renderItem}
             />
        )}
    </SafeAreaView>
        
   )
        };
    

export default Home;