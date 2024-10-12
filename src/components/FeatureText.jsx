import React from "react";

const FeatureText = ({ featureItems }) => {
  return (
    <p className="self-stretch font-bold font-montserrat mt-10 text-xl text-white max-md:mt-10 max-md:max-w-full">
      Explore a variety of landscapes, including{" "}
      {featureItems.slice(0, 4).map((item, index) => (
        <React.Fragment key={index}>
          <span className="text-green-300 font-montserrat">{item}</span>
          {index < 3 && ", "}
        </React.Fragment>
      ))}
      .<br />
      <br />
      Use the Alabay's{" "}
      <span className="text-green-300 font-montserrat">
        {featureItems[4]}
      </span>{" "}
      to solve{" "}
      <span className="text-green-300 font-bold font-montserrat">
        {featureItems[5]}
      </span>{" "}
      that involve moving objects, activating mechanisms, or finding hidden
      clues.
      <br />
      <br />
      Discover relics that tell the story of the Alabay's ancestors, each piece
      contributing to a larger narrative about the breed's role in ancient
      history.
      <br />
      <br />
      Unlock new skills and abilities for the Alabay, enhancing its capacity to
      explore and solve puzzles.
      <br />
      <br />
      Challenge Modes:
      <br />
      <br />- <span className="text-green-300">{featureItems[6]}</span>: Compete
      in special timed challenges where the Alabai must navigate through complex
      mazes or
      <br />
      complete puzzles within a time limit.
      <br />
      <br />- <span className="text-green-300">{featureItems[7]}</span>: A mode
      that rewards players for fully exploring every nook and cranny of the
      game's world,
      <br />
      uncovering all secrets
    </p>
  );
};

export default FeatureText;
