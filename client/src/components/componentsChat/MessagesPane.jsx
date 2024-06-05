import * as React from "react";
import Box from "@mui/joy/Box";
import Sheet from "@mui/joy/Sheet";
import Stack from "@mui/joy/Stack";
import AvatarWithStatus from "./AvatarWithStatus";
import ChatBubble from "./ChatBubble";
import MessageInput from "./MessageInput";
import MessagesPaneHeader from "./MessagesPaneHeader";
import { chats } from "../../constant/data";
import axios from "axios";
import { useSelector } from "react-redux";
import io from 'socket.io-client';


const socket = io('http://localhost:3000');
export default function MessagesPane({id}) {
  const [chatMessages, setChatMessages] = React.useState(chats[0]?.messages);
  const me = useSelector(state=>state?.auth?.me);
  console.log(me,"this is me")
  // const [chatMessages, setChatMessages] = React.useState(chats);
  const [textAreaValue, setTextAreaValue] = React.useState("");

  // React.useEffect(() => {
  //   setChatMessages(chat.messages);
  // }, [chat.messages]);

  React.useEffect(() => {
    axios.get(`http://localhost:3000/messages/${id}`).then((res)=>{
      setChatMessages(res.data)
    })
  }, []);
  
  React.useEffect(() => {
    socket.on('message', (message) => {
      setChatMessages((prev)=>[...prev,message])
    });

    return () => {
      socket.off('message');
    };
  }, []);

  return (
    <Sheet
      sx={{
        height: { xs: "calc(100dvh - var(--Header-height))", lg: "100dvh" },
        display: "flex",
        flexDirection: "column",
        backgroundColor: "background.level1"
      }}
    >
      <Box
        sx={{
          display: "flex",
          flex: 1,
          minHeight: 0,
          px: 2,
          pt: 10,
          pb: 2,
          overflowY: "scroll",
          flexDirection: "column-reverse"
        }}
      >
        <Stack spacing={2} justifyContent="flex-end">
          {chatMessages?.map((message, index) => {
            const isYou = message.senderId === me?.id;
            return (
              <Stack
                key={index}
                direction="row"
                spacing={2}
                flexDirection={isYou ? "row-reverse" : "row"}
              >
                
                <ChatBubble
                me = {me}
                  variant={isYou ? "sent" : "received"}
                  {...message}
                />
              </Stack>
            );
          })}
        </Stack>
      </Box>
      <MessageInput
        textAreaValue={textAreaValue}
        setTextAreaValue={setTextAreaValue}
        onSubmit={() => {
          const newId = chatMessages.length + 1;
          const newIdString = newId.toString();
         
          socket.emit('message', { senderId: me?.id, text: textAreaValue, sessionId: +id });
        }}
      />
    </Sheet>
  );
}
