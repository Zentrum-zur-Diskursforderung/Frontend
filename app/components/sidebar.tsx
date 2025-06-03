import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const baseUrl = 'http://localhost:8081/';

const Sidebar = () => {
    const navigation = useNavigation(); // 👈 get navigation object

    const [containerWidth, setContainerWidth] = useState(0);

    return (
    <View style={{
        flex: 0.05, 
        flexDirection: 'column',
        width: '5%',
        backgroundColor: '#1D3B5A',
        height: '100%',    
        alignItems: 'center' // center contents horizontally
    }}
    onLayout={(event) => {
        const width = event.nativeEvent.layout.width;
        setContainerWidth(width);
        
    }}
>
        
        <TouchableOpacity onPress={() => {const newLastPart = '';window.history.pushState({}, '', '/' + newLastPart);}}>
        <Image //Logo
        source={require('../images/logo.png')} 
        style={{ width: containerWidth, height: containerWidth * 0.6, marginBottom: 10, marginTop: containerWidth * 0.2 }}
        resizeMode="contain"/>
        </TouchableOpacity>
       

        <TouchableOpacity>
        <Image //Start
        source={require('../images/sidebarOnlyBilder/startSymbol.png')} // Adjust the path as needed
        style={{ width: containerWidth, height: containerWidth * 0.3, marginBottom: 10, marginTop: containerWidth * 0.2 }}
        resizeMode="contain"/>

        <Text style={{ color: 'white', textAlign: "center" }}>Start</Text>
        </TouchableOpacity>


        <TouchableOpacity>
        <Image //Wahlen
        source={require('../images/sidebarOnlyBilder/wahlenSymbol.png')} // Adjust the path as needed
        style={{ width: containerWidth, height: containerWidth * 0.3, marginBottom: 10, marginTop: containerWidth * 0.2 }}
        resizeMode="contain"/>

        <Text style={{ color: 'white', textAlign: "center" }}>Wahlen</Text>
        </TouchableOpacity>

        <TouchableOpacity>
        <Image //Debatte
        source={require('../images/sidebarOnlyBilder/debatteSymbol.png')} // Adjust the path as needed
        style={{ width: containerWidth, height: containerWidth * 0.3, marginBottom: 10, marginTop: containerWidth * 0.2 }}
        resizeMode="contain"/>

        <Text style={{ color: 'white', textAlign: "center" }}>Debatte</Text>
        </TouchableOpacity>


        <TouchableOpacity>
        <Image //Wissen
        source={require('../images/sidebarOnlyBilder/wissenSymbol.png')} // Adjust the path as needed
        style={{ width: containerWidth, height: containerWidth * 0.3, marginBottom: 10, marginTop: containerWidth * 0.2 }}
        resizeMode="contain"/>

        <Text style={{ color: 'white', textAlign: "center" }}>Wissen</Text>
        </TouchableOpacity>


        <TouchableOpacity>
        <Image //Beiträge
        source={require('../images/sidebarOnlyBilder/beiträgeSymbol.png')} // Adjust the path as needed
        style={{ width: containerWidth, height: containerWidth * 0.3, marginBottom: 10, marginTop: containerWidth * 0.2 }}
        resizeMode="contain"/>

        <Text style={{ color: 'white', textAlign: "center" }}>Beiträge</Text>
        </TouchableOpacity>


        <TouchableOpacity>
        <Image //Community
        source={require('../images/sidebarOnlyBilder/communitySymbol.png')} // Adjust the path as needed
        style={{ width: containerWidth, height: containerWidth * 0.3, marginBottom: 10, marginTop: containerWidth * 0.2 }}
        resizeMode="contain"/>

        <Text style={{ color: 'white', textAlign: "center" }}>Community</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => {const newLastPart = 'Kontakt';window.history.pushState({}, '', '/' + newLastPart);}}>
        <Image //Kontakt
        source={require('../images/sidebarOnlyBilder/kontaktSymbol.png')} // Adjust the path as needed
        style={{ width: containerWidth, height: containerWidth * 0.3, marginBottom: 10, marginTop: containerWidth * 0.2 }}
        resizeMode="contain"/>

        <Text style={{ color: 'white', textAlign: "center" }}>Kontakt</Text>
        </TouchableOpacity>

    </View>

  );
};

export default Sidebar;
