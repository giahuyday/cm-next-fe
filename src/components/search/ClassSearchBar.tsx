"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useState } from "react";
import { Class } from "@/type/type";
import Link from "next/link";

export default function SearchBar() {
    const [courseName, setCourseName] = useState<string>("");
    const [searchedCourse, setSearchedCourse] = useState<Class[]>([]);
    const [searchState, setSearchState] = useState<boolean>(false);

    const handleSearchCourse = async () => {
        try {
            const response = await axios({
                method: "get", // Thay đổi thành POST
                url: `${process.env.NEXT_PUBLIC_API_URL}/class/api/get_courses`,
                headers: {
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_PERM}`,
                    "Content-Type": "application/json", // Xác định kiểu dữ liệu JSON
                },
            });

            setSearchedCourse(response.data);
            if (searchedCourse.length != 0) {
                setSearchState(true);
            }
        } catch (error: any) {
            console.error("Error:", error.response?.data?.devMessage || error.message);
        }
    };

    return (
        <>
            <div id="filter" className="relative group p-2">
                <div className="cursor-pointer group-hover:block uppercase">filter</div>
                <div className="absolute hidden group-hover:block top-0 mt-[20px] left-0  backdrop-blur-sm bg-white/90 bg-white z-10 p-2 border shadow-lg text-black min-w-[5rem]">
                    <label className="flex items-center gap-2 hover:bg-gray-100 p-1 cursor-pointer">
                        <input type="radio" name="filterType" value="Filter 1" className="cursor-pointer" />
                        <span className="capitalize">Filter 1</span>
                    </label>
                </div>
            </div>
            <div className="flex border group rounded max-h-[4rem] p-2 relative">
                <input
                    type="text"
                    className="bg-transparent flex-grow"
                    placeholder="Fill course name to search"
                    value={courseName}
                    onChange={(e) => setCourseName(e.target.value)}
                />
                <button type="button" onClick={handleSearchCourse}>
                    <FontAwesomeIcon icon={faSearch} className="fa-fw" />
                </button>
                {searchState ? (
                    <div
                        id="search-list"
                        className="absolute group-hover:block hidden max-w-[20rem] max-h-[20rem] overflow-scroll overscroll-x-none top-0 left-0 mt-[60px] border p-2 backdrop-blur-sm bg-white/90 text-black"
                    >
                        {searchedCourse.map((course) => (
                            <div key={course.id} className="hover:bg-blue-600">
                                <Link href={`/class/${course?.id}`} className="uppercase">
                                    - {course?.name}
                                </Link>
                            </div>
                        ))}
                    </div>
                ) : null}
            </div>
        </>
    );
}
