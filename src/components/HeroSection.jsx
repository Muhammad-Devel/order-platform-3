import React from "react";

export default function HeroSection() {
  return (
    <div className="relative isolate px-6 pt-8 lg:px-8">
      {/* Background Image */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-20 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-40"
        style={{
          backgroundImage: "url('/images/cake-banner-bg.jpg')",
        }}
      >
        <div className="relative left-[calc(50%-5rem)] aspect-[21/9] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-15rem)] sm:w-[72.1875rem]" />
      </div>

      {/* Content Section */}
      <div className="mx-auto max-w-2xl py-8 sm:py-12 lg:py-14">
        {" "}
        {/* Paddingni qisqartirdim */}
        <div className="text-center">
          {/* Title */}
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-gray-900">
            To'y va tadbirlar uchun mazali to'rtlar
          </h1>

          {/* Description */}
          <p className="mt-4 text-lg font-medium text-gray-500 sm:text-xl">
            O'zingizga mos to'rtni buyurtma qiling, biz uni yangi tayyorlab
            beramiz va manzilingizga yetkazamiz yoki olib ketishingiz mumkin.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-purple-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
            >
              Buyurtma berish
            </a>
            <a href="#" className="text-sm font-semibold text-gray-900">
              Mahsulotlarni ko'rish <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Background */}
      {/* <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-8rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-16rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div> */}
    </div>
  );
}
