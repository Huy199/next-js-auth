import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SelectHome from "@/components/select-home";

export default function Home() {
  return (
    <main className="p-12 bg-cover bg-center h-screen w-screen bg-[url('/image/image.png')]">
      <div className="flex flex-col justify-between h-full items-center">
        <header className="flex justify-between w-full">
          <div className="scroll-m-20 text-2xl font-semibold tracking-tight text-white">
            Giao lưu cầu lông
          </div>
          <Button className="bg-sky-600 rounded-xl">Đăng tin</Button>
        </header>
        <div>
          <div className="flex justify-center align-center mb-3 mt-3">
            <div>
              <p className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-white">
                Giao lưu cầu lông
              </p>
              <p className="scroll-m-20 text-sm font-normal tracking-tight lg:text-xl text-center text-white">
                Tìm kiếm cơ hội giao lưu cầu lông
              </p>
            </div>
          </div>
          <SelectHome />
        </div>
        <footer>
          <div className="flex flex-col justify-end items-center pb-10 mt-8 mb-24">
            <div className="sm:hidden">
              <a
                className="py-3 px-6 font-semibold rounded-full text-center whitespace-nowrap hover:shadow-md transition bg-primary text-white"
                href="/search/sessions?location_id=01&amp;popup=login"
              >
                <span>Đăng ký/ Đăng nhập</span>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
