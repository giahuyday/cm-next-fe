"use client";
import Link from "next/link";
import { Student } from "@/type/type";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ToastNotification from "../toast/toastify";

interface Props {
    students: Student[];
}

export default function Table({ students }: Props) {
    const [studentList, setStudentList] = useState<Student[]>(students);

    const handleDeleteStudent = async (id: number) => {
        try {
            const response = await axios({
                method: "post",
                url: `${process.env.NEXT_PUBLIC_API_URL}/student/api/delete`,
                headers: {
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_PERM}`,
                },
                data: {
                    id: id,
                },
            });

            if (response.status == 201) {
                toast.success("Delete Student Success !");
                const updatedStudents = studentList.filter((student) => student.id !== id);
                setStudentList(updatedStudents);
            }
        } catch (error: any) {
            toast.error(error.response.data.devMessage);
            console.error(error);
        }
    };

    useEffect(() => {}, [setStudentList]);

    return (
        <>
            <table className={`w-full table-fixed col-span-7 border-gray-300 row-span-${students.length + 1}`}>
                <thead>
                    <tr className="bg-black text-white">
                        <th className="border border-gray-300 px-4 py-2 text-left">ID</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Student Name</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Class ID</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Class Name</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">View</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Edit</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {studentList.map((student) => (
                        <tr key={student.id} className="m-h-[3rem]">
                            <td className="border border-gray-300 px-4 py-2">{student.id}</td>
                            <td className="border border-gray-300 px-4 py-2">{student.name}</td>
                            <td className="border border-gray-300 px-4 py-2">{student.classId?.id}</td>
                            <td className="border border-gray-300 px-4 py-2 lg:line-clamp-10">
                                {student.classId?.name}
                            </td>
                            <td className="w-[10rem] border border-gray-300 px-4 py-2">
                                <button className="p-2 rounded bg-blue-600 hover:bg-blue-800">
                                    <Link href={`/student/${student.id}`} className="">
                                        View Detail
                                    </Link>
                                </button>
                            </td>
                            <td className="w-[5rem] border border-gray-300 px-4 py-2">
                                <button className="px-[1rem] py-2 rounded btn-warning">Edit</button>
                            </td>
                            <td
                                className="w-[5rem] border border-gray-300 px-4 py-2"
                                onClick={() => handleDeleteStudent(student?.id)}
                            >
                                <button className="p-2 btn-danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ToastNotification />
        </>
    );
}
