import React from "react";
import{
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList
} from "@react-navigation/drawer";

import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import EntidadeScreen from "../screens/EntidadeScreen";
import ContasPagarScreen from "../screens/ContasPagarScreen";
import ContasReceberScreen from "../screens/ContasReceberScreen";

const Drawer = createDrawerNavigator();
function CustomDrawerContent(props: any) {
    const user = {
        nome: "Joao Silva",
        foto: "https://i.pravatar.cc/100"
    };
    return (
        <View style={styles.container}>
            <DrawerContentScrollView {...props}>
                <View style={styles.header}>
                <Image
                source={{ uri: user.foto}}
                style={styles.avatar}/>
                <Text style={styles.name}>{user.nome}</Text>
                </View>
                <DrawerItemList {...props}/>
            </DrawerContentScrollView>
        <View style={styles.footer}>
            <TouchableOpacity
            style={styles.logouButton}
            onPress={() => console.log("Logout")}>
                <Ionicons name="log-out-outline" size={22} color="#fff"/>
                <Text style={styles.logoutText}>Deslogar</Text>
                </TouchableOpacity>
            </View>
            </View>

    );
}
export default function DrawerRoutes() {
    return (
        <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props}/>}
        screenOptions={{
            headerStyle: {
                backgroundColor: "#1E88E5"
            },
            headerTintColor: "#fff",
            drawerActiveTintColor: "#1E88E5",
        }}>
            <Drawer.Screen name="Home" component={HomeScreen}
            options={{
                drawerIcon: ({color, size}) => (
                    <Ionicons name="home-outline" size={size} color={color}/>
                )
            }}/>
            <Drawer.Screen name="Entidade" component={EntidadeScreen}
            options={{
                drawerIcon: ({color, size}) => (
                    <Ionicons name="people-outline" size={size} color={color}/>
                )
            }}/>
            <Drawer.Screen name="Contas a Pagar" component={ContasPagarScreen}
            options={{
                drawerIcon: ({color, size}) => (
                    <Ionicons name="cash-outline" size={size} color={color}/>
                )
            }}/>
            <Drawer.Screen name="Contas a Receber" component={ContasReceberScreen}
            options={{
                drawerIcon: ({color, size}) => (
                    <Ionicons name="cash-outline" size={size} color={color}/>
                )
            }}/>
        </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
        marginBottom: 10,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 10,
    },
    name: {
        fontSize: 16,
        fontWeight: "600",
        color: "#333",
    },
    footer: {
        padding: 20,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: "#ddd",
    },
    logouButton: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#1E88E5",
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderRadius: 6,
    },
    logoutText: {
        color: "#fff",
        marginLeft: 8,
        fontWeight: "600",
    },
});
