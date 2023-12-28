import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import digincylogo from "../../public/icons/digency_logo.png";
import { AlignJustify } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  return (
    <header className="flex justify-between py-8 mx-4 md:mx-20 ">
     
      <div>
        <Image
          src={digincylogo}
          alt="Picture of the author"
          width={50}
          height={50}
        />
      </div>
      <div className="flex items-center gap-4">
        <Button className="bg-[#FFFFFF] hidden md:block  text-[#000000] rounded-none hover:bg-[#FFFFFF] pb-2 px-5">
          Request a quote
        </Button>
        <Sheet>
          <SheetTrigger>
            <AlignJustify size={20} color="#ffff" />{" "}
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>Services</SheetDescription>
              <SheetDescription>Our Work</SheetDescription>
              <SheetDescription>About</SheetDescription>
              <SheetDescription>Resources</SheetDescription>
              <SheetDescription>Contact</SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
