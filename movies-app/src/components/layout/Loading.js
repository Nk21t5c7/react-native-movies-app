import { Ionicons } from '@expo/vector-icons'
import { Text } from '@gluestack-ui/themed'
import { StyleSheet, View } from 'react-native'

const Loading = () => {
    return (
        <View style={styles.container}>
            <Text >
                <Ionicons />
                Loading results
            </Text>
        </View>
    )
}

export default Loading;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
    },
});