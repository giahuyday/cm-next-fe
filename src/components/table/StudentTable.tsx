"use client";
import Link from "next/link";

type Student = {
    id: number;
    name: string;
    classId: number;
};

interface Props {
    students: Student[];
}

export default function Table({ students }: Props) {
    return (
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
                {students.map((student) => (
                    <tr key={student.id} className="m-h-[3rem]">
                        <td className="border border-gray-300 px-4 py-2">{student.id}</td>
                        <td className="border border-gray-300 px-4 py-2">{student.name}</td>
                        <td className="border border-gray-300 px-4 py-2">{student.classId}</td>
                        <td className="border border-gray-300 px-4 py-2">class ne</td>
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
                        <td className="w-[5rem] border border-gray-300 px-4 py-2">
                            <button className="p-2 btn-danger">Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
