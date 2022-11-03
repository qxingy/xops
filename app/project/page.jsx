"use client";

import From from "@/components/form/kubeyaml/deploy";
export default function Project() {
  const list = [
    {
      project_name: "test",
      create_date: "2012-01-03",
      onwer: "wxx",
    },
    {
      project_name: "test",
      create_date: "2012-01-03",
      onwer: "wxx",
    },
    {
      project_name: "test",
      create_date: "2012-01-03",
      onwer: "wxx",
    },
  ];
  return (
    <div className="overflow-x-auto">
      <From />
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th className=" text-base">项目名</th>
            <th className=" text-base">创建日期</th>
            <th className=" text-base">创建人</th>
          </tr>
        </thead>
        <tbody>
          {list.map((data, index) => (
            <tr key={index} className="hover">
              <th>{index}</th>
              <td>{data.project_name}</td>
              <td>{data.create_date}</td>
              <td>{data.onwer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
