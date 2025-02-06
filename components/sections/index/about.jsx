// Core packages
import Image from "next/image";

// Section structure
import Section from "../../structure/section";
import Container from "../../structure/container";

// Section general blocks
import SectionTitle from "../../blocks/section.title.block";
import SectionGridBg from "../../blocks/section.grid.block";

// Section specific blocks
import BadgesBlock from "../../blocks/about.badges.block";
import CopyBlock from "../../blocks/about.copy.block";

// Section scss
import about from "../../../styles/sections/index/about.module.scss";

// Section content
import content from "../../../content/index/about.json";

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 *
 * @returns {jsx} <About />
 */
export default function About() {
  return (
    <Section classProp={about.section}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title={content.title}
          preTitle={content.preTitle}
          subTitle={content.subTitle}
        />
        <section className={about.content}>
          <div className={about.image}>
            <img src={content.image} alt="Fiona profile photo" />
          </div>
          <div className={about.copy}>
            <CopyBlock
              title={content.softSkills.title}
              containerClass={about.container}
              iconClass={about.icon}
              icon={["fat", content.softSkills.icon]}
              copy={content.softSkills.description}
            />
            <BadgesBlock
              title={content.researchAndPlanning.title}
              containerClass={about.container}
              list={content.focusAreas}
              fullContainer="fullContainer"
              block="methods"
              icon={content.researchAndPlanning.icon}
              copy={content.researchAndPlanning.description}
              headerIcon={`${about.icon}`}
            />
          </div>
        </section>
      </Container>
    </Section>
  );
}
