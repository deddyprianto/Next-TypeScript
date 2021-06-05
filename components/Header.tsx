import React from "react";
import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";
import { session, signout, signOut, useSession } from "next-auth/client";
//
export default function Header() {
  const [session] = useSession();
  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      {/* left */}
      <div className="flex items-center">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/768px-Facebook_f_logo_%282019%29.svg.png"
          width="40"
          height="40"
          layout="fixed"
        />
        <div className="flex ml-2 items-center rounded-full bg-gray-200 p-2">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            type="text"
            className="hidden md:inline-flex flex-shrink ml-2 items-center bg-transparent outline-none placeholder-gray-500"
            placeholder="Search Facebook"
          />
        </div>
      </div>
      {/* center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon active Icon={FlagIcon} />
          <HeaderIcon active Icon={PlayIcon} />
          <HeaderIcon active Icon={ShoppingCartIcon} />
          <HeaderIcon active Icon={UserGroupIcon} />
        </div>
      </div>
      {/* right */}
      <div className="flex items-center sm:space-x-2 justify-end">
        <Image
          onClick={signOut}
          className="rounded-full cursor-pointer"
          src={session?.user?.image}
          width={40}
          height={40}
          layout={fixed}
        />
        <p className="whitespace-nowrap font-semibold pr-3">
          {session?.user?.name}
        </p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
}
