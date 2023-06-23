import { Text, View, StyleSheet, SafeAreaView } from "react-native"
import { MaterialCommunityIcons, FontAwesome } from "react-native-vector-icons";
import Ionicons from '@expo/vector-icons/Ionicons';

const App = props => {
    return(
        
        <SafeAreaView style={{backgroundColor: '#eee', flex: 1}}>
            {/*  heading */}
            <View style={{marginTop: 50}}>
                <Text style={styles.heading}><Text style={{ color: '#024c98', fontWeight: 'bold' }}>NUG</Text><Text style={{ color: '#4b99fb' }}>Pay</Text></Text>
            </View>
            {/* balance */}
            <View style={styles.center}>
                <View style={styles.box}>
                    <Text>Your Balance</Text>
                    <Text style={styles.balance}>7,000 MMK</Text>
                    <View style={styles.userQr}>
                        <Text>nannkahlar.nugpay.app</Text>
                        <MaterialCommunityIcons name="qrcode-scan" size={25} />
                    </View>
                </View>   
            </View>
            {/* add receive */}
            <View style={styles.addRec}>
                <View style={styles.boxRec}>
                    <Ionicons name="arrow-down-circle-outline" size={30} color={'#5097fa'} />
                    <Text style={{ marginTop: 20, color: '#374151' }}>Add or Receive</Text>  
                </View>
                <View style={styles.boxRec2}>
                    <View style={{width:24, height:24, borderWidth: 2, borderColor: '#5097fa', borderRadius: 100, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <FontAwesome name="send-o" size={10} color={'#5097fa'} />
                    </View>
                    <Text style={{ marginTop: 24, color: '#374151' }}>Send Money</Text>
                </View>
            </View>
            <View style={styles.center}>
                <View style={styles.box}>
                    <Text style={{ color: '#5097fa' }}>Recent Activity</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    heading:{
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 15
    },
    box:{
        width: "95%",
        backgroundColor: "#fff",
        borderRadius: 15,
        padding: 20
    },
    center:{
        alignItems: 'center',
    },
    balance:{
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 20
    },
    userQr:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    addRec:{
        // flex: 1,
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20,
        width: '100%',
        paddingRight: 10,
        marginBottom: 10
    },
    boxRec:{
        flex: 1,
        backgroundColor: '#fff',
        height: 100,
        marginRight: 10,
        borderRadius: 15,
        padding: 15
    },
    boxRec2:{
        flex: 1,
        backgroundColor: '#fff',
        height: 100,
        borderRadius: 15,
        padding: 15,
        paddingTop: 20,
        marginRight: 10,
    }
});
export default App;