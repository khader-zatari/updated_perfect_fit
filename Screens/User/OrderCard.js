import React from "react";
import { Text, View, StyleSheet, Dimensions, Image } from "react-native";

const { width, height } = Dimensions.get("window");

const OrderCard = (props) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>order number</Text>
            </View>
            <View>
                <Text>03-02-2022</Text>
            </View>

            <View>
                <Text style={styles.text}>customer name: khader</Text>
            </View>
            <View>
                <Text>process:pending</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#EBECF0",
        opacity: 0.9,
        width: "90%",
        alignSelf: "center",
        marginTop: 10,
        marginBottom: 10,
        padding: 10,
    },
    text: { paddingTop: 10, fontWeight: "bold" },
});
export default OrderCard;