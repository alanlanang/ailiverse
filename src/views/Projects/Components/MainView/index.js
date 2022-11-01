import React from "react";
import Filter from "../../../../commons/Filter";
import IntroCard from "../../../../commons/IntroCard";
import { TbFolders } from "react-icons/tb";
import ProjectCard from "../../../../commons/ProjectCard";

const projects = [
  {
    project_name: "001",
    commit_message: "initial commit",
    model: ["object detection"],
    type: "image",
    train: 1,
    progress: 90,
    stars: 1,
    member: 10,
    last_update: "yesterday",
  },
  {
    project_name: "002",
    commit_message: "initial commit",
    model: ["model", "model"],
    type: "numerical",
    train: 1,
    progress: 90,
    stars: 1,
    member: 10,
    last_update: "yesterday",
  },
  {
    project_name: "003",
    commit_message: "initial commit",
    model: ["object detection"],
    type: "numerical",
    train: 1,
    progress: 90,
    stars: 1,
    member: 10,
    last_update: "yesterday",
  },
  {
    project_name: "004",
    commit_message: "initial commit",
    model: ["object detection"],
    type: "numerical",
    train: 1,
    progress: 90,
    stars: 1,
    member: 10,
    last_update: "yesterday",
  },
  {
    project_name: "005",
    commit_message: "initial commit",
    model: ["object detection"],
    type: "numerical",
    train: 1,
    progress: 90,
    stars: 1,
    member: 10,
    last_update: "yesterday",
  },
];

const recentActivities = [
  { updateAt: "Yesterday", description: "User A Added you to Project X" },
  { updateAt: "2 days ago", description: "User B retrained project Y" },
  { updateAt: "3 days ago", description: "User C retrained project Y" },
  { updateAt: "3 days ago", description: "User D retrained project Y" },
  { updateAt: "3 days ago", description: "User E retrained project Y" },
];

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
        <div className="w-full flex mt-5 gap-8">
          <div className="flex flex-col w-3/4">
            <div className="flex gap-x-3 items-center">
              <TbFolders className="w-5 h-5" />
              <p className="text-base text-primaryText font-bold capitalize">
                projects
              </p>
            </div>
            <Filter />
            <ProjectCard data={projects} />
          </div>
          <div className="w-1/4">
            <p className="text-sm mb-5">Recent Activity</p>
            {recentActivities &&
              recentActivities.map((activities, index) => (
                <RecentActivity key={index} activities={activities} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainView;
