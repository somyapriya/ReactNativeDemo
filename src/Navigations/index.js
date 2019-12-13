import React from 'react'
import {
    Text,
    View,
    SafeAreaView,
    StatusBar,
    Keyboard,
    Switch,
    Alert,
    Linking,
    Platform,
    Image,
    TouchableOpacity,
} from 'react-native'
import {
    createAppContainer, createSwitchNavigator
} from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { Login } from '../Screens/LoginScreen/Login';
import Listing from '../Screens/ListingScreen/Listing';
import Detail from '../Screens/DetailScreen/Detail';
import CTAButton from '../Components/CTAButton';

const RootStack = createStackNavigator({
    Login: Login,
    Listing: Listing,

},
    {
        initialRouteName: 'Login'
    },
)


const Dashboard = createDrawerNavigator({
    Listing: Listing,
    Detail: Detail,
}
    ,
    {
        contentComponent: (props) => (
            <View style={{ justifyContent: 'center', flex: 1, paddingHorizontal: 32 }}>
                <CTAButton size={10} onClick={() => props.navigation.navigate('HomeDrawer')} text={"LogOut"} />
            </View>
        ),
    }
);




const MainNavigation = createSwitchNavigator({
    HomeDrawer: RootStack,
    AuthStack: Dashboard,
})







export default AppContainer = createAppContainer(MainNavigation)
