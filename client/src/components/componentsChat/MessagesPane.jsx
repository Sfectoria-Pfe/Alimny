import * as React from "react";
import Box from "@mui/joy/Box";
import Sheet from "@mui/joy/Sheet";
import Stack from "@mui/joy/Stack";
import AvatarWithStatus from "./AvatarWithStatus";
import ChatBubble from "./ChatBubble";
import MessageInput from "./MessageInput";
import MessagesPaneHeader from "./MessagesPaneHeader";
import { chats } from "../../constant/data";

export default function MessagesPane(props) {
  const [chatMessages, setChatMessages] = React.useState(chats[0]?.messages);
  // const [chatMessages, setChatMessages] = React.useState(chats);
  const [textAreaValue, setTextAreaValue] = React.useState("");

  // React.useEffect(() => {
  //   setChatMessages(chat.messages);
  // }, [chat.messages]);

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
            const isYou = message.sender === "You";
            return (
              <Stack
                key={index}
                direction="row"
                spacing={2}
                flexDirection={isYou ? "row-reverse" : "row"}
              >
                {message.sender !== "You" && (
                  <AvatarWithStatus
                    online={message.sender.online}
                    src={message.sender.avatar}
                  />
                )}
                <ChatBubble
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
          setChatMessages([
            ...chatMessages,
            {
              id: newIdString,
              sender: "You",
              content: "hello",
              timestamp: "Just now"
            }
          ]);
        }}
      />
    </Sheet>
  );
}
