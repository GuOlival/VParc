import { StyleSheet } from 'react-native';
import colors from './colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        backgroundColor: colors.grayLight,
        height: '80%'
    },
    title: {
        color: colors.black,
        fontWeight: 'bold',
        fontSize: 30,
        fontFamily: 'Nunito_800ExtraBold'
    },
    description: {
        color: colors.grayMedium,
        fontWeight: 'regular',
        fontSize: 16,
        fontFamily: 'Nunito_400Regular'
    },
    textContainer: {
        marginTop: '10%',
        marginHorizontal: '10%',
        flex: 1,
        flexWrap: "wrap",
        justifyContent: "center",
        alignSelf: "stretch",
        textAlign: "center",
        flexDirection: "column"
    },
    inputView: {
        marginBottom: 8,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "stretch",
        flexDirection: "column",
    },
    inputText: {
        height: 45,
        textAlign: "center",
        width: "90%",
        fontFamily: 'Nunito_400Regular',
        colors: colors.black,
        backgroundColor: colors.white
    },
    inputTextContainer: {
        flex: 3,
        marginTop: '10%',
        marginBottom: '10%',
        marginHorizontal: '10%',
        alignItems: "center",
        justifyContent: "center",
        alignSelf: 'stretch',
        flexDirection: "column"
    }
});

export default styles;