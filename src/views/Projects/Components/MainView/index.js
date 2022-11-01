import React from "react";
import Filter from "../../../../commons/Filter";
import IntroCard from "../../../../commons/IntroCard";
import { TbFolders } from "react-icons/tb";
import ProjectCard from "../../../../commons/ProjectCard";
import { RecentActivities, Projects } from "../../../../utils";

const RecentActivity = (props) => {
  const { activities } = props;
  return (
    <div className="border-l-2 border-darkCyanAV pl-3 relative pt-1 h-16">
      <p className="text-xs text-primaryText">{activities.updateAt}</p>
      <p className="mt-1 text-sm">{activities.description}</p>
      <div className="h-2 w-2 rounded-full bg-darkCyanAV absolute top-[-2px] left-[-5px]" />
    </div>
  );
};

const MainView = () => {
  return (
    <div className="mainView">
      <div className="mainViewInner">
        <IntroCard />
        <div className="w-full flex mt-5 gap-12">
          <div className="flex flex-col w-3/4">
            <div className="flex gap-x-3 items-center">
              <TbFolders className="w-5 h-5" />
              <p className="text-base text-primaryText font-bold capitalize">
                projects
              </p>
            </div>
            <Filter />
            <ProjectCard data={Projects} />
          </div>
          <div className="w-1/4">
            <p className="text-sm mb-5">Recent Activity</p>
            {RecentActivities.map((activities, index) => (
              <RecentActivity key={index} activities={activities} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainView;
