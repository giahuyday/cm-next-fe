"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useState } from "react";
import { Student } from "@/type/type";
import Link from "next/link";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

export default function SearchBar() {
    const [studentName, setStudentName] = useState<string>("");
    const [searchedStudent, setSearchedStudent] = useState<Student[]>([]);
    const [searchState, setSearchState] = useState<boolean>(false);
    const [searchApi, setSearchApi] = useState<string>("");
    const filter = [
        {
            id: 1,
            filterType: "class",
            filterApi: "student/api/get_by_classname",
        },
        {
            id: 2,
            filterType: "student",
            filterApi: "student/api/get_by_name",
        },
    ];

    const handleSearchStudent = async () => {
        let data: { name?: string; courseName?: string } = {};

        if (searchApi === filter[0]?.filterApi) {
            data = {
                courseName: studentName,
            };
        } else {
            data = {
                name: studentName,
            };
        }

        try {
            const response = await axios({
                method: "post", // Thay đổi thành POST
                url: `${process.env.NEXT_PUBLIC_API_URL}/${searchApi}`,
                data: data,
                headers: {
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_PERM}`,
                    "Content-Type": "application/json", // Xác định kiểu dữ liệu JSON
                },
            });

            setSearchedStudent(response?.data);
            if (searchedStudent.length != 0) {
                setSearchState(true);
            } else {
                setSearchState(false);
            }
        } catch (error: any) {
            toast.error(error.response.data.devMessage);
            console.error("Error:", error.response?.data?.devMessage || error.message);
        }
    };

    return (
        <>
            <div id="filter" className="relative group">
                <div className="cursor-pointer group-hover:block uppercase">filter</div>
                <div className="absolute hidden group-hover:block top-0 mt-[20px] left-0  backdrop-blur-sm bg-white/90 bg-white z-10 p-2 border shadow-lg text-black min-w-[5rem]">
                    {filter.map((filtering) => (
                        <label
                            key={filtering.id}
                            className="flex items-center gap-2 hover:bg-gray-100 p-1 cursor-pointer"
                        >
                            <input
                                type="radio"
                                name="filterType"
                                value={filtering.filterApi}
                                className="cursor-pointer"
                                onChange={(e) => setSearchApi(filtering?.filterApi)}
                            />
                            <span className="capitalize">{filtering.filterType}</span>
                        </label>
                    ))}
                </div>
            </div>
            <div className="flex border group rounded max-h-[4rem] p-4 relative">
                <input
                    type="text"
                    className="bg-transparent flex-grow text-white"
                    placeholder="Fill student name to search"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                />
                <button type="button" onClick={handleSearchStudent}>
                    <FontAwesomeIcon icon={faSearch} className="fa-fw" />
                </button>
                {searchState ? (
                    <div
                        id="search-list"
                        className="absolute group-hover:block hidden max-w-[20rem] max-h-[20rem] top-0 left-0 mt-[60px] border p-2 backdrop-blur-sm bg-white/90 text-black"
                    >
                        {searchedStudent.map((student) => (
                            <div key={student.id} className="hover:bg-blue-600">
                                <Link href={`/student/${student?.id}`} className="uppercase">
                                    - {student?.name}
                                </Link>
                            </div>
                        ))}
                    </div>
                ) : null}
            </div>

            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    );
}
