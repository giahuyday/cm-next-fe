import Link from "next/link";
import path from "path";

export default function student() {
    const data = [
        {
            id: 1,
            name: "Nguyen Van A",
            email: "nguyenvana@example.com",
            classId: 1,
        },
        {
            id: 2,
            name: "Tran Thi B",
            email: "tranthib@example.com",
            classId: 1,
        },
        {
            id: 3,
            name: "Le Van C",
            email: "levanc@example.com",
            classId: 1,
        },
        {
            id: 4,
            name: "Nguyen Van A",
            email: "nguyenvana@example.com",
            classId: 1,
        },
        {
            id: 5,
            name: "Tran Thi B",
            email: "tranthib@example.com",
            classId: 1,
        },
        {
            id: 6,
            name: "Le Van C",
            email: "levanc@example.com",
            classId: 1,
        },
        {
            id: 7,
            name: "Nguyen Van A",
            email: "nguyenvana@example.com",
            classId: 1,
        },
        {
            id: 8,
            name: "Tran Thi B",
            email: "tranthib@example.com",
            classId: 1,
        },
        {
            id: 9,
            name: "Le Van C",
            email: "levanc@example.com",
            classId: 1,
        },
    ];
    return (
        <>
            <div className="h-[100vh] flex justify-center items-center z-1">
                <table className="border-collapse border border-gray-300">
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
                        {data.map((student) => (
                            <tr key={student.id} className="">
                                <td className="border border-gray-300 px-4 py-2">{student.id}</td>
                                <td className="border border-gray-300 px-4 py-2">{student.name}</td>
                                <td className="border border-gray-300 px-4 py-2">{student.classId}</td>
                                <td className="border border-gray-300 px-4 py-2">class ne</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <button className="p-2 rounded bg-blue-600 hover:bg-blue-800">
                                        <Link href={`/student/${student.id}`} className="">
                                            View Detail
                                        </Link>
                                    </button>
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <button className="px-[1rem] py-2 rounded btn-warning">Edit</button>
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <button className="p-2 btn-danger">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
