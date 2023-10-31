export default function SolutionComp() {
  return (
    <>
      {/* flex-col => agar tampilan flex kebawah */}
      <div className="flex bg-white mt-14 items-center justify-center">
        {/* lg:w-4/5 w-full => berfungsi responsive mengubah ukuran saat ukuran layar berubah */}
        <div
          // style={{ height: 220 }}
          className="
          flex flex-col
          w-full 
          lg:rounded-full 
          lg:w-4/5 
          md:flex-row 
          md:flex-wrap 
          bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 m-3"
        >
          <div
            // style={{ height: 220 }}
            className="
            flex-1 
            rounded-80
            sm:rounded-80
            md:rounded-full
            lg:rounded-full
            xl:rounded-full
            bg-gradient-to-r 
            from-green-300 via-teal-300 to-blue-300 
            m-1
            flex-row flex-wrap
            sm:flex-row sm:flex-wrap
            "
          >
            <div className="flex flex-col w-full sm:flex-row sm:flex-wrap ">
              <div className="flex-2">
                <img
                  className="mx-auto"
                  src="https://hrkit.rometheme.pro/zevana/wp-content/uploads/sites/75/2023/05/icon-3-1.png"
                  style={{ width: 200 }}
                  alt="test"
                />
              </div>

              <div className="flex-1">
                <div className="lg:p-5">
                  <h1>Digital Marketing</h1>
                </div>
              </div>
            </div>
          </div>

          <div
            className="
            flex-1 
            m-1
            flex-row flex-wrap
            md:flex-row md:flex-wrap"
          >
            <div className="lg:p-5">yudi gunawan</div>
          </div>
        </div>
      </div>

      <div class="flex flex-col mb-3">
        <div class="p-4 bg-blue-500">Item 1</div>
        <div class="p-4 bg-green-500">Item 2</div>
        <div class="p-4 bg-red-500">Item 3</div>
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
