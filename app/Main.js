import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Animated,
    Easing,
    ScrollView,
    RefreshControl,
    AppRegistry
  } from 'react-native';

import { Container, Header, Tab, Tabs, ScrollableTab, Content, Button, Icon, Left, Body, Right, Title, TabHeading } from 'native-base';

import commonStyles from '@assets/styles/common';

import TabToday from '@components/tabs/Today';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navigation: this.props.navigation
        };
        //this.nav = props.nav
    }
    render() {

        return (
            <Container>
                <Header style={{backgroundColor : '#fff'}}>
                    <Left style={[commonStyles.flex1]}>

                    </Left>
                    <Body style={[commonStyles.flex3, commonStyles.itemsCenter, commonStyles.blackTextColor]}>
                        <Title style={[commonStyles.blackTextColor]}>Dabble</Title>
                    </Body>
                    <Right>
                    </Right>
                </Header>
                <Tabs renderTabBar={()=> <ScrollableTab style={{backgroundColor: '#fff'}} />} initialPage={1} >
                    <Tab heading={<TabHeading style={{paddingLeft: 10,paddingRight: 0,backgroundColor: '#fff'}}><Text style={{padding: 6, borderWidth: 0.5, borderColor:'grey', borderRadius: 7, color:'grey'}}>Today</Text></TabHeading>} tabStyle={{backgroundColor: '#fff', paddingHorizontal: 0}} activeTabStyle={{backgroundColor: '#fff'}} activeTextStyle={{color: '#fff', backgroundColor: '#25034A', padding: 6, borderWidth: 0.5, borderColor:'grey', borderRadius: 7}} textStyle={{padding: 6, borderWidth: 0.5, borderColor:'grey', borderRadius: 7, color:'grey'}}>
                        <TabToday />
                    </Tab>
                    <Tab heading={<TabHeading style={{paddingLeft: 10,paddingRight: 0,backgroundColor: '#fff'}}><Text style={{color: '#fff', backgroundColor: '#25034A', padding: 6, borderWidth: 0.5, borderColor:'grey', borderRadius: 7}}>Next To Jump</Text></TabHeading>} tabStyle={{backgroundColor: '#fff', borderColor: '#fff'}} activeTabStyle={{backgroundColor: '#fff'}} activeTextStyle={{color: '#fff', backgroundColor: '#25034A', padding: 6, borderWidth: 0.5, borderColor:'grey', borderRadius: 7}} textStyle={{padding: 6, borderWidth: 0.5, borderColor:'grey', borderRadius: 7, color:'grey'}} tabBarUnderlineStyle={{color: '#fff', backgroundColor: '#fff',}}>
                        <TabToday />
                    </Tab>
                    <Tab heading={<TabHeading style={{paddingLeft: 10,paddingRight: 0,backgroundColor: '#fff'}}><Text style={{padding: 6, borderWidth: 0.5, borderColor:'grey', borderRadius: 7, color:'grey'}}>Tomorrow</Text></TabHeading>} tabStyle={{backgroundColor: '#fff'}} activeTabStyle={{backgroundColor: '#fff'}} activeTextStyle={{color: '#fff', backgroundColor: '#25034A', padding: 6, borderWidth: 0.5, borderColor:'grey', borderRadius: 7}} textStyle={{padding: 6, borderWidth: 0.5, borderColor:'grey', borderRadius: 7, color:'grey'}}>
                        <TabToday />
                    </Tab>
                    <Tab heading={<TabHeading style={{paddingLeft: 10,paddingRight: 0,backgroundColor: '#fff'}}><Text style={{padding: 6, borderWidth: 0.5, borderColor:'grey', borderRadius: 7, color:'grey'}}>Saturday</Text></TabHeading>} tabStyle={{backgroundColor: '#fff'}} activeTabStyle={{backgroundColor: '#fff'}} activeTextStyle={{color: '#fff', backgroundColor: '#25034A', padding: 6, borderWidth: 0.5, borderColor:'grey', borderRadius: 7}} textStyle={{padding: 6, borderWidth: 0.5, borderColor:'grey', borderRadius: 7, color:'grey'}}>
                        <TabToday />
                    </Tab>
                    <Tab heading={<TabHeading style={{paddingLeft: 10,paddingRight: 0,backgroundColor: '#fff'}}><Text style={{padding: 6, borderWidth: 0.5, borderColor:'grey', borderRadius: 7, color:'grey'}}>Sunday</Text></TabHeading>} tabStyle={{backgroundColor: '#fff'}} activeTabStyle={{backgroundColor: '#fff'}} activeTextStyle={{color: '#fff', backgroundColor: '#25034A', padding: 6, borderWidth: 0.5, borderColor:'grey', borderRadius: 7}} textStyle={{padding: 6, borderWidth: 0.5, borderColor:'grey', borderRadius: 7, color:'grey'}}>
                        <TabToday />
                    </Tab>
                </Tabs>
            </Container>
        )

        
    }
}

export default Main