import { Container } from "lucide-react-native";
import { View, Text, ImageBackground } from "react-native";

export default function Homepage() {
    return (
        <View style ={styles.Container}>
            <Text>Home Page</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "lightblue",

    },
});