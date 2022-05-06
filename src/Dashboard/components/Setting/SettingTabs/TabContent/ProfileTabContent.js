import React, { useContext } from "react";
import settingContext from "../../settingContext/settingContext";
import ChangeNameModal from "../../SettingModal/ChangeNameModal/ChangeNameModal";
import ChangePasswordModal from "../../SettingModal/ChangePasswordModal/ChangePasswordModal";

const ProfileTabContent = () => {
  const {
    changeName,
    setShowModal,
    setChangeName,
    passwordModal,
    setPasswordModal,
  } = useContext(settingContext);
  const handleChangeName = () => {
    setShowModal(true);
    setChangeName(true);
  };
  const handlePassword = () => {
    setShowModal(true);
    setPasswordModal(true);
  };
  return (
    <>
      <div className="flex flex-col space-y-4">
        <div className="">
          <h4 className="text-lg text-fontColor mb-0">Name</h4>
          <div className="flex justify-start">
            <h2 className="mb-0 mr-16 text-lg">Niranjan</h2>
            <span
              className="text-sm cursor-pointer text-primary mt-1"
              onClick={handleChangeName}
            >
              Change Name
            </span>
          </div>
        </div>
        <div className="">
          <h4 className="text-lg text-fontColor mb-0">Email</h4>
          <h2 className="mb-0 text-lg">Niranjan@gmail.com</h2>
        </div>

        <div className="">
          <h4 className="text-lg text-fontColor mb-0">Password</h4>
          <button
            className="mb-0 bg-gray-200 p-2 text-sm border-0 font-semibold"
            onClick={handlePassword}
          >
            Change password
          </button>
        </div>

        <div className="">
          <h4 className="text-lg text-gray-400 mb-0">Log out of all devices</h4>
          <p className="text-gray-400">
            You will be logged out of all other active sessions besides this one
            and will have to log back in.
          </p>
          <button className="mb-0 bg-gray-300 py-2 px-3 text-sm border-0 text-white">
            Log out
          </button>
        </div>
      </div>
      {changeName && <ChangeNameModal />}
      {passwordModal && <ChangePasswordModal />}
    </>
  );
};

export default ProfileTabContent;
