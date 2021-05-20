import React, { Fragment, Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Icon, Body, Right } from 'native-base';

import { ActivityIndicator, SafeAreaView } from "react-native";
import { fetchApi } from '@app/service/api';

import commonStyles from '@assets/styles/common';

import  * as CONSTANTS from '@app/Constants';

const BASE_URL = CONSTANTS.SERVER_BASE_URL;

class Today extends Component {

    state ={ 
        showLoader : true,
        data : [],
        fixtures : {},
    }

    componentDidMount() {
        this.getData();
        this.setState({
            showLoader : false,
        });
    }

    getData = async () => {
        let payload = {};

        var myHeaders = new Headers();
        myHeaders.append("Content-type", "application/json");
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(BASE_URL+"/competitions/list?date="+this.formatDate(new Date()), requestOptions)
        .then(response => response.text())
        .then(result => this.setResponce(JSON.parse(result)))
        .catch(error => console.log('error', error));
        /* const responceJson = await fetchApi("/competitions/list?date=2021-05-20", "GET", payload, 200);

        console.log(responceJson);

        if(responceJson.responseBody.success)
        {
            this.setState({
                member_data : responceJson.responseBody.member_data,
                home_district : responceJson.responseBody.member_data.additional_personal_details.home_district,
                family_residence : responceJson.responseBody.member_data.additional_personal_details.family_residence,
                fathers_occupation : responceJson.responseBody.member_data.additional_personal_details.fathers_occupation,
                special_circumstances : responceJson.responseBody.member_data.additional_personal_details.special_circumstances,
            });
            this.setState({
                showLoader : false,
            });
        } */
    }

    formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
    }

    calculateTimeLeft = (datetime) => {
        let year = new Date().getFullYear();
        //let difference = +new Date(`10/01/${year}`) - +new Date();
        let difference = +new Date(datetime) - +new Date();
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        };
      }
      var timeLeftStr = '';
      if(timeLeft.days > 0)
        timeLeftStr += timeLeft.days+'d ';
      if(timeLeft.hours > 0)
        timeLeftStr += timeLeft.hours+'h ';
      if(timeLeft.minutes > 0)
        timeLeftStr += timeLeft.minutes+'m ';
      if(timeLeft.seconds > 0)
        timeLeftStr += timeLeft.seconds+'s';
            
      return timeLeftStr;
    }

    setResponce = (resp) => {
        //console.log(this.formatDate(new Date()));
        //console.log(this.calculateTimeLeft('2021-05-20T08:45:00.000Z'));
        console.log(resp);
        this.setState({
            data : resp,
            fixtures : resp.fixtures,
            showLoader : false,
        })
    }

    renderRow = ({item}) => {

		return (
            <ListItem style={[commonStyles.listItem,]}>
                <Body style={{flexGrow : 1, flexDirection : "row", alignItems : "flex-start", paddingHorizontal: 5}}>
                    {(item.status === 'Final') && <Icon name='earth-outline' style={[commonStyles.whiteTextColor, commonStyles.bgPurple, commonStyles.f15, commonStyles.p5, {borderRadius : 7,}]} />}

                    {(item.status === 'Open') && <Icon name='cube-outline' style={[commonStyles.whiteTextColor, commonStyles.bgPurple, commonStyles.f15, commonStyles.p5, {borderRadius : 7,}]} />}

                    {(item.status === 'Closed') && <Icon name='disc-outline' style={[commonStyles.whiteTextColor, commonStyles.bgPurple, commonStyles.f15, commonStyles.p5, {borderRadius : 7,}]} />}                
                    
                    <Text style={[commonStyles.f13]}>{item.name}</Text>
                </Body>
                <Body style={{flexGrow : 1, flexDirection : "row", alignItems : "flex-start", paddingHorizontal: 5}}>
                    <Icon name='play-forward-circle-outline' style={{borderRadius : 25, color: 'red', fontSize : 22,}} />
                    <Text style={[commonStyles.f13,{color: 'red'}]}>{this.calculateTimeLeft(item.advertisedStart)}</Text>
                    <Text style={[commonStyles.greyTextColor, commonStyles.f13]}>R{item.raceNumber}</Text>
                </Body>
                <Right>
                    <Icon name="chevron-forward-outline" />
                </Right>
            </ListItem>
        )
    }

    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
            <Container style={[commonStyles.bgGrey]}>
                <Content>
                {(this.state.showLoader) && <ActivityIndicator size="large" color="#7341FB" />}
                
                <List
                    dataArray={this.state.fixtures}
                    renderItem={this.renderRow}
                >
                    {/* <ListItem style={[commonStyles.listItem,]}>
                        <Body style={{flexGrow : 1, flexDirection : "row", alignItems : "flex-start", paddingHorizontal: 5}}>
                            <Icon name='earth-outline' style={[commonStyles.whiteTextColor, commonStyles.bgPurple, commonStyles.f15, commonStyles.p5, {borderRadius : 7,}]} />
                            <Text>Durbanville</Text>
                        </Body>
                        <Body style={{flexGrow : 1, flexDirection : "row", alignItems : "flex-start", paddingHorizontal: 5}}>
                            <Icon name='play-forward-circle-outline' style={{borderRadius : 25, color: 'red', fontSize : 22,}} />
                            <Text style={{color: 'red'}}>1h 17m</Text>
                            <Text style={[commonStyles.greyTextColor]}>R2</Text>
                        </Body>
                        <Right>
                            <Icon name="chevron-forward-outline" />
                        </Right>
                    </ListItem>
                    <ListItem style={[commonStyles.listItem,]}>
                        <Body style={{flexGrow : 1, flexDirection : "row", alignItems : "flex-start", paddingHorizontal: 5}}>
                            <Icon name='contract-outline' style={[commonStyles.whiteTextColor, commonStyles.bgPurple, commonStyles.f15, commonStyles.p5, {borderRadius : 7,}]} />
                            <Text>Devonport</Text>
                        </Body>
                        <Body style={{flexGrow : 1, flexDirection : "row", alignItems : "flex-start", paddingHorizontal: 5}}>
                            <Icon name='notifications-outline' style={[ commonStyles.f15, commonStyles.p5, {borderRadius : 25,borderWidth : 0.5,borderColor : '#E1E1DF'}]} />
                            <Text>1h 17m</Text>
                            <Text style={[commonStyles.greyTextColor]}>R2</Text>
                        </Body>
                        <Right>
                            <Icon name="chevron-forward-outline" />
                        </Right>
                    </ListItem>
                    <ListItem style={[commonStyles.listItem,]}>
                        <Body style={{flexGrow : 1, flexDirection : "row", alignItems : "flex-start", paddingHorizontal: 5}}>
                            <Icon name='cube-outline' style={[commonStyles.whiteTextColor, commonStyles.bgPurple, commonStyles.f15, commonStyles.p5, {borderRadius : 7,}]} />
                            <Text>Mohawk</Text>
                        </Body>
                        <Body style={{flexGrow : 1, flexDirection : "row", alignItems : "flex-start", paddingHorizontal: 5}}>
                            <Icon name='notifications-outline' style={[commonStyles.whiteTextColor, commonStyles.bgSkyBlue, commonStyles.f15, commonStyles.p5, {borderRadius : 25,}]} />
                            <Text>1h 17m</Text>
                            <Text style={[commonStyles.greyTextColor]}>R2</Text>
                        </Body>
                        <Right>
                            <Icon name="chevron-forward-outline" />
                        </Right>
                    </ListItem>
                    <ListItem style={[commonStyles.listItem,]}>
                        <Body style={{flexGrow : 1, flexDirection : "row", alignItems : "flex-start", paddingHorizontal: 5}}>
                            <Icon name='hourglass-outline' style={[commonStyles.whiteTextColor, commonStyles.bgPurple, commonStyles.f15, commonStyles.p5, {borderRadius : 7,}]} />
                            <Text>Nagoya</Text>
                        </Body>
                        <Body style={{flexGrow : 1, flexDirection : "row", alignItems : "flex-start", paddingHorizontal: 5}}>
                            <Icon name='notifications-outline' style={[commonStyles.f15, commonStyles.p5, {borderRadius : 25,borderWidth : 0.5,borderColor : '#E1E1DF'}]} />
                            <Text>1h 17m</Text>
                            <Text style={[commonStyles.greyTextColor]}>R2</Text>
                        </Body>
                        <Right>
                            <Icon name="chevron-forward-outline" />
                        </Right>
                    </ListItem>
                    <ListItem style={[commonStyles.listItem,]}>
                        <Body style={{flexGrow : 1, flexDirection : "row", alignItems : "flex-start", paddingHorizontal: 5}}>
                            <Icon name='disc-outline' style={[commonStyles.whiteTextColor, commonStyles.bgPurple, commonStyles.f15, commonStyles.p5, {borderRadius : 7,}]} />
                            <Text>Orange Park</Text>
                        </Body>
                        <Body style={{flexGrow : 1, flexDirection : "row", alignItems : "flex-start", paddingHorizontal: 5}}>
                            <Icon name='notifications-outline' style={[commonStyles.whiteTextColor, commonStyles.bgSkyBlue, commonStyles.f15, commonStyles.p5, {borderRadius : 25,}]} />
                            <Text>1h 17m</Text>
                            <Text style={[commonStyles.greyTextColor]}>R2</Text>
                        </Body>
                        <Right>
                            <Icon name="chevron-forward-outline" />
                        </Right>
                    </ListItem>
                    <ListItem style={[commonStyles.listItem,]}>
                        <Body style={{flexGrow : 1, flexDirection : "row", alignItems : "flex-start", paddingHorizontal: 5}}>
                            <Icon name='contract-outline' style={[commonStyles.whiteTextColor, commonStyles.bgPurple, commonStyles.f15, commonStyles.p5, {borderRadius : 7,}]} />
                            <Text>Devonport</Text>
                        </Body>
                        <Body style={{flexGrow : 1, flexDirection : "row", alignItems : "flex-start", paddingHorizontal: 5}}>
                            <Icon name='notifications-outline' style={[ commonStyles.f15, commonStyles.p5, {borderRadius : 25,borderWidth : 0.5,borderColor : '#E1E1DF'}]} />
                            <Text>1h 17m</Text>
                            <Text style={[commonStyles.greyTextColor]}>R2</Text>
                        </Body>
                        <Right>
                            <Icon name="chevron-forward-outline" />
                        </Right>
                    </ListItem>
                    <ListItem style={[commonStyles.listItem,]}>
                        <Body style={{flexGrow : 1, flexDirection : "row", alignItems : "flex-start", paddingHorizontal: 5}}>
                            <Icon name='cube-outline' style={[commonStyles.whiteTextColor, commonStyles.bgPurple, commonStyles.f15, commonStyles.p5, {borderRadius : 7,}]} />
                            <Text>Mohawk</Text>
                        </Body>
                        <Body style={{flexGrow : 1, flexDirection : "row", alignItems : "flex-start", paddingHorizontal: 5}}>
                            <Icon name='notifications-outline' style={[commonStyles.whiteTextColor, commonStyles.bgSkyBlue, commonStyles.f15, commonStyles.p5, {borderRadius : 25,}]} />
                            <Text>1h 17m</Text>
                            <Text style={[commonStyles.greyTextColor]}>R2</Text>
                        </Body>
                        <Right>
                            <Icon name="chevron-forward-outline" />
                        </Right>
                    </ListItem>
                    <ListItem style={[commonStyles.listItem,]}>
                        <Body style={{flexGrow : 1, flexDirection : "row", alignItems : "flex-start", paddingHorizontal: 5}}>
                            <Icon name='hourglass-outline' style={[commonStyles.whiteTextColor, commonStyles.bgPurple, commonStyles.f15, commonStyles.p5, {borderRadius : 7,}]} />
                            <Text>Nagoya</Text>
                        </Body>
                        <Body style={{flexGrow : 1, flexDirection : "row", alignItems : "flex-start", paddingHorizontal: 5}}>
                            <Icon name='notifications-outline' style={[commonStyles.f15, commonStyles.p5, {borderRadius : 25,borderWidth : 0.5,borderColor : '#E1E1DF'}]} />
                            <Text>1h 17m</Text>
                            <Text style={[commonStyles.greyTextColor]}>R2</Text>
                        </Body>
                        <Right>
                            <Icon name="chevron-forward-outline" />
                        </Right>
                    </ListItem>
                    <ListItem style={[commonStyles.listItem,]}>
                        <Body style={{flexGrow : 1, flexDirection : "row", alignItems : "flex-start", paddingHorizontal: 5}}>
                            <Icon name='disc-outline' style={[commonStyles.whiteTextColor, commonStyles.bgPurple, commonStyles.f15, commonStyles.p5, {borderRadius : 7,}]} />
                            <Text>Orange Park</Text>
                        </Body>
                        <Body style={{flexGrow : 1, flexDirection : "row", alignItems : "flex-start", paddingHorizontal: 5}}>
                            <Icon name='notifications-outline' style={[commonStyles.whiteTextColor, commonStyles.bgSkyBlue, commonStyles.f15, commonStyles.p5, {borderRadius : 25,}]} />
                            <Text>1h 17m</Text>
                            <Text style={[commonStyles.greyTextColor]}>R2</Text>
                        </Body>
                        <Right>
                            <Icon name="chevron-forward-outline" />
                        </Right>
                    </ListItem>
                    <ListItem style={[commonStyles.listItem,]}>
                        <Body style={{flexGrow : 1, flexDirection : "row", alignItems : "flex-start", paddingHorizontal: 5}}>
                            <Icon name='contract-outline' style={[commonStyles.whiteTextColor, commonStyles.bgPurple, commonStyles.f15, commonStyles.p5, {borderRadius : 7,}]} />
                            <Text>Devonport</Text>
                        </Body>
                        <Body style={{flexGrow : 1, flexDirection : "row", alignItems : "flex-start", paddingHorizontal: 5}}>
                            <Icon name='notifications-outline' style={[ commonStyles.f15, commonStyles.p5, {borderRadius : 25,borderWidth : 0.5,borderColor : '#E1E1DF'}]} />
                            <Text>1h 17m</Text>
                            <Text style={[commonStyles.greyTextColor]}>R2</Text>
                        </Body>
                        <Right>
                            <Icon name="chevron-forward-outline" />
                        </Right>
                    </ListItem>
                    <ListItem style={[commonStyles.listItem,]}>
                        <Body style={{flexGrow : 1, flexDirection : "row", alignItems : "flex-start", paddingHorizontal: 5}}>
                            <Icon name='cube-outline' style={[commonStyles.whiteTextColor, commonStyles.bgPurple, commonStyles.f15, commonStyles.p5, {borderRadius : 7,}]} />
                            <Text>Mohawk</Text>
                        </Body>
                        <Body style={{flexGrow : 1, flexDirection : "row", alignItems : "flex-start", paddingHorizontal: 5}}>
                            <Icon name='notifications-outline' style={[commonStyles.whiteTextColor, commonStyles.bgSkyBlue, commonStyles.f15, commonStyles.p5, {borderRadius : 25,}]} />
                            <Text>1h 17m</Text>
                            <Text style={[commonStyles.greyTextColor]}>R2</Text>
                        </Body>
                        <Right>
                            <Icon name="chevron-forward-outline" />
                        </Right>
                    </ListItem>
                    <ListItem style={[commonStyles.listItem,]}>
                        <Body style={{flexGrow : 1, flexDirection : "row", alignItems : "flex-start", paddingHorizontal: 5}}>
                            <Icon name='hourglass-outline' style={[commonStyles.whiteTextColor, commonStyles.bgPurple, commonStyles.f15, commonStyles.p5, {borderRadius : 7,}]} />
                            <Text>Nagoya</Text>
                        </Body>
                        <Body style={{flexGrow : 1, flexDirection : "row", alignItems : "flex-start", paddingHorizontal: 5}}>
                            <Icon name='notifications-outline' style={[commonStyles.f15, commonStyles.p5, {borderRadius : 25,borderWidth : 0.5,borderColor : '#E1E1DF'}]} />
                            <Text>1h 17m</Text>
                            <Text style={[commonStyles.greyTextColor]}>R2</Text>
                        </Body>
                        <Right>
                            <Icon name="chevron-forward-outline" />
                        </Right>
                    </ListItem>
                    <ListItem style={[commonStyles.listItem,]}>
                        <Body style={{flexGrow : 1, flexDirection : "row", alignItems : "flex-start", paddingHorizontal: 5}}>
                            <Icon name='disc-outline' style={[commonStyles.whiteTextColor, commonStyles.bgPurple, commonStyles.f15, commonStyles.p5, {borderRadius : 7,}]} />
                            <Text>Orange Park</Text>
                        </Body>
                        <Body style={{flexGrow : 1, flexDirection : "row", alignItems : "flex-start", paddingHorizontal: 5}}>
                            <Icon name='notifications-outline' style={[commonStyles.whiteTextColor, commonStyles.bgSkyBlue, commonStyles.f15, commonStyles.p5, {borderRadius : 25,}]} />
                            <Text>1h 17m</Text>
                            <Text style={[commonStyles.greyTextColor]}>R2</Text>
                        </Body>
                        <Right>
                            <Icon name="chevron-forward-outline" />
                        </Right>
                    </ListItem> */}
                </List>
                
                </Content>
            </Container>
            </SafeAreaView>
        )
    }
}

export default Today;