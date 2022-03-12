import React from "react";
import { Text, View, StyleSheet, Dimensions, Image } from "react-native";

const { width, height } = Dimensions.get("window");

const ProductCartCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require("../../assets/1638427112t-shirt-png.png")} style={styles.image} />
            </View>
            <View style={styles.right}>
                <View style={styles.rightLeft}>
                    <View style={styles.rightLeftUpTextContainer}>
                        <Text>Nautica</Text>
                    </View>
                    <View style={styles.rightLeftDownTextContainer}>
                        <Text>Black T-Shirt</Text>
                    </View>
                </View>
                <View style={styles.rightRight}>
                    <Text>$200</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        opacity: 0.7,
        width: "80%",
        height: height / 10,
        alignSelf: "center",
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 10,
    },
    imageContainer: {
        flex: 2,
        backgroundColor: "#000",
    },
    image: {
        flex: 1,
        height: height / 3,
        width: width / 2.5,
        alignSelf: "center",
        resizeMode: "contain",
    },
    right: {
        flex: 4,
        flexDirection: "row",
    },
    rightLeft: { flex: 4, backgroundColor: "#00FF00" },
    rightLeftUpTextContainer: { backgroundColor: "#FFA500", flex: 1, justifyContent: "center", alignItems: "center" },
    rightLeftDownTextContainer: { backgroundColor: "#FF6347", flex: 1, justifyContent: "center", alignItems: "center" },
    rightRight: { backgroundColor: "#40e0d0", flex: 3, justifyContent: "center", alignItems: "center" },
});
export default ProductCartCard;
