export type AboutMissionCarouselSlide = {
  id: string;
  sectionTitle: string;
  imageSrc: string;
  heading: string;
  body: string;
};

export const ABOUT_MISSION_CAROUSEL_SLIDES: AboutMissionCarouselSlide[] = [
  {
    id: "mission",
    sectionTitle: "Our Mission",
    imageSrc: "/section/mission-stats/1.jpg",
    heading: "We’re here to handle the past so you can focus on the future.",
    body: "We simplify the messy work of network transitions. Our job is to step in, secure your legacy hardware, and recover its maximum value so you can move your business forward without the headache of ‘what stays behind.’",
  },
  {
    id: "vision",
    sectionTitle: "Our Vision",
    imageSrc: "/section/mission-stats/2.jpg",
    heading: "Building a world where technology never goes to waste.",
    body: "We see a future where every retired asset is a resource, not a burden. Our goal is to lead the way in a circular economy, proving that decommissioned tech can and should power the next generation of connectivity.",
  },
  {
    id: "approach",
    sectionTitle: "Our Approach",
    imageSrc: "/section/mission-stats/3.jpg",
    heading: "Your goals are our roadmap; your security is our priority.",
    body: "We don’t believe in one-size-fits-all solutions. Our approach is built on ‘Intelligent Decommissioning’—a disciplined, data-driven process that prioritizes site safety and chain-of-custody security.",
  },
];
