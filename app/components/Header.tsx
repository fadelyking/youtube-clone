import { AiOutlineMenu } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { MdKeyboardVoice } from "react-icons/md";
import { RiVideoUploadLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import Image from "next/image";
export default function Header() {
    return (
        <div className="flex p-3 items-center justify-between -mt-1">
            {/* SideBar Expand */}
            <div className="flex">
                <AiOutlineMenu size={20} />

                {/* Logo */}

                <Image
                    src="/YouTube_logo_(2017).png"
                    width={100}
                    height={100}
                    alt="Youtube Logo"
                    className="ml-5"
                />
            </div>
            {/* Search Form */}
            <div className="flex items-center gap-6 ">
                <div className="flex">
                    <form className="flex items-center ml-5 border-2 border-grey rounded-3xl p-1 max-w-7xl rounded-r-none border-r-0 ">
                        <input
                            type="text"
                            id="search"
                            name="search"
                            placeholder="Search"
                            className=" p-1 rounded-3xl border-1 outline-none w-full md:w-96 focus:border-blue-400"
                        ></input>
                    </form>
                    <button className="flex justify-items-center  items-center border-2 border-grey rounded-3xl rounded-l-none px-5 bg-slate-100 hover:bg-slate-200">
                        <IoIosSearch size={25} />
                    </button>
                </div>
                {/* Voice Search */}
                <div className="bg-slate-100 p-2 rounded-3xl">
                    <MdKeyboardVoice size={25} />
                </div>
            </div>
            {/* Upload & Notifications & User*/}
            <div className="flex gap-4 pr-5">
                <div className="p-2 rounded-3xl hover:bg-slate-100 hover:shadow-md">
                    <RiVideoUploadLine size={25} />
                </div>
                <div className="p-2 rounded-3xl hover:bg-slate-100 hover:shadow-md">
                    <IoMdNotificationsOutline size={25} />
                </div>
                <div className="p-2 rounded-3xl hover:bg-slate-100 hover:shadow-md">
                    <FaRegUserCircle size={25} />
                </div>
                {/* Suggestions */}
            </div>
        </div>
    );
}
