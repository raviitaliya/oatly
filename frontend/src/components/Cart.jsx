import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import bagicon from "../assets/AddToCartSheet/bagicon.svg";
import AddToCard from "@/pages/AddToCard";
import AddToCardBtn from "./ui/AddToCardBtn";

export default function Cart({ isOpen }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AddToCardBtn />
      </SheetTrigger>
      <SheetContent className="!w-full sm:!w-full md:!w-[740px] lg:!w-[700px]">
        <SheetHeader>
          <SheetTitle>
            <div className="flex items-center gap-3">
              <div>
                <svg width="20" height="18" viewBox="0 0 20 18">
                  <path
                    d="M3 1h14l1 16H2L3 1z"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  ></path>
                  <path
                    d="M7 4v0a3 3 0 003 3v0a3 3 0 003-3v0"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  ></path>
                </svg>
              </div>
              <div>
                <p>ITEMS</p>
              </div>
            </div>
          </SheetTitle>
          <hr className="border-t border-gray-300 my-4" />
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <AddToCard />
        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
