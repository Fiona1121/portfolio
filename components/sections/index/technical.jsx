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
import content from "../../../content/index/technical.json";

/**
 * Section: Technical
 * Highlight your technical skills with a short blurb about you,
 * Then display the programs you are proficient with and the technologies you use if applicable.
 *
 * @returns {jsx} <Technical />
 */

export default function Technical() {
  return (
    <Section classProp={`${about.section} borderBottom`}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title={content.title}
          preTitle="Hardskills"
          subTitle={content.subtitle}
        />
        <section className={`${about.content} ${about.container}`}>
          <div className={about.copy}>
            <CopyBlock
              title={content.sections[0].title}
              icon={["fat", content.sections[0].icon]}
              copy={content.sections[0].description}
              iconClass={about.icon}
              containerClass={about.container}
            />
            <BadgesBlock
              title={content.sections[1].title}
              copy={content.sections[1].description}
              list={content.sections[1].badges}
              block="software"
              fullContainer="fullContainer"
              icon="grid-2-plus"
              containerClass={about.container}
              headerIcon={about.icon}
            />
            <BadgesBlock
              title={content.sections[2].title}
              copy={content.sections[2].description}
              list={content.sections[2].badges}
              block="tech"
              fullContainer="fullContainer"
              icon="laptop-code"
              containerClass={about.container}
              headerIcon={about.icon}
            />
          </div>
          <div className={`${about.image} ${about.technicalSvg}`}>
            <Image
              src="/img/dataism-24.svg"
              width={477}
              height={1111}
              alt="Data Strings 01 by Colorpong: https://ywft.us/2177b695b"
            />
          </div>
        </section>
      </Container>
    </Section>
  );
}
