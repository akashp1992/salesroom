import React, { useContext } from "react";
import settingConext from "../../settingContext/settingContext";
const PasswordModalContent = () => {
  const { setShowNameModal } = useContext(settingConext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowNameModal(true);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        {/*body*/}
        <div className="relative p-6 flex-auto">
          <div>
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Enter Password
            </label>
            <input
              type="text"
              name="password"
              placeholder="Enter Password"
              className="bg-gray-50 border border-black text-gray-900 text-sm focus:outline-none block w-[400px] p-2.5"
              required
            />
          </div>
        </div>
        {/*footer*/}
        <div className="flex items-center justify-start p-6 rounded-b mb-14">
          <button className="modal-done-btn" type="submit">
            Continue
          </button>
        </div>
      </form>
    </>
  );
};

export default PasswordModalContent;
