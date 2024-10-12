import FeatureText from "./FeatureText";
import Button from "./Button";

const featureItems = [
  "mountains",
  "forests",
  "deserts",
  "ancient ruins",
  "abilities",
  "puzzles",
  "Time Trials",
  "Exploration Mastery",
];

const Features = () => {
  return (
    <section className="flex flex-col items-start pb-2 mt-11 font-bold leading-none">
      <h2 className="text-3xl font-montserrat text-green-300">FEATURES</h2>
      <FeatureText featureItems={featureItems} />
      <div className="flex flex-wrap gap-10 mt-24 max-w-full text-xl whitespace-nowrap w-[490px] max-md:mt-10">
        <Button type="play" />
        <Button type="exit" />
      </div>
    </section>
  );
};

export default Features;
