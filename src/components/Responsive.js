export default function Responsive() {
  return (
    <>
      {" "}
      {/* repsonisve template */}
      <div class="bg-blue-500 flex flex-col sm:flex-row sm:flex-wrap">
        <div class="bg-red-500 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
          Flex item 1
        </div>
        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
          Flex item 2
        </div>
        <div class="bg-red-500 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
          Flex item 3
        </div>
        <div class="bg-green-500 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
          Flex item 4
        </div>
      </div>
      {/* responsive agar lebar item mambagi sama besar */}
      <div class="bg-blue-500 flex flex-col sm:flex-row sm:flex-wrap mt-5">
        <div class="bg-green-500 flex-1">Flex item 1</div>
        <div class="bg-yellow-500 flex-1">Flex item 2</div>
        <div class="flex-1">Flex item 3</div>
      </div>
    </>
  );
}
