import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
    splash_bg : {
        flex : 1,
        resizeMode: 'cover',
        justifyContent : "center",
    },
    fullContainer : {
        width : '100%',
        height : '100%',
        justifyContent : 'center',
        alignItems : "center"
    },
    loaderContainer : {
        backgroundColor : 'rgba(0,0,0,0.4)',
        position : "absolute",
        width : '100%',
        height : '100%',
        zIndex : 99,
        justifyContent : 'center',
        alignItems : "center"
    },
    offlinePanelContainer : {
        position : "absolute",
        width : '100%',
        height : '70%',
        zIndex : 99,
        justifyContent : 'center',
        alignItems : "center"
    },
    offlineContainer: {
        flex : 1,
        backgroundColor: '#b52424',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width,
        position: 'absolute',
        top: 0
    },
    offlineText: { 
        color: '#fff',
    },
    listItem: {
        backgroundColor : '#FFF',
        marginRight : 20,
        marginTop : 10,
        paddingTop : 10,
        paddingBottom : 10,
        borderRadius : 7
    },
    itemsCenter : {
        alignItems : "center",
    },
    inputIcon: { 
        flex : 1,
        
        marginRight : 25,
        color: '#fff',
        fontSize : 20,
        textAlign : "right"
    },
    offlineBtnText: {
        textAlign : "right",
        position : "absolute",
    },
    reloadNetConnectionBtn: { 
        paddingLeft : 25,
        color: '#fff',
        backgroundColor : 'blue',
        position : "relative",
        margin : 25,
    },
    brandingTextColor : {
        color : '#e02782',
    },
    blackTextColor : {
        color : '#000',
    },
    greyTextColor : {
        color : 'grey',
    },
    whiteTextColor : {
        color : 'white',
    },
    purpleTextColor : {
        color : '#7641FD',
    },
    greenTextColor : {
        color : '#28a745',
    },
    redTextColor : {
        color : '#dc3545',
    },
    bgBrandingPink : {
        backgroundColor : '#e7015e',
    },
    bgWhite : {
        backgroundColor : '#FFF',
    },
    bgGrey : {
        backgroundColor : '#EFEFEF',
    },
    bgPurple : {
        backgroundColor : '#7341FB',
    },
    bgSkyBlue : {
        backgroundColor : '#4589ED',
    },
    footerTabActiveColor : {
        color : '#e02782',
    },
    footerTabInactiveColor : {
        color : 'grey',
    },
    brandingPinkButton : {
        backgroundColor : '#e7015e',
        justifyContent : "center",
        borderBottomRightRadius : 10,
        borderTopLeftRadius : 10,
        paddingHorizontal : 8,
        paddingVertical : 6,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    darkButton : {
        backgroundColor : '#343a40',
        justifyContent : "center",
        color : '#FFF',
        borderBottomRightRadius : 10,
        borderTopLeftRadius : 10,
        paddingHorizontal : 8,
        paddingVertical : 6,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    blueButton : {
        backgroundColor : '#17A2B8',
        justifyContent : "center",
        color : '#FFF',
        borderBottomRightRadius : 10,
        borderTopLeftRadius : 10,
        paddingHorizontal : 8,
        paddingVertical : 6,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    redButton : {
        backgroundColor : '#dc3545',
        justifyContent : "center",
        color : '#FFF',
        borderBottomRightRadius : 10,
        borderTopLeftRadius : 10,
        paddingHorizontal : 8,
        paddingVertical : 6,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    greenRoundButton : {
        backgroundColor : '#28A745',
        color : '#FFF',
        borderRadius : 25,
        height : 25,
    },
    darkRoundButton : {
        backgroundColor : '#343a40',
        color : '#FFF',
        borderRadius : 25,
        height : 25,
    },
    redRoundButton : {
        backgroundColor : '#DC3545',
        color : '#FFF',
        borderRadius : 25,
        height : 25,
    },
    borderBottom : {
        borderBottomWidth : 1,
    },
    textLeft : {
        textAlign : "left"
    },
    textRight : {
        textAlign : "right"
    },
    textCenter : {
        textAlign : "center",
        alignItems : "center",
        alignContent : 'center'
    },
    textBold : {
        fontWeight: 'bold',
    },
    greyBorder : {
        borderWidth : 1,
        borderColor : '#E1E1DF'
    },
    
    fullWidth : {
        width : '100%',
    },

    flex05 : { flex : 0.5, },
    flex1 : { flex : 1, },
    flex2 : { flex : 2, },
    flex3 : { flex : 3, },
    flex4 : { flex : 4, },
    flex5 : { flex : 5, },
    
    f5 : {fontSize : 5,},
    f6 : {fontSize : 6,},
    f7 : {fontSize : 7,},
    f8 : {fontSize : 8,},
    f9 : {fontSize : 9,},
    f10 : {fontSize : 10,},
    f11 : {fontSize : 11,},
    f12 : {fontSize : 12,},
    f13 : {fontSize : 13,},
    f14 : {fontSize : 14,},
    f15 : {fontSize : 15,},
    f16 : {fontSize : 16,},
    f17 : {fontSize : 17,},
    f18 : {fontSize : 18,},
    f19 : {fontSize : 19,},
    f20 : {fontSize : 20,},
    f25 : {fontSize : 25,},
    f30 : {fontSize : 30,},
    f35 : {fontSize : 35,},
    f40 : {fontSize : 40,},

    m1 : { margin : 1,},
    m2 : { margin : 2,},
    m3 : { margin : 3,},
    m4 : { margin : 4,},
    m5 : { margin : 5,},
    m10 : { margin : 10,},
    m15 : { margin : 15,},
    m20 : { margin : 20,},
    m25 : { margin : 25,},

    mb1 : { marginBottom : 1,},
    mb2 : { marginBottom : 2,},
    mb3 : { marginBottom : 3,},
    mb4 : { marginBottom : 4,},
    mb5 : { marginBottom : 5,},
    mb10 : { marginBottom : 10,},
    mb15 : { marginBottom : 15,},
    mb20 : { marginBottom : 20,},
    mb25 : { marginBottom : 25,},

    mt1 : { marginTop : 1,},
    mt2 : { marginTop : 2,},
    mt3 : { marginTop : 3,},
    mt4 : { marginTop : 4,},
    mt5 : { marginTop : 5,},
    mt10 : { marginTop : 10,},
    mt15 : { marginTop : 15,},
    mt20 : { marginTop : 20,},
    mt25 : { marginTop : 25,},

    ml1 : { marginLeft : 1,},
    ml2 : { marginLeft : 2,},
    ml3 : { marginLeft : 3,},
    ml4 : { marginLeft : 4,},
    ml5 : { marginLeft : 5,},
    ml10 : { marginLeft : 10,},
    ml15 : { marginLeft : 15,},
    ml20 : { marginLeft : 20,},
    ml25 : { marginLeft : 25,},

    mr1 : { marginRight : 1,},
    mr2 : { marginRight : 2,},
    mr3 : { marginRight : 3,},
    mr4 : { marginRight : 4,},
    mr5 : { marginRight : 5,},
    mr10 : { marginRight : 10,},
    mr15 : { marginRight : 15,},
    mr20 : { marginRight : 20,},
    mr25 : { marginRight : 25,},

    p1 : { padding : 1,},
    p2 : { padding : 2,},
    p3 : { padding : 3,},
    p4 : { padding : 4,},
    p5 : { padding : 5,},
    p10 : { padding : 10,},
    p15 : { padding : 15,},
    p20 : { padding : 20,},
    p25 : { padding : 25,},

    pb1 : { paddingBottom : 1,},
    pb2 : { paddingBottom : 2,},
    pb3 : { paddingBottom : 3,},
    pb4 : { paddingBottom : 4,},
    pb5 : { paddingBottom : 5,},
    pb10 : { paddingBottom : 10,},
    pb15 : { paddingBottom : 15,},
    pb20 : { paddingBottom : 20,},
    pb25 : { paddingBottom : 25,},

    pt1 : { paddingTop : 1,},
    pt2 : { paddingTop : 2,},
    pt3 : { paddingTop : 3,},
    pt4 : { paddingTop : 4,},
    pt5 : { paddingTop : 5,},
    pt10 : { paddingTop : 10,},
    pt15 : { paddingTop : 15,},
    pt20 : { paddingTop : 20,},
    pt25 : { paddingTop : 25,},

    pl1 : { paddingLeft : 1,},
    pl2 : { paddingLeft : 2,},
    pl3 : { paddingLeft : 3,},
    pl4 : { paddingLeft : 4,},
    pl5 : { paddingLeft : 5,},
    pl10 : { paddingLeft : 10,},
    pl15 : { paddingLeft : 15,},
    pl20 : { paddingLeft : 20,},
    pl25 : { paddingLeft : 25,},

    pr1 : { paddingRight : 1,},
    pr2 : { paddingRight : 2,},
    pr3 : { paddingRight : 3,},
    pr4 : { paddingRight : 4,},
    pr5 : { paddingRight : 5,},
    pr10 : { paddingRight : 10,},
    pr15 : { paddingRight : 15,},
    pr20 : { paddingRight : 20,},
    pr25 : { paddingRight : 25,},

    flexDirectionRow : {
        flexDirection : "row",
    },

    ribbonRightCorner: {
        width: 0,
        height: 0,
        right : 0,
        marginTop: 1,
        position : "absolute",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: 50,
        borderTopWidth: 50,
        borderRightColor: 'transparent',
        borderTopColor: '#e7015d',
        borderTopRightRadius: 3,
        borderBottomRightRadius: 3,
        transform: [
            {rotate: '90deg'}
          ]
    },
    ribbonRightCornerTriangle : {
        width: 0,
        height: 0,
        bottom : 38,

        alignSelf : "stretch",
        backgroundColor: 'transparent',
        //position : "absolute",
        borderStyle: 'solid',
        borderRightWidth: 25,
        borderTopWidth: 25,
        borderRightColor: 'transparent',
        borderTopColor: '#FFF',
        borderBottomColor: 'yellow',
        //transform: [{rotate: '90deg'}],
    },
    ribbonTextRightCorner : {
        color: '#FFF',
        fontWeight: 'bold',
        position : "absolute",
        paddingBottom : 20,
        fontSize : 10,
        transform: [
            {rotate: '-45deg'}
          ]
    },


    viewtest: {
        marginTop: 100,
        backgroundColor: 'blue',
        width: width - 80,
        margin: 10,
        height: 200,
        borderRadius: 10,
        //paddingHorizontal : 30
      },
    viewtest2: {
        marginTop: 100,
        backgroundColor: 'red',
        width: width - 80,
        margin: 10,
        height: 200,
        borderRadius: 10,
        //paddingHorizontal : 30
    },
})
