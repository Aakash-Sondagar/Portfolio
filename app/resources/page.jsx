import { getMetaData } from "@/components/common";
import ResourcesComponent from "./resources-component";

export const metadata = getMetaData("Resources - Chaos Cabinet", "/resources");

export default function ResourcesPage() {
  return <ResourcesComponent />;
}