"use client";
import Link from "next/link";

type Course = {
    id: number;
    name: string;
};

interface Props {
    courses: Course[];
}

export default function Table({ courses }: Props) {
    return (
        <table className={`table-fixed col-span-7 border-gray-300 row-span-${courses.length + 1}`}>
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
                {courses.map((course) => (
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
                            <button className="p-2 btn-danger">Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
