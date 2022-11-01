import React from "react";
import PhotoCard from "../../../../common-component/PhotoCard";
import { HiHashtag } from "react-icons/hi2";
import { BiImage } from "react-icons/bi";
import { BsCheckCircleFill } from "react-icons/bs";

const user = [
  {
    name: "User A",
    member_status: "pro",
    project: 25,
  },
  {
    name: "User B",
    member_status: "pro",
    project: 25,
  },
  {
    name: "User C",
    member_status: "pro",
    project: 25,
  },
  {
    name: "User D",
    member_status: "pro",
    project: 25,
  },
  {
    name: "User E",
    member_status: "pro",
    project: 25,
  },
];

const projects = [
  {
    project_name: "001",
    commit_message: "initial commit",
    model: ["object detection"],
    type: "image",
    train: 1,
    progress: 90,
    member: 10,
    last_update: "yesterday",
  },
  {
    project_name: "002",
    commit_message: "initial commit",
    model: ["model", "model"],
    type: "tag",
    train: 1,
    progress: 90,
    member: 10,
    last_update: "yesterday",
  },
  {
    project_name: "003",
    commit_message: "initial commit",
    model: ["object detection"],
    type: "tag",
    train: 1,
    progress: 90,
    member: 10,
    last_update: "yesterday",
  },
  {
    project_name: "004",
    commit_message: "initial commit",
    model: ["object detection"],
    type: "tag",
    train: 1,
    progress: 90,
    member: 10,
    last_update: "yesterday",
  },
  {
    project_name: "005",
    commit_message: "initial commit",
    model: ["object detection"],
    type: "tag",
    train: 1,
    progress: 90,
    member: 10,
    last_update: "yesterday",
  },
];

const Profile = (props) => {
  const { data } = props;
  const { name, member_status, project } = data;
  return (
    <div className="flex gap-x-5 p-6">
      <PhotoCard name={name} />
      <div className="flex flex-col gap-y-3">
        <div>
          <p className="text-base text-primaryText font-semibold">{name}</p>
          <div className="flex gap-2 items-center">
            <BsCheckCircleFill color="#4a4a4a" className="w-3 h-3 opacity-75" />
            <p className="capitalize text-xs text-primaryText opacity-75">
              {`${member_status} member`}
            </p>
          </div>
        </div>
        <p className="capitalize text-xs text-primaryText opacity-75">{`ceated ${project} projects`}</p>
      </div>
    </div>
  );
};

const RecentProject = (props) => {
  const { data } = props;
  return (
    <div className="p-6">
      <p className="capitalize text-base text-primaryText font-semibold mb-2">
        recent project
      </p>
      {data.slice(0, 4).map((item, index) => (
        <div key={index} className="flex gap-x-3 mb-5">
          {item.type === "tag" ? (
            <HiHashtag color="#0F9488" className="w-4 h-4 mt-1" />
          ) : (
            <BiImage color="#0F9488" className="w-4 h-4 mt-1" />
          )}
          <div className="flex flex-col gap-y-1">
            <p className="capitalize text-base text-darkCyanAV font-semibold">
              project name {item.project_name}
            </p>
            <p className="text-xs text-primaryText opacity-75">
              {item.commit_message}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

const AllUser = (props) => {
  const { user } = props;
  return (
    <div className="p-6">
      <p className="capitalize text-base text-primaryText font-semibold mb-2">
        all member
      </p>
      <div className="flex gap-2">
        {user.map((user, index) => (
          <div key={index}>
            <PhotoCard name={user.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

const SidePanel = () => {
  return (
    <div className="sidePanel">
      <div className="sidePanelInner">
        <Profile data={user[0]} />
        <div className="sidePanelLine" />
        <RecentProject data={projects} />
        <div className="sidePanelLine" />
        <AllUser user={user} />
      </div>
    </div>
  );
};

export default SidePanel;
