import React, { useState } from "react";
let data = [
  {
    moduleName: "Configuration",
    activityName: "Item Category",
    isCreate: false,
    isView: false,
    isEdit: false,
    isDelete: false,
    isApprove: false,
  },
  {
    moduleName: "Configuration",
    activityName: "Item",
    isCreate: false,
    isView: false,
    isEdit: false,
    isDelete: false,
    isApprove: false,
  },
  {
    moduleName: "Function",
    activityName: "Functi",
    isCreate: false,
    isView: false,
    isEdit: false,
    isDelete: false,
    isApprove: false,
  },
  {
    moduleName: "Sales",
    activityName: "Sale",
    isCreate: false,
    isView: false,
    isEdit: false,
    isDelete: false,
    isApprove: false,
  },
  {
    moduleName: "Profile",
    activityName: "Biodata",
    isCreate: false,
    isView: false,
    isEdit: false,
    isDelete: false,
    isApprove: false,
  },
];

const TaskTwo = () => {
  const [dataIteams, setDataIteams] = useState(data);
  const handleIsView = (event, acti) => {
    const iteams = [...dataIteams];
    const iteam = dataIteams.find((it) => it.activityName === acti);
    iteam[event.target.name] = event.target.checked;
    setDataIteams(iteams);
    console.log(dataIteams);
  };
  return (
    <div className='mx-8 mt-12'>
      <h2>Task-2</h2>
      <table className='table w-full border-collapse text-center'>
        <thead className='bg-green-600 text-white'>
          <tr>
            <th>Module Name</th>
            <th>Activity Name</th>
            <th>Create</th>
            <th>View</th>
            <th>Edit</th>
            <th>Delete</th>
            <th>Approve</th>
          </tr>
        </thead>
        <tbody>
          {dataIteams.map((value, index) => (
            <tr
              key={value.activityName}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-300"}
            >
              <td>{value.moduleName}</td>
              <td>{value.activityName}</td>
              <td>
                <input
                  type='checkbox'
                  name='isCreate'
                  onChange={(e) => handleIsView(e, value.activityName)}
                  checked={value.isCreate}
                />
              </td>
              <td>
                <input
                  type='checkbox'
                  name='isView'
                  onChange={(e) => handleIsView(e, value.activityName)}
                  checked={value.isView}
                />
              </td>
              <td>
                <input
                  type='checkbox'
                  name='isEdit'
                  onChange={(e) => handleIsView(e, value.activityName)}
                  checked={value.isEdit}
                />
              </td>
              <td>
                <input
                  type='checkbox'
                  name='isDelete'
                  onChange={(e) => handleIsView(e, value.activityName)}
                  checked={value.isDelete}
                />
              </td>
              <td>
                <input
                  type='checkbox'
                  name='isApprove'
                  onChange={(e) => handleIsView(e, value.activityName)}
                  checked={value.isApprove}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTwo;
