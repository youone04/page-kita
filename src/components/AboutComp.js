export default function AboutComp() {
  return (
    <div className="bg-red-500 flex flex-col lg:flex-row">
      <div className="bg-green-500 w-full lg:w-1/2 p-4">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 p-4 ">
            <div className="bg-black w-full flex items-center justify-center rounded-md">
                <h1 className="text-black-500">Gunawan</h1>
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-4 flex items-center justify-center">
          <div className="bg-black w-full flex items-center justify-center rounded-md">
                <h1 className="text-black-500">Gunawan</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 p-4">
        <h1 className="text-black-500">Gunawan</h1>
      </div>
    </div>
  );
}
