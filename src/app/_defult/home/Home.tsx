import React from "react";
import Banner from "./Banner";
import MyStory from "./MyStory";
import MissionVision from "./MissionVision";
import Lectures from "./Lectures";
import Gallery from "./Gallery";
import Blog from "./Blog";

export default function HomePage() {
  return (
    <div>
      <Banner />
      <MyStory />
      <MissionVision />
      <Lectures />
      <Gallery />
      <Blog />
    </div>
  );
}
