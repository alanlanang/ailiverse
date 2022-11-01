import React from "react";
import { IoMdClose } from "react-icons/io";
import { HiPencil, HiOutlineTag } from "react-icons/hi";
import { MdRefresh, MdLightbulbOutline } from "react-icons/md";
import "./style.scss";

const developMensteps = [
  { idx: 1, title: "Describe", description: "State your Use Case" },
  { idx: 2, title: "Upload", description: "Add and label your dataset" },
  { idx: 3, title: "Train", description: "Train your AI model" },
  { idx: 4, title: "Infer", description: "Test your AI model" },
];

const IntroCard = () => {
  return (
    <div className="introCardContainer">
      <div className="introCardInner">
        <div className="w-1/3">
          <p className="title">
            Deep Learning Model <br /> development
            <span className="text-yellow-500 italic ml-1">made easy</span>
          </p>
          <p className="text-[11px] text-gray-300 w-64 mt-1">
            AutoDL makes it easy to create your <br /> bespoke deep learning
            model in just 4 steps.
          </p>
        </div>
        <div className="ml-16 flex w-2/3">
          {developMensteps &&
            developMensteps.map((step) => (
              <DevelopmenStep
                key={step.idx}
                idx={step.idx}
                description={step.description}
                title={step.title}
              />
            ))}
        </div>
        <IoMdClose color="#9A9A9A" className="closeIcon" />
      </div>
    </div>
  );
};

const DevelopmenStep = ({ idx, title, description }) => {
  const IconStep = ({ idx }) => {
    switch (idx) {
      case 1:
        return <HiPencil color="orange" className="w-6 h-6 ml-6" />;
      case 2:
        return <HiOutlineTag color="orange" className="w-6 h-6 ml-6" />;
      case 3:
        return <MdLightbulbOutline color="orange" className="w-6 h-6 ml-6" />;
      default:
        return <MdRefresh color="orange" className="w-6 h-6 ml-6" />;
    }
  };

  return (
    <div className=" mr-4">
      <IconStep idx={idx} />
      <div className="bg-grenAV20  h-4 w-32 rounded-md mt-2 flex">
        <div className="w-4 h-4 rounded-full bg-darkCyanAV flex items-center justify-center">
          <p className="text-gray-100 text-[11px] font-semibold">{idx}</p>
        </div>
        <p className="text-yellow-500 text-[11px] font-semibold ml-2">
          {title}
        </p>
      </div>
      <p className="text-gray-300 text-[10px] mt-1 ml-6">{description}</p>
    </div>
  );
};

export default IntroCard;
