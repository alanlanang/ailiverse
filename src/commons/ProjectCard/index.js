import React from "react";
import { FiTarget } from "react-icons/fi";
import { AiOutlineStar } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { MdLightbulbOutline } from "react-icons/md";
import { BiImage } from "react-icons/bi";

const ProjectCard = (props) => {
  const { data } = props;
  return (
    <>
      {data.map((item) => (
        <div className="p-5 border-2 border-accent">
          <div className="flex flex-col gap-y-2">
            <div className="flex flex-col gap-y-2 mb-12">
              <div className="flex flex-row">
                <div className="flex gap-x-3">
                  <p className="capitalize text-base text-primaryText font-semibold">
                    project {item.project_name}
                  </p>
                </div>
                <div className="flex flex-row gap-x-1">
                  {item.model.map((type, index) => (
                    <div
                      key={index}
                      className="bg-diamondAV opacity-75 px-2 py-1 rounded-lg ml-2"
                    >
                      <p className="text-darkCyanAV text-xs font-bold">
                        {type}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-primaryText opacity-50">
                {item.commit_message}
              </div>
            </div>
            <div className="flex gap-x-5 justify-between">
              <div className="flex gap-x-5">
                <div className="flex gap-x-3">
                  {/* <HiHashtag color="#0F9488" className="w-4 h-4 mt-1" /> */}
                  <BiImage color="#0F9488" className="w-4 h-4 mt-1" />
                  <p className="text-darkCyanAV">{item.type}</p>
                </div>
                <div className="flex gap-x-3">
                  <AiOutlineStar
                    color="#4a4a4a"
                    className="w-4 h-4 mt-1 opacity-50"
                  />
                  <p className="text-primaryText opacity-50">{item.stars}</p>
                </div>
                <div className="flex gap-x-3">
                  <FiTarget
                    color="#4a4a4a"
                    className="w-4 h-4 mt-1 opacity-50"
                  />
                  <p className="text-primaryText opacity-50">{item.progress}</p>
                </div>
                <div className="flex gap-x-3">
                  <MdLightbulbOutline
                    color="#4a4a4a"
                    className="w-4 h-4 mt-1 opacity-50"
                  />
                  <p className="text-primaryText opacity-50">{item.train}</p>
                </div>
                <div className="flex gap-x-3">
                  <IoPersonOutline
                    color="#4a4a4a"
                    className="w-4 h-4 mt-1 opacity-50"
                  />
                  <p className="text-primaryText opacity-50">{item.member}</p>
                </div>
              </div>
              <div className="text-primaryText opacity-50">
                {item.last_update}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectCard;
