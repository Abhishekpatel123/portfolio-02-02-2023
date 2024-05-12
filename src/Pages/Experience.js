import React from "react";
import Work from "../Components/Work";
import { workExperiences } from "../db";
import { eduDetails } from "../Details";

function Experience() {
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading  md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Work Experience
        </h1>
        {React.Children.toArray(
          workExperiences.map(
            (
              {
                Position,
                Company,
                Location,
                Type,
                Duration,
                points,
                images,
                links,
              },
              idx
            ) => (
              <Work
                key={`work-${idx}`}
                position={Position}
                company={Company}
                location={Location}
                type={Type}
                duration={Duration}
                points={points}
                images={images}
                links={links}
              />
            )
          )
        )}
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading  md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Education
        </h1>
        {React.Children.toArray(
          eduDetails.map(
            ({ Position, Company, Location, Type, Duration }, idx) => (
              <Work
                key={`edu-detail-${idx}`}
                position={Position}
                company={Company}
                location={Location}
                type={Type}
                duration={Duration}
              />
            )
          )
        )}
      </section>
    </main>
  );
}

export default Experience;
