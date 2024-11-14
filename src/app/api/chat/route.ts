import { CoreMessage, streamText } from "ai";
import { openai } from "@ai-sdk/openai";

export async function POST(req: Request) {
  const { messages }: { messages: CoreMessage[] } = await req.json();
  console.log("messages", messages);
  const result = await streamText({
    model: openai("gpt-4"),
    system: "You are a helpful assistant.",
    messages,
  });
  console.log("result", result);

  return result.toDataStreamResponse();
}
