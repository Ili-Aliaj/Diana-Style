import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

function HomePageTitle() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
        <meta
        name="description"
        content="Diana Style, fustane me porosi, fustane me qera dhe fustane ne shitje sipas deshires."
      />
      <meta
        name="keywords"
        content="fustane, fustane me qera, fustane me porosi, veshje, veshje islame, veshje me porosi, rroba, rroba per te rritur, rroba per femije"
      />
        </Helmet>
      </div>
    </HelmetProvider>
  );
}

export default HomePageTitle;
