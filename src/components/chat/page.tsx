"use client";
import { useChat } from "ai/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

export default function Page() {
  const { messages, input, setInput, append } = useChat();

  return (
    <div className="static flex flex-col h-screen max-h-screen w-full mx-auto">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div key={index} className="py-2 flex">
            <div className="gap-x-3">
              {message.role === "user" ? (
                <Avatar>
                  <AvatarImage src="/user.jpeg" />
                  <AvatarFallback>Kostya</AvatarFallback>
                </Avatar>
              ) : (
                <Avatar>
                  <AvatarImage src="/assistant.jpeg" />
                  <AvatarFallback>Assistant</AvatarFallback>
                </Avatar>
              )}
            </div>
            {message.content}
          </div>
          // <div key={index}>{message.content}</div>
        ))}
      </div>
      <div className="p-4 w-2/3 bg-white border-b-cyan-950 flex mx-auto sticky bottom-0">
        <Input
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
          }}
          onKeyDown={async (event) => {
            if (event.key === "Enter") {
              append({ content: input, role: "user" });
              setInput("");
            }
          }}
        />
      </div>
    </div>
  );
}
