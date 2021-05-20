import React, { Component } from 'react';

import { Actions } from 'react-native-router-flux';

//import test_modal from '@components/User/test_modal';
//import PayU from '@components/common/PayU';


export class Routes extends Component {
    onBackPress = () => {
        const scene = Actions.currentScene;
        /* if (scene === 'home') {
          return false
        }
        Actions.pop()
        return true */

        if (backButtonPressedOnceToExit) {
            return false
        } else {
            if (Actions.currentScene !== 'home' && Actions.currentScene !== 'dashboard') {
                Actions.pop();
                return true;
            } else {
                backButtonPressedOnceToExit = true;
                ToastAndroid.show("Press Back Button again to exit",ToastAndroid.SHORT);
                //setting timeout is optional
                setTimeout( () => { backButtonPressedOnceToExit = false }, 2000);
                return true;
            }
        }
    }

    render() {
        return (
            <Router backAndroidHandler={this.onBackPress}>
			    <Scene>
                    <Scene key="root" hideNavBar={true} initial={!this.props.isLoggedIn}>
                        {/* <Scene key="payu" component={PayU} title="PayU" /> */}
                        <Scene key="home" component={Home} title="Home"/>
                        <Scene key="sliders" component={Sliders} title="Sliders" />
                        <Scene key="login" component={Login}  title="Login"/>
                        <Scene key="register" component={Register} title="Register" />
                        <Scene key="forgot" component={Forgot} title="Forgot" />
                        <Scene key="search" component={Search} title="Search" />
                        <Scene key="search_result" component={Search_Result} title="Search_Result" />
                        <Scene key="aboutus" component={AboutUs} title="AboutUs" />
                        <Scene key="contactus" component={ContactUs} title="ContactUs" />
                        <Scene key="tnc" component={TnC} title="TnC" />
                        <Scene key="privacypolicy" component={PrivacyPolicy} title="PrivacyPolicy" />
                        <Scene key="premium_plans" component={Premium_Plans} title="Premium_Plans" />
                        <Scene key="happy_stories" component={Happy_Stories} title="Happy_Stories" />
                        <Scene key="faq" component={FAQ} title="FAQ" />
                        <Scene key="photo_gallery" component={Photo_Gallery} title="Photo_Gallery" />
                        <Scene key="comming_soon" component={Comming_Soon} title="Comming_Soon" />
                    </Scene>
                    <Scene key="app" hideNavBar={true} initial={this.props.isLoggedIn}>
                        {/* <Scene key="test" component={test} title="test" /> */}
                        <Scene key="dashboard" component={Dashboard} title="Dashboard" />
                        <Scene key="search" component={Search} title="Search" />
                        <Scene key="search_result" component={Search_Result} title="Search_Result" />
                        <Scene key="member_profile" component={Member_Profile} title="Member_Profile" />
                        <Scene key="user_profile" component={User_Profile} title="User_Profile" />
                        <Scene key="edit_introduction" component={Edit_Introduction} title="Edit_Introduction" />
                        <Scene key="edit_basic_info" component={Edit_Basic_Information} title="Edit_Basic_Information" />
                        <Scene key="edit_present_address" component={Edit_Present_Address} title="Edit_Present_Address" />
                        <Scene key="edit_education_career" component={Edit_Education_Career} title="Edit_Education_Career" />
                        <Scene key="edit_physical_attr" component={Edit_Physical_Attr} title="Edit_Physical_Attr" />
                        <Scene key="edit_language" component={Edit_Language} title="Edit_Language" />
                        <Scene key="edit_hobbies" component={Edit_Hobbies_Interests} title="Edit_Hobbies_Interests" />
                        <Scene key="edit_personal_behavior" component={Edit_Personal_Behavior} title="Edit_Personal_Behavior" />
                        <Scene key="edit_residency_info" component={Edit_Residency_Information} title="Edit_Residency_Information" />
                        <Scene key="edit_spiritual_background" component={Edit_Spiritual_Background} title="Edit_Spiritual_Background" />
                        <Scene key="edit_life_style" component={Edit_Life_Style} title="Edit_Life_Style" />
                        <Scene key="edit_astronomic_info" component={Edit_Astronomic_Info} title="Edit_Astronomic_Info" />
                        <Scene key="edit_permanent_address" component={Edit_Permanent_Address} title="Edit_Permanent_Address" />
                        <Scene key="edit_family_info" component={Edit_Family_Info} title="Edit_Family_Info" />
                        <Scene key="edit_additional_personal_info" component={Edit_Additional_Personal_Info} title="Edit_Additional_Personal_Info" />
                        <Scene key="edit_partner_expectations" component={Edit_Partner_Expectations} title="Edit_Partner_Expectations" />
                        <Scene key="package_info" component={Package_Info} title="Package_Info" />
                        <Scene key="payment_info" component={Payment_Info} title="Payment_Info" />
                        <Scene key="myignored" component={MyIgnored} title="MyIgnored" />
                        <Scene key="myfollowers" component={MyFollowers} title="MyFollowers" />
                        <Scene key="myfollowed" component={MyFollowed} title="MyFollowed" />
                        <Scene key="myshortlists" component={MyShortlists} title="MyShortlists" />
                        <Scene key="myinterests" component={MyInterests} title="MyInterests" />
                        <Scene key="mygallery" component={MyGallery} title="MyGallery" />
                        <Scene key="add_gallery" component={Add_Gallery} title="Add_Gallery" />
                        <Scene key="mynotifications" component={MyNotifications} title="MyNotifications" />
                        <Scene key="picture_privacy" component={Picture_Privacy} title="Picture_Privacy" />
                        <Scene key="change_password" component={Change_Password} title="Change_Password" />
                        <Scene key="aboutus" component={AboutUs} title="AboutUs" />
                        <Scene key="contactus" component={ContactUs} title="ContactUs" />
                        <Scene key="tnc" component={TnC} title="TnC" />
                        <Scene key="privacypolicy" component={PrivacyPolicy} title="PrivacyPolicy" />
                        <Scene key="comming_soon" component={Comming_Soon} title="Comming_Soon" />
                        <Scene key="premium_plans" component={Premium_Plans} title="Premium_Plans" />
                        <Scene key="happy_stories" component={Happy_Stories} title="Happy_Stories" />
                        <Scene key="faq" component={FAQ} title="FAQ" />
                        <Scene key="photo_gallery" component={Photo_Gallery} title="Photo_Gallery" />
                        <Scene key="payment" component={Payment} title="Payment" />
                        {/* <Scene key="member_profile" component={Member_Profile} title="Member_Profile" /> */}
                    </Scene>
                </Scene>
			 </Router>
        )
    }
}

export default Routes
