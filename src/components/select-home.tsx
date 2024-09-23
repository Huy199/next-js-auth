"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SelectHome() {
  const [open, setOpen] = useState<number>(2);
  const router = useRouter();
  const handleSearch = () => {
    router.push("/list");
  };
  return (
    <div className="">
      <div className="flex justify-center py-[10px] px-[10px] lg:pl-[20px] lg:pr-[16px] bg-white rounded-full">
        <div className="px-2 sm:pl-[17px] sm:pr-[10px] h-[46px] w-3/5 sm:w-1/2 border-r border-[#d7d7d7]">
          <input
            placeholder="Nhập địa điểm"
            className="w-full h-full border-none outline-none"
            onClick={() => {
              open !== 0 && setOpen(0);
            }}
            onBlur={() => setOpen(2)}
          />
        </div>

        <div className="px-2 sm:pl-[17px] sm:pr-[10px] h-[46px] sm:flex-1 w-2/5 sm:w-1/2 truncate">
          <input
            placeholder="Giao lưu"
            className="h-full flex items-center justify-start border-none outline-none"
            onClick={() => {
              open !== 1 && setOpen(1);
            }}
            onBlur={() => setOpen(2)}
          />
        </div>
        <button
          aria-label="Tìm kiếm"
          title="Tìm kiếm"
          className="ml-1 w-[44px] h-[44px] flex-shrink-0 flex justify-center items-center bg-primary rounded-full text-white"
          onClick={handleSearch}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            className="stroke-white stroke-[16px]"
            height="26"
            width="26"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M443.5 420.2L336.7 312.4c20.9-26.2 33.5-59.4 33.5-95.5 0-84.5-68.5-153-153.1-153S64 132.5 64 217s68.5 153 153.1 153c36.6 0 70.1-12.8 96.5-34.2l106.1 107.1c3.2 3.4 7.6 5.1 11.9 5.1 4.1 0 8.2-1.5 11.3-4.5 6.6-6.3 6.8-16.7.6-23.3zm-226.4-83.1c-32.1 0-62.3-12.5-85-35.2-22.7-22.7-35.2-52.9-35.2-84.9 0-32.1 12.5-62.3 35.2-84.9 22.7-22.7 52.9-35.2 85-35.2s62.3 12.5 85 35.2c22.7 22.7 35.2 52.9 35.2 84.9 0 32.1-12.5 62.3-35.2 84.9-22.7 22.7-52.9 35.2-85 35.2z"></path>
          </svg>
        </button>
      </div>
      <div className="relative flex justify-center">
        {open === 0 ? (
          <dialog
            className="menu rounded-3xl w-full bg-white text-sm z-10 left-0 top-3 px-4 py-6 sm:px-6"
            open={open === 0 ? true : false}
          >
            <button className="w-full mb-[28px] rounded-full hover:bg-neutral-200 transition flex items-center">
              <div className="mr-[15px] p-[10px] rounded-full bg-primary">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  className="flex-shrink-0 stroke-white fill-white"
                  height="22"
                  width="22"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3A8.994 8.994 0 0 0 13 3.06V1h-2v2.06A8.994 8.994 0 0 0 3.06 11H1v2h2.06A8.994 8.994 0 0 0 11 20.94V23h2v-2.06A8.994 8.994 0 0 0 20.94 13H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path>
                </svg>
              </div>
              <div className="">
                <span className="text-black-ish-200 text-[16px] font-bold">
                  Dùng vị trí hiện tại
                </span>
              </div>
            </button>
            <div className="mb-[19px]">
              <strong className="text-black-ish-200 text-[16px]">
                Địa chỉ phổ biến
              </strong>
            </div>
            <div className="flex flex-wrap gap-2">
              <button className="py-[10px] px-[20px] rounded-full border border-[#c9c9c9] hover:border-[#232323] transition">
                <span className="text-black-ish-200 font-semibold">Hà Nội</span>
              </button>
              <button className="py-[10px] px-[20px] rounded-full border border-[#c9c9c9] hover:border-[#232323] transition">
                <span className="text-black-ish-200 font-semibold">
                  Hồ Chí Minh
                </span>
              </button>
            </div>
          </dialog>
        ) : open === 1 ? (
          <dialog
            className="menu rounded-3xl w-full bg-white text-sm z-10 left-0 top-3 px-4 py-6 sm:px-6"
            open={open === 1 ? true : false}
          >
            <div className="mb-[19px]">
              <strong className="text-black-ish-200 text-[16px]">Loại</strong>
            </div>
            <div className="space-y-[14px]">
              <button className="p-2 py-3 sm:p-4 sm:pt-5 border w-full rounded-2xl hover:border-primary hover:bg-primary/5 border-primary bg-primary/5">
                <div className="sm:flex space-y-2 sm:space-y-0">
                  <div className="px-[10px]">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      className="flex-shrink-0"
                      height="24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="32"
                        d="M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0 0 25.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z"
                      ></path>
                      <circle
                        cx="256"
                        cy="192"
                        r="48"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="32"
                      ></circle>
                    </svg>
                  </div>
                  <div className="text-left px-[10px] text-black-ish-200">
                    <p className="pb-[5px] text-[16px] font-medium">Giao lưu</p>
                    <p className="font-semibold">
                      Tìm ca giao lưu (vãng lai) cầu lông gần bạn
                    </p>
                  </div>
                </div>
              </button>
              <button className="p-2 py-3 sm:p-4 sm:pt-5 border w-full rounded-2xl hover:border-primary hover:bg-primary/5 border-[#c9c9c9]">
                <div className="sm:flex space-y-2 sm:space-y-0">
                  <div className="px-[10px]">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      className="flex-shrink-0"
                      height="24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M120.8 55L87.58 199h18.52l29.1-126h18.2l-20.6 126h18.3l10.1-62H247v62h18v-62h85.8l10.1 62h18.3L358.6 73h18.2l29.1 126h18.5L391.2 55H120.8zm50.9 18h168.6l7.6 46H164.1l7.6-46zM73 217v30h366v-30H73zm-.64 48L20.69 489H491.3l-51.7-224h-18.5l47.6 206h-45L390 265h-18.3l14.2 87H265v-87h-18v87H126.1l14.2-87H122L88.35 471H43.31l47.56-206H72.36zm50.74 105h265.8l16.5 101H106.6l16.5-101z"></path>
                    </svg>
                  </div>
                  <div className="text-left px-[10px] text-black-ish-200">
                    <p className="pb-[5px] text-[16px] font-medium">Sân đấu</p>
                    <p className="font-semibold">Tìm sân cầu lông gần bạn</p>
                  </div>
                </div>
              </button>
            </div>
          </dialog>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
