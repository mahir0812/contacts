import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { View } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import colors from "../config/colors";

ChatScreen.navigationOptions = (screenProps) => ({
  title: screenProps.navigation.getParam("name"),
});

function ChatScreen({ navigation }) {
  const dispatch = useDispatch();
  const selfUser = useSelector((state) => state.selfUser);
  const conversations = useSelector((state) => state.conversations);
  const userId = navigation.getParam("userId");
  const messages = conversations[userId].messages;

  return (
    <View style={{ flex: 1 }}>
      <GiftedChat
        listViewProps={{ style: { backgroundColor: colors.backgroundColor } }}
        timeTextStyle={{
          left: { color: "black" },
          right: { color: "black" },
        }}
        renderUsernameOnMessage
        messages={messages}
        onSend={(messages) => {
          dispatch({
            type: "private_message",
            data: { message: messages[0], conversationId: userId },
          });
          dispatch({
            type: "server/private_message",
            data: { message: messages[0], conversationId: userId },
          });
        }}
        user={{
          _id: selfUser.userId,
        }}
      />
    </View>
  );
}

export default ChatScreen;
