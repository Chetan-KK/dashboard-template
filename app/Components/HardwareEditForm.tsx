"use client";

import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog";
import { useState } from "react";

type props = {
  all: {
    assetName: string;
    imgSrc: string;
    model: string;
    note: string;
    orderNumber: string;
    purchaseDate: string;
    tag: string;
  };
  handleEditFunction: any;
};

const HardwareEditForm = (props: props) => {
  const data = props.all;

  const handleEdit = (e: any) => {
    props.handleEditFunction(e);
  };

  const [asset_name_input, setAsset_name_input] = useState(data.assetName);
  const [model_name_input, setModel_name_input] = useState(data.model);
  const [img_input, setImg_input] = useState(data.imgSrc);
  const [tag_name_input, setTag_name_input] = useState(data.tag);
  const [note_input, setNote_input] = useState(data.note);

  return (
    <div>
      <div className="text-xl mb-5">Update asset</div>
      <form className="space-y-4 md:space-y-6" action="" onSubmit={handleEdit}>
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <div>
            <label
              htmlFor="asset_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Asset name
            </label>
            <input
              type="text"
              name="asset_name"
              id="asset_name"
              className="input_field"
              placeholder="Enter asset name"
              required
              value={asset_name_input}
              onChange={(e: any) => setAsset_name_input(e.target.value)}
            />
          </div>
          <div>
            <img
              src={data.imgSrc}
              className="w-20 rounded-md aspect-square"
              alt=""
            />
          </div>
          <div>
            <label
              htmlFor="img_src"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select image
            </label>
            <input
              type="file"
              name="img_src"
              id="img_src"
              className="input_field"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <div>
            <label
              htmlFor="model"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Enter Model name
            </label>
            <input
              type="text"
              name="model"
              id="model"
              placeholder="Enter model name"
              className="input_field"
              required
              value={model_name_input}
              onChange={(e: any) => setModel_name_input(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="asset_tag"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Enter Asset tag
            </label>
            <input
              type="text"
              name="asset_tag"
              id="asset_tag"
              placeholder="Enter asset tag"
              className="input_field"
              required
              value={tag_name_input}
              onChange={(e: any) => setTag_name_input(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          <div>
            <label
              htmlFor="note"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Enter note
            </label>
            <input
              type="text"
              name="note"
              id="note"
              placeholder="Enter note"
              className="input_field"
              required
              value={note_input}
              onChange={(e: any) => setNote_input(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-4 items-end">
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>
              <input type="submit" value="Submit" />
            </AlertDialogAction>
          </AlertDialogFooter>
        </div>
      </form>
    </div>
  );
};

export default HardwareEditForm;
