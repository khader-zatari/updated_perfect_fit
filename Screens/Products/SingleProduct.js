import React, { useState } from "react";
import { Text, View, ScrollView, StyleSheet, Image, Dimensions } from "react-native";
import { Select, Box, CheckIcon, Center, NativeBaseProvider, Button, Row } from "native-base";
import { connect } from "react-redux";
import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "../../Redux/constants";
import { SafeAreaView } from "react-native-safe-area-context";
import Banner from "../../Shared/Banner";
const { width, height } = Dimensions.get("window");
const SingleProduct = (props) => {
    const product = props.route.params.product;
    let [color, setColor] = useState("");
    let [size, setSize] = useState("");
    const [bannerImages, setBannerImages] = useState(product.images ? product.images : ["https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png"]);
    return (
        <SafeAreaView edges={["top", "left", "right"]}>
            <ScrollView>
                <View style={styles.container}>
                    {/* <View style={styles.imageContainer}>
                        <Image style={styles.image} resizeMode="contain" source={{ uri: product.image ? product.image : "https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png" }} />
                    </View> */}
                    <View>
                        <Banner bannerImages={bannerImages} height={1} />
                    </View>
                    <View style={styles.secondPart}>
                        <Text style={{ marginTop: 20, fontSize: 25, fontWeight: "bold", textAlign: "center" }}>{product.name}</Text>
                        <View style={styles.selectContainer}>
                            <View style={styles.selectLeft}>
                                <Select
                                    key="Size"
                                    selectedValue={size}
                                    accessibilityLabel="Size"
                                    placeholder="Size"
                                    color="black"
                                    _selectedItem={{
                                        bg: "teal.600",
                                        endIcon: <CheckIcon size="5" />,
                                    }}
                                    mt={1}
                                    onValueChange={(size) => setSize(size)}
                                >
                                    {product.size.map((item) => {
                                        return <Select.Item label={item} value={item} key={item} />;
                                    })}
                                </Select>
                            </View>
                            <View style={styles.selectRight}>
                                <Select
                                    key="Color"
                                    selectedValue={color}
                                    accessibilityLabel="Color"
                                    placeholder="Color"
                                    color="black"
                                    _selectedItem={{
                                        bg: "teal.600",
                                        endIcon: <CheckIcon size="5" />,
                                    }}
                                    mt={1}
                                    onValueChange={(color) => setColor(color)}
                                >
                                    {product.color.map((item) => {
                                        return <Select.Item label={item} value={item} key={item} />;
                                    })}
                                </Select>
                            </View>
                        </View>

                        <View style={{ flex: 1, flexDirection: "row-reverse" }}>
                            <Text style={{ fontWeight: "400", fontSize: 18, marginRight: "10%", marginBottom: 20 }}>{product.price} NIS</Text>
                        </View>

                        <View style={styles.buttonContainer}>
                            <Button
                                style={styles.button}
                                size="16"
                                onPress={() => {
                                    props.addItemToCart(product, color, size);
                                    props.navigation.navigate("ProductContainer", { store: props.route.params.store, personType: props.route.params.personType });
                                }}
                            >
                                Add to Cart
                            </Button>
                            {product.category != "t-shirts" ? null : (
                                <>
                                    {props.theUser.length ? (
                                        <View style={styles.selectContainer}>
                                            <Button
                                                backgroundColor={"#61B0B7"}
                                                style={styles.selectLeft}
                                                size="16"
                                                onPress={() => {
                                                    console.log("the user is ", props.theUser[0]._id);
                                                    console.log("the product id is ", product._id);

                                                    props.navigation.navigate("TriedPhoto", { userId: props.theUser[0]._id, productId: product._id });
                                                }}
                                            >
                                                check tried photo
                                            </Button>
                                            <Button
                                                style={styles.selectRight}
                                                size="16"
                                                onPress={() => {
                                                    props.navigation.navigate("Vto", { user: props.theUser, productImageUrl: product.image, productId: product._id });
                                                }}
                                            >
                                                Try It
                                            </Button>
                                        </View>
                                    ) : (
                                        <Button
                                            style={[styles.button, { marginVertical: 10 }]}
                                            size="16"
                                            onPress={() => {
                                                props.navigation.navigate("UserProfile");
                                            }}
                                        >
                                            LogIn To Try it
                                        </Button>
                                    )}
                                </>
                            )}
                        </View>
                        <View
                            style={{
                                borderBottomColor: "black",
                                borderBottomWidth: 1,
                                opacity: 0.3,
                                width: "70%",
                                alignSelf: "center",
                            }}
                        />
                        <View style={styles.descriptionContainer}>
                            <Text>{product.description}</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const mapDispachToProps = (dispatch) => {
    return {
        addItemToCart: (product, color, size) => {
            dispatch({ type: ADD_TO_CART, payload: { quantity: 1, color, size, product } });
        },
    };
};

const mapStateToProps = (state) => {
    const { theUser, cartItems } = state;
    return {
        cartItems: cartItems,
        theUser: theUser,
    };
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageContainer: {
        flex: 1,
        height: height / 2,
        width: width,
    },
    image: {
        flex: 1,
        width: "100%",
        resizeMode: "contain",
    },
    secondPart: {
        flex: 1,
    },
    buttonContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    button: { width: "90%" },
    descriptionContainer: {
        padding: 20,
    },
    selectContainer: {
        alignSelf: "center",
        flexDirection: "row",
    },
    selectLeft: {
        flex: 1,
        width: "80%",
        alignSelf: "center",
        margin: 20,
    },
    selectRight: {
        flex: 1,
        width: "80%",
        alignSelf: "center",
        margin: 20,
    },
});

export default connect(mapStateToProps, mapDispachToProps)(SingleProduct);
