export default function BrowserMockup() {
  return (
    <div className="relative w-full hover:scale-[101%] transition-all duration-500">
      <div className="bg-gray-100 rounded-lg border border-gray-300">
        <div className="flex items-center px-2 sm:px-4 py-1.5 sm:py-2 bg-gray-100 rounded-t-lg">
          <div className="flex space-x-1.5 sm:space-x-2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex-1 ml-2 sm:ml-4">
            <div className="bg-white rounded-md px-2 py-1 sm:py-1.5 text-xs sm:text-sm text-gray-700 font-mono text-left truncate">
              item.store/stanfordsoccer2026
            </div>
          </div>
        </div>

        <div className="bg-white rounded-b-lg aspect-video flex items-center justify-center px-4 sm:px-6 py-8 sm:py-12">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center sm:items-start">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[96px] leading-none sm:leading-[96px] font-semibold tracking-tight">
              404
            </h1>
            <div className="sm:mt-1 text-sm sm:text-base md:text-lg leading-5 sm:leading-6 text-center sm:text-left">
              <p>we&apos;re still under construction</p>
              <p className="text-muted-foreground break-all sm:break-normal">
                renmic [at] stanford [at] edu for inquiries
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
