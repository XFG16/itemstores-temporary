export default function PublicNotFoundPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-16 bg-white">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center sm:items-start">
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[144px] leading-none sm:leading-[144px] font-semibold tracking-tight">
          404
        </h1>
        <div className="sm:mt-2 text-sm sm:text-base md:text-lg lg:text-3xl leading-5 sm:leading-6 lg:leading-normal text-center sm:text-left">
          <p>we&apos;re still under construction</p>
          <p className="text-muted-foreground break-all sm:break-normal">renmic [at] stanford [at] edu for inquires</p>
        </div>
      </div>
    </main>
  );
}
