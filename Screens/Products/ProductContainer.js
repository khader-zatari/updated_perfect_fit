import react from "react";
import { Text, View, Image, ScrollView, StyleSheet, Dimensions } from "react-native";
import Banner from "../../Shared/Banner.js";
import ProductCard from "./ProductCard.js";
import ProductList from "./ProductList.js";
const { height } = Dimensions.get("window");
const ProductContainer = () => {
    return (
        <ScrollView style={styles.container} bounces={true}>
            <View>
                <View>
                    <Banner />
                </View>
                <View style={{ flexDirection: "row" }}>
                    <ProductList/>
                    </View>
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        marginTop: height / 20,
    },
});
export default ProductContainer;