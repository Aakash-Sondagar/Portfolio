import { getMetaData } from "@/components/common";
import WritingComponent from "./writing-component";

export const metadata = getMetaData("Writings", "/writing");

export default function WritingPage() {
  return <WritingComponent />;
}
