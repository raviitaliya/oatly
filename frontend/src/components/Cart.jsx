import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import AddToCard from "@/pages/AddToCard";
import AddToCardBtn from "./ui/AddToCardBtn";
import { useProductStore } from "@/store/Store";
import { Link } from "react-router-dom";
import { LockKeyhole, LockKeyholeOpen } from "lucide-react";

export default function Cart({  isbuttonclick, variant }) {

  const { closeAddToCart, user } = useProductStore();
  return (
    <Sheet onOpenChange={(open) => !open && closeAddToCart()}>
      <SheetTrigger asChild>
        <AddToCardBtn onClick={isbuttonclick} variant={variant} />  
      </SheetTrigger>
      <SheetContent className="!w-full sm:!w-full md:!w-[740px] lg:!w-[700px] flex flex-col h-full">
        <SheetHeader>
          <SheetTitle>
            <div className="flex items-center gap-3">
              <div>
                <svg width="20" height="18" viewBox="0 0 20 18">
                  <path
                    d="M3 1h14l1 16H2L3 1z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  ></path>
                  <path
                    d="M7 4v0a3 3 0 003 3v0a3 3 0 003-3v0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  ></path>
                </svg>
              </div>
              <div>
                <p>ITEMS</p>
              </div>
            </div>
          </SheetTitle>
          <hr className="border-t border-gray-300 my-4" />
        </SheetHeader>

        <div className="flex-grow overflow-y-auto">
          <AddToCard />
        </div>

        {/* Footer should always be visible */}
        <SheetFooter className="w-full bg-black text-white p-4">
          <div className="flex w-[42.3rem] bg-white h-32 border-[1px] border-t-gray-300 fixed bottom-0 right-[23px] justify-center items-center">
            <div className="max-w-4xl mx-auto text-center">
              <Link
                to="/checkout"
                onClick={closeAddToCart}
                className="bg-black flex hover:border-none justify-center items-center gap-3 hover:bg-[#c8c8c8] hover:text-black text-white text-[22px] font-font1 w-[40rem] py-2 rounded text-center"
              >
                {!user ? (
                  <LockKeyhole size={18} strokeWidth={3} />
                ) : (
                  <LockKeyholeOpen size={18} strokeWidth={3} />
                )}{" "}
                CHECKOUT
              </Link>
            </div>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
