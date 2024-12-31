"use client";
import { Class } from "@/type/type";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ToastNotification from "../toast/toastify";

interface Props {
    courses: Class[];
}

export default function Table({ courses }: Props) {
    const [courseList, setCourseList] = useState<Class[]>(courses);

    const handleDeleteCourse = async (id: number) => {
        try {
            const response = await axios({
                method: "post",
                url: `${process.env.NEXT_PUBLIC_API_URL}/class/api/delete`,
                headers: {
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_PERM}`,
                },
                data: {
                    id: id,
                },
            });

            if (response.status == 201) {
                toast.success("Delete Class Success !");
                const updatedStudents = courseList.filter((course) => course.id !== id);
                setCourseList(updatedStudents);
            }
        } catch (error: any) {
            toast.error(error.response.data.devMessage);
            console.error(error);
        }
    };

    useEffect(() => {}, [setCourseList]);

    return (
        <>
            <table className={`w-full table-fixed col-span-7 border-gray-300 row-span-${courses.length + 1}`}>
                <thead>
                    <tr className="bg-black text-white">
                        <th className="border border-gray-300 px-4 py-2 text-left">Class ID</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Class Name</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">View</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Edit</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {courseList.map((course) => (
                        <tr key={course.id} className="m-h-[3rem]">
                            <td className="border border-gray-300 px-4 py-2">{course.id}</td>
                            <td className="border border-gray-300 px-4 py-2">{course.name}</td>
                            <td className="w-[10rem] border border-gray-300 px-4 py-2">
                                <button className="p-2 rounded bg-blue-600 hover:bg-blue-800">
                                    <Link href={`/course/${course.id}`} className="">
                                        View Detail
                                    </Link>
                                </button>
                            </td>
                            <td className="w-[5rem] border border-gray-300 px-4 py-2">
                                <button className="px-[1rem] py-2 rounded btn-warning">Edit</button>
                            </td>
                            <td className="w-[5rem] border border-gray-300 px-4 py-2">
                                <button className="p-2 btn-danger" onClick={() => handleDeleteCourse(course.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ToastNotification />
        </>
    );
}
