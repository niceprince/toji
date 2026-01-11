import AboutDetails from "@/components/about/AboutDetails";
import LeftContentAbout from "@/components/about/LeftContentAbout";
import PageContainer from "@/components/common/PageContainer";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About | Toji Communication Consultancy",
  description:
    "There's little that communication cannot solve. If you have a problem, we have a solution. Try us.",
};

const About = () => {
  return (
    <>
      <PageContainer
        LeftContents={<LeftContentAbout />}
        RightcontentItems={<AboutDetails />}
      />
    </>
  );
};

export default About;
