import SectionImageTextSplit from "@/components/section-image-text-split";
import { industriesSections } from "@/data/industries-sections";

export default function IndustriesSections() {
  return (
    <>
      {industriesSections.map(({ id, ...section }) => (
        <SectionImageTextSplit key={id} sectionId={id} {...section} />
      ))}
    </>
  );
}
