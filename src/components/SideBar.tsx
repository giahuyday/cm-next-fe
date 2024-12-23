"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Sidebar() {
    const [openClass, setOpenClass] = useState(false);
    const [openStudent, setOpenStudent] = useState(false);

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-4">
                <h1>Sidebar</h1>
                <FontAwesomeIcon icon={faBars} className="fa-fw" />
            </div>
            <ul className="grid gird-rows-1 gap-4">
                {/* Lớp học */}
                <li>
                    <button
                        onClick={() => setOpenClass(!openClass)}
                        className="flex items-center justify-between w-full"
                    >
                        <span>Classes</span>
                        <div className="">
                            {openClass ? (
                                <FontAwesomeIcon icon={faChevronDown} className="fa-fw" />
                            ) : (
                                <FontAwesomeIcon icon={faChevronRight} className="fa-fw" />
                            )}
                        </div>
                    </button>
                    {openClass && (
                        <ul className="grid gap-1 mt-1 ml-4 p-2">
                            <li className="hover:bg-blue-900 w-full p-2">
                                <a href="#">+ Create class</a>
                            </li>
                            <li className="hover:bg-blue-900 w-full p-2">
                                <a href="/class">+ View class list</a>
                            </li>
                            <li className="hover:bg-blue-900 w-full p-2">
                                <a href="#">+ Update class</a>
                            </li>
                            <li className="hover:bg-blue-900 w-full p-2">
                                <a href="#">+ Delete class</a>
                            </li>
                        </ul>
                    )}
                </li>

                <li>
                    <button
                        onClick={() => setOpenStudent(!openStudent)}
                        className="flex items-center justify-between w-full"
                    >
                        <span>Student </span>
                        <div>
                            {openStudent ? (
                                <FontAwesomeIcon icon={faChevronDown} className="fa-fw" />
                            ) : (
                                <FontAwesomeIcon icon={faChevronRight} className="fa-fw" />
                            )}
                        </div>
                    </button>
                    {openStudent && (
                        <ul className="grid gap-1 mt-1 ml-4">
                            <li className="hover:bg-blue-900 w-full p-2">
                                <a href="/student/create">+ Create student</a>
                            </li>
                            <li className="hover:bg-blue-900 w-full p-2">
                                <a href="/student">+ View student list</a>
                            </li>
                            <li className="hover:bg-blue-900 w-full p-2">
                                <a href="#">+ Update student</a>
                            </li>
                            <li className="hover:bg-blue-900 w-full p-2">
                                <a href="#">+ Delete student</a>
                            </li>
                        </ul>
                    )}
                </li>
            </ul>
        </div>
    );
}
