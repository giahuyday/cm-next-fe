import Image from "next/image";
import axios from "axios";

interface Student {
    id: number;
    name: string;
    classId: number;
}

export const revalidate = 10;
export const dynamicParams = true; // or false, to 404 on unknown paths

export async function generateStaticParams() {
    const response = await axios({
        method: "get",
        url: `${process.env.NEXT_PUBLIC_API_URL}/student/api/get_students`,
        headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_PERM}`,
        },
    });
    const students: Student[] = response.data;

    return students.map((student) => ({
        id: String(student.id),
    }));
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id;

    const response = await axios({
        method: "get",
        url: `${process.env.NEXT_PUBLIC_API_URL}/student/api/get_student/${id}`,
        headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_PERM}`,
        },
    });

    const student: Student = response.data;

    return (
        <div className="w-full h-[100vh] flex items-center justify-center">
            <div id="avatar" className="flex items-center w-full h-full rounded text-white">
                <div id="intro" className="flex-1">
                    <div className="flex justify-center items-center mb-[20px]">
                        <Image
                            className="dark:invert flex justify-center"
                            src="/next.svg"
                            alt="Next.js logo"
                            width={180}
                            height={38}
                            priority
                        />
                    </div>
                    <div className="flex justify-center gap-5">
                        <button type="button" className="p-2 rounded min-w-1/3 bg-blue-600 hover:bg-blue-700">
                            Edit Avatar
                        </button>
                        <button type="button" className="p-2 min-w-1/3 btn-danger">
                            Remove
                        </button>
                    </div>
                </div>
                <div id="detail" className="w-1/2 border-l-4 border-l-white col-span-4">
                    <form className="grid grid-rows-1 gap-3 rounded p-10">
                        <h1 className="text-2xl uppercase">create new student</h1>

                        <div className="grid">
                            <label htmlFor="id">Student ID</label>
                            <input
                                readOnly
                                className="p-2 rounded w-1/2 min-w-fit"
                                type="text"
                                id="id"
                                placeholder="Fill student name"
                                value={student?.id}
                            />
                        </div>

                        <div className="grid">
                            <label htmlFor="name">Student name</label>
                            <input
                                readOnly
                                className="p-2 rounded w-1/2 min-w-fit"
                                type="text"
                                id="name"
                                placeholder="Fill student name"
                                value={student?.name}
                            />
                        </div>

                        <div className="grid">
                            <label htmlFor="class">Student class</label>
                            <input
                                readOnly
                                className="p-2 rounded w-1/2 min-w-fit"
                                type="text"
                                id="class"
                                placeholder="Fill student name"
                                value={student?.classId}
                            />
                        </div>

                        <div className="grid">
                            <label htmlFor="classname">Class name</label>
                            <input
                                readOnly
                                className="p-2 rounded w-1/2 min-w-fit"
                                type="text"
                                id="classname"
                                placeholder="Fill student name"
                                value="hello"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
