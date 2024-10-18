"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DeleteIcon, LogInIcon, LogOutIcon } from "lucide-react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useState } from "react";
import { deleteAccountAction } from "./actions";

function AccountDropdown() {
  const session = useSession();
  const [open, setOpen] = useState(false);

  return (
    <>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently remove your
              account and any data you have.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={async () => {
                await deleteAccountAction();
                signOut({ callbackUrl: "/" });
              }}
            >
              Yes, delete my account
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"link"}>
            <Avatar className="mr-2">
              <AvatarImage src={session.data?.user?.image ?? ""} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            {session.data?.user?.name}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            onClick={() =>
              signOut({
                callbackUrl: "/",
              })
            }
          >
            <LogOutIcon className="mr-2" /> Sign Out
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => {
              setOpen(true);
            }}
          >
            <DeleteIcon className="mr-2" /> Delete Account
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export function Header() {
  const session = useSession();
  const isLoggedIn = !!session.data;

  return (
    <header className="bg-gradient-to-r bg-[#5500ff11] py-4 z-10 shadow-md relative transition-colors duration-500">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link
          href="/"
          className="flex gap-3 items-center text-2xl font-bold text-gray-800 dark:text-white hover:text-blue-500 transition-all duration-300"
        >
          <Image
            src="/icon.png"
            width="50"
            height="50"
            alt="the application icon of a magnifying glass"
            className="transition-transform duration-300 hover:rotate-12"
          />
          {/* Hide NexCode on small screens */}
          <span className="hidden md:block">NexCode</span>
        </Link>

        <nav className="flex gap-6 text-lg font-medium">
          {isLoggedIn && (
            <>
              <Link
                className="relative hover:text-blue-600 dark:hover:text-teal-400 transition-all duration-300 ease-in-out transform hover:scale-110 hover:-translate-y-1 
                         before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-blue-600 before:opacity-0 hover:before:opacity-100 before:transition-opacity"
                href="/browse"
              >
                Browse
              </Link>

              <Link
                className="relative hover:text-blue-600 dark:hover:text-teal-400 transition-all duration-300 ease-in-out transform hover:scale-110 hover:-translate-y-1 
                         before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-blue-600 before:opacity-0 hover:before:opacity-100 before:transition-opacity"
                href="/your-rooms"
              >
                My Studios
              </Link>
            </>
          )}
        </nav>

        <div className="flex items-center gap-6">
          {isLoggedIn ? (
            <AccountDropdown />
          ) : (
            <Button
              onClick={() => signIn()}
              variant="link"
              className="relative text-white bg-gradient-to-r from-blue-500 to-teal-500 px-4 py-2 rounded-full shadow-lg hover:from-teal-500 hover:to-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <LogInIcon className="mr-2" /> Sign In
            </Button>
          )}
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}