import React from "react";

function SelfDiagnosis() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-500"style={{ background: '#ededed' }}>
      <div className="text-center mb-8 ">
        <h1 className="text-3xl font-bold mb-2">SELF DIAGNOSIS</h1>
        <p className="text-black-700">
          In self diagnosis, please be sure that the data you provide us is accurate, in order for us to give you proper diagnosis and instructions. Thank you!
        </p>
      </div>
      <div className="bg-custom-color p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <form className="bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-5">
              <label htmlFor="floating_name" className="text-center block text-gray-700 font-semibold mb-1">Click the button below to start self-diagnosis</label>
              <div className="text-center">
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-sm px-5 py-2.5"
                >
                  Continue
                </button>
              </div>
            </div>
          </form>

          <form className="bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-5">
              <label htmlFor="floating_sex" className="block text-gray-700 font-semibold mb-1">Sex</label>
              <input
                type="text"
                name="floating_sex"
                id="floating_sex"
                className="block w-full py-2.5 px-4 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none"
                placeholder="Enter your sex"
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="floating_history" className="block text-gray-700 font-semibold mb-1">History</label>
              <input
                type="text"
                name="floating_history"
                id="floating_history"
                className="block w-full py-2.5 px-4 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none"
                placeholder="Enter your medical history"
                required
              />
            </div>
          </form>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-sm px-5 py-2.5"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default SelfDiagnosis;
