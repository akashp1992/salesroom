import { from } from "git-cz";
import React, { useEffect, useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { useUploadDocumentMutation } from '../../../../../store/services/documentServices/documentServices';

const BrandingTabContent = () => {
  const [imageData, result] = useUploadDocumentMutation();
  const [uploadInfos, setUploadInfos] = useState([])
  const [image, setImage] = useState({ preview: "", raw: "", name: "" });
  const handleChange = e => {
    e.preventDefault();
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
        name: e.target.files[0].name
      });
      setUploadInfos({ "fileName": image.name, "path": image.raw })
    }
  };
  const formData = new FormData();
  console.log("image", image.raw);
  formData.append("file", image.raw);
  formData.append("path", image.name);
  useEffect(() => {
    imageData({
      businessId: "43652f2d-7324-43be-bd81-34f2af6e34a6",
      category: "IMAGES",
      file: formData,
    })
  }
    , [image]);
  return (
    <form>
      <h1 className="text-primary text-2xl">Logo</h1>
      <div className="w-36 h-26 border-2 border-gray-400">
        {image.preview ? (
          <img src={image.preview} alt="dummy" width="300" height="300" />
        ) : (<img
          className="w-full h-full cursor-pointer"
          src={require("../../../../../Assets/images/image/product1.png")}
          alt="product"
        />
        )}
      </div>
      <div className="flex items-center mb-10">
        <div className="flex items-center justify-start mt-4 mr-3">
          <button className="flex items-center justify-center modal-cancle-btn !capitalize">
            Delete
            <span className="ml-2 text-lg">
              <MdDelete />
            </span>
          </button>
        </div>
        <div className="flex items-center justify-start mt-4">
          <label
            for="logoUpload"
            className="flex items-center justify-center modal-cancle-btn !bg-gray-400 !capitalize cursor-pointer"
          >
            Edit
            <span className="ml-2 text-lg">
              <MdEdit />
            </span>
          </label>
          <input type="file" id="logoUpload" accept="image/*" onChange={handleChange} hidden></input>
        </div>
      </div>
      <h1 className="text-primary text-2xl">Company Website</h1>
      <input
        type="text"
        placeholder="Paste company website link"
        name="companyWebsite"
        className="border-2 border-gray-400 focus:outline-none text-lg mb-10"
      />
      <h1 className="text-primary text-2xl">Social Media</h1>
      <div>
        <div className="flex items-center">
          <h2 className="text-lg w-44">Linkedin</h2>
          <input
            type="text"
            placeholder="Paste company linkedin profile link"
            name="companyWebsite"
            className="border-2 border-gray-400 focus:outline-none text-lg mb-3"
          />
        </div>
        <div className="flex items-center">
          <h2 className="text-lg w-44">Facebook</h2>
          <input
            type="text"
            placeholder="Paste company Facebook profile link"
            name="companyWebsite"
            className="border-2 border-gray-400 focus:outline-none text-lg mb-3"
          />
        </div>
        <div className="flex items-center">
          <h2 className="text-lg w-44">Instagram</h2>
          <input
            type="text"
            placeholder="Paste company Instagram profile link"
            name="companyWebsite"
            className="border-2 border-gray-400 focus:outline-none text-lg mb-3"
          />
        </div>
      </div>
      <button className="modal-cancle-btn ml-auto block" type="submit">Submit</button>
    </form>
  );
};

export default BrandingTabContent;
