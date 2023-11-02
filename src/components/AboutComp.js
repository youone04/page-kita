export default function AboutComp() {
  return (
    <div className="bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 flex flex-col lg:flex-row mt-3">
      <div className="bg-green-500 w-full lg:w-1/2 p-4">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full p-4 flex items-center justify-center">
            <div className="bg-blacks w-full flex items-center justify-center rounded-md">
              <img
                data-aos="fade-up"
                src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg"
                style={{
                  clipPath:
                    "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
                  borderRadius: "38%",
                }}
              />
            </div>
          </div>

          <div className="w-full p-4 flex items-center justify-center">
            <div className="relative w-full flex items-center justify-center rounded-md">
              <img
                src="https://img.freepik.com/free-photo/young-woman-white-shirt-pointing-up_1150-27592.jpg?size=626&ext=jpg"
                style={{
                  clipPath:
                    "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
                  borderRadius: "48%",
                }}
                className="mx-auto lg:mt-10"
                data-aos="fade-down"
              />
              <div
                className="w-full h-full lg:w-4/5 lg:h-1/2 bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 opacity-50"
                style={{
                  position: "absolute",
                  // top: 0,
                  // left: 0,
                  bottom: 0,
                  // width: "60%",
                  // height: "50%",
                  borderRadius: "48%",
                }}
              ></div>
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
