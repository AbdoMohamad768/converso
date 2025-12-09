import { subjectsColors /* voices */ } from "@/constants";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
// import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";

/**
 * cn(...inputs)
 *
 * Lightweight helper that composes class names and resolves Tailwind conflicts.
 *
 * How it works:
 * 1. Accepts the same inputs as `clsx` (strings, arrays, nested arrays, objects
 *    with boolean flags) and returns a single joined string.
 * 2. Passes that string to `twMerge` which deduplicates and resolves Tailwind
 *    utility conflicts (for example, multiple `px-*`, `text-*`, or color utilities
 *    targeting the same property).
 *
 * Examples:
 *   `cn('px-4', condition && 'text-red-500')`
 *   `cn(buttonVariants({ variant, size, className }))`
 *   `cn('px-4', 'md:px-2') // keeps both: different breakpoints don't conflict`
 *
 * Tips:
 * - Put base classes first and overrides later so the intended class wins.
 * - `clsx` removes falsy inputs before merging; an empty result becomes `''`.
 * - Prefer using variant helpers (e.g. `cva`) over many runtime arbitrary classes.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getSubjectColor = (subject: string) => {
  return subjectsColors[subject as keyof typeof subjectsColors];
};

// export const configureAssistant = (voice: string, style: string) => {
//   const voiceId =
//     voices[voice as keyof typeof voices][
//       style as keyof (typeof voices)[keyof typeof voices]
//     ] || "sarah";

//   const vapiAssistant: CreateAssistantDTO = {
//     name: "Companion",
//     firstMessage:
//       "Hello, let's start the session. Today we'll be talking about {{topic}}.",
//     transcriber: {
//       provider: "deepgram",
//       model: "nova-3",
//       language: "en",
//     },
//     voice: {
//       provider: "11labs",
//       voiceId: voiceId,
//       stability: 0.4,
//       similarityBoost: 0.8,
//       speed: 0.9,
//       style: 0.5,
//       useSpeakerBoost: true,
//     },
//     model: {
//       provider: "openai",
//       model: "gpt-4",
//       messages: [
//         {
//           role: "system",
//           content: `You are a highly knowledgeable tutor teaching a real-time voice session with a student. Your goal is to teach the student about the topic and subject.

//                     Tutor Guidelines:
//                     Stick to the given topic - {{ topic }} and subject - {{ subject }} and teach the student about it.
//                     Keep the conversation flowing smoothly while maintaining control.
//                     From time to time make sure that the student is following you and understands you.
//                     Break down the topic into smaller parts and teach the student one part at a time.
//                     Keep your style of conversation {{ style }}.
//                     Keep your responses short, like in a real voice conversation.
//                     Do not include any special characters in your responses - this is a voice conversation.
//               `,
//         },
//       ],
//     },
//     clientMessages: [],
//     serverMessages: [],
//   };
//   return vapiAssistant;
// };
