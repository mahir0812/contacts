import React from "react";
import { View, Text, FlatList } from "react-native";
import colors from "../config/colors";
import * as Contacts from "expo-contacts";
import RegisterInputText from "../components/RegisterInputText";
import Loader from "../components/Loader";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class FriendListScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      contacts: [],
    };
  }

  searchContacts = (value) => {
    const filteredContacts = this.state.contacts.filter((contact) => {
      let contactLowercase = (
        contact.firstName +
        " " +
        contact.lastName
      ).toLowerCase();

      let searchTermLowercase = value.toLowerCase();

      return contactLowercase.indexOf(searchTermLowercase) > -1;
    });
    this.setState({ contacts: filteredContacts });
  };

  filterAndSortData = (data) => {
    const newData = data.filter((item) => {
      return item.phoneNumbers !== undefined;
    });
    newData.sort((a, b) => (a.firstName > b.firstName ? 1 : -1));
    return newData;
  };

  loadContacts = async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status === "granted") {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.PhoneNumbers, Contacts.Fields.Emails],
      });
      this.setState({
        contacts: this.filterAndSortData(data),
        isLoading: false,
      });
    }
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    this.loadContacts();
  }

  renderItem = ({ item }) => (
    <TouchableOpacity>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          minHeight: 70,
          padding: 5,
          borderColor: "white",
          borderWidth: 2,
          borderRadius: 20,
          marginVertical: 10,
          marginHorizontal: 60,
        }}
      >
        <Text style={{ fontSize: 18, color: colors.textColor }}>
          {item.firstName} {item.lastName}
        </Text>
        <Text style={{ color: "black", fontWeight: "bold" }}>
          {item.phoneNumbers && item.phoneNumbers[0].number}
        </Text>
      </View>
    </TouchableOpacity>
  );

  render() {
    if (this.state.isLoading) {
      return <Loader />;
    }
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
          alignItems: "center",
          backgroundColor: colors.backgroundColor,
          paddingTop: 50,
          width: "100%",
        }}
      >
        <View style={{ width: "70%" }}>
          <RegisterInputText
            placeholder={"...Search..."}
            style={{ color: colors.textColor }}
            onChangeText={(value) => this.searchContacts(value)}
          ></RegisterInputText>
        </View>
        <View style={{ paddingVertical: 15, width: "100%" }}>
          <FlatList
            data={this.state.contacts}
            renderItem={this.renderItem}
            ListEmptyComponent={() => (
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 20,
                }}
              >
                <Text>No contacts found</Text>
              </View>
            )}
          ></FlatList>
        </View>
      </View>
    );
  }
}
