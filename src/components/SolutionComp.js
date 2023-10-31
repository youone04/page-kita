export default function SolutionComp() {
  return (
    <>
      {/* flex-col => agar tampilan flex kebawah */}
      <div className="flex bg-white mt-14 items-center justify-center">
        {/* lg:w-4/5 w-full => berfungsi responsive mengubah ukuran saat ukuran layar berubah */}
        <div
          style={{ height: 220 }}
          className="lg:w-4/5 lg:flex w-full rounded-fulls bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 m-3"
        >
          <div
            // style={{ height: 220 }}
            className="w-full rounded-full bg-gradient-to-r from-green-300 via-teal-300 to-blue-300 m-1"
          >
            <div className="flex">
              <div className="p-0">
                <img
                  src="https://hrkit.rometheme.pro/zevana/wp-content/uploads/sites/75/2023/05/icon-3-1.png"
                  style={{ width: 200 }}
                  alt="test"
                />
              </div>

              <div>
                <h3>Digital Marketing</h3>
              </div>
            </div>
          </div>

          <div className="bg-red-500 w-full rounded-full m-1">Yudi</div>
        </div>
      </div>

      {/* <div
        style={{ height: 220 }}
        className="flex lg:w-4/5 w-full rounded-full bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 m-3"
      >
        <div className="w-1/2 m-5 p-5">
         <h1>Test 1</h1>
        </div>

        <div className="w-1/2 flex justify-center">
          Test 2
        </div>

      </div> */}
    </>
  );
}
