import DashboardSidebar from "@/app/Components/DashboardSidebar";
import Header from "@/app/Components/Header";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog";
import React from "react";

const EditSlack = () => {
  const data = [
    {
      name: "Name",
      value: "slack",
    },
    {
      name: "Serial",
      value: 1625262728,
    },
    {
      name: "Category",
      value: "Chat app",
    },
    {
      name: "Seats",
      value: 5,
    },
    {
      name: "Department",
      value: "IT",
    },
    {
      name: "Manufacturer",
      value: "Microsoft",
    },
    {
      name: "Licence to Name",
      value: "Thien",
    },
    {
      name: "Licence to Name",
      value: "Thien",
    },
    {
      name: "Supplier",
      value: "Goka",
    },
    {
      name: "Reassignable",
      value: true,
    },
    {
      name: "Currently Assigned To",
      value: "Thien",
    },
    {
      name: "Color",
      value: "blue",
    },
    {
      name: "CheckBox",
      value: "",
    },
    {
      name: "Order Number",
      value: "",
    },
    {
      name: "Purchase Cost",
      value: "",
    },
    {
      name: "Purchase Date",
      value: "",
    },
    {
      name: "Expiratuon Date",
      value: "",
    },
    {
      name: "Termination Date",
      value: "",
    },
    {
      name: "Purchase Order Number",
      value: "",
    },
    {
      name: "Notes",
      value: "",
    },
    {
      name: "Created At",
      value: "Nov 23, 2022",
    },
    {
      name: "Updatd At",
      value: "Nov 23, 2022",
    },
  ];
  return (
    <div>
      <div className="flex">
        <section className="pt-24 pb-10 px-10 w-full h-screen bg-slate-900 overflow-y-scroll">
          <div className="flex flex-row items-center h-8 justify-between ">
            <p className="text-2xl font-bold">Edit License - {data[0].value}</p>
            <div className="space-x-2">
              <AlertDialogCancel>Back</AlertDialogCancel>
            </div>
          </div>
          <div className="pt-8">
            <table className="w-full text-xl text-left dark:text-gray-400">
              <tbody>
                {data.map((data, _) => (
                  <tr
                    key={_}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {data.name}
                    </th>
                    <td className="px-6 py-4">
                      <input
                        contentEditable="true"
                        type="text"
                        value={`${data.value}`}
                        className="input_field"
                        required
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="py-10 flex justify-center gap-4">
            <AlertDialogFooter>
              <AlertDialogCancel>cancel</AlertDialogCancel>
              <AlertDialogAction>save</AlertDialogAction>
            </AlertDialogFooter>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EditSlack;
