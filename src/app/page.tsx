import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-12">
      <div className="flex justify-between w-full">
        <div className="scroll-m-20 text-2xl font-semibold tracking-tight text-sky-600">
          Giao lưu cầu lông
        </div>
        <Button className="bg-sky-600 rounded-xl">Đăng tin</Button>
      </div>
      <div className="mx-auto">
        <div>
          <p className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Giao lưu cầu lông
          </p>
          <p className="scroll-m-20 text-sm font-normal tracking-tight lg:text-xl text-center">
            Tìm kiếm cơ hội giao lưu cầu lông
          </p>
        </div>
      </div>
    </main>
  );
}
