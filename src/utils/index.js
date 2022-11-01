export const Users = [
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

export const Projects = [
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

export const RecentActivities = [
  { updateAt: "Yesterday", description: "User A Added you to Project X" },
  { updateAt: "2 days ago", description: "User B retrained project Y" },
  { updateAt: "3 days ago", description: "User C retrained project Y" },
  { updateAt: "3 days ago", description: "User D retrained project Y" },
  { updateAt: "3 days ago", description: "User E retrained project Y" },
];

export const DropdownLists = [
  { name: "type", placeholder: "Type", lists: ["Type 1", "Type 2", "Type 3"] },
  {
    name: "model",
    placeholder: "Model",
    lists: ["Model 1", "Model 2", "Model 3"],
  },
  { name: "sort", placeholder: "Sort", lists: ["Type", "Model"] },
];
