"use client";
import axios from "axios";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";

export default function CreateStudentPage() {
    const router = useRouter();
    const studentNameRef = useRef<HTMLInputElement>(null);
    const [classId, setClassId] = useState<number>(1);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Ngăn không cho trang reload
        const studentName = studentNameRef.current?.value || "";
        const data = {
            name: studentName,
            classId: classId,
        };
        try {
            await axios({
                method: "post",
                url: `${process.env.NEXT_PUBLIC_API_URL}/student/api/create`,
                data: data,
                headers: {
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_PERM}`,
                },
            });

            toast.success("Student created successfully!");
            setTimeout(() => {
                router.push("/student");
            }, 4000);
        } catch (error: any) {
            toast.error(error.response.data.devMessage);
            console.error("Failed to add student:", error.response.data.devMessage);
        }
    };
    const courseName = [
        {
            id: 1,
            name: "Computer Science 101",
        },
        {
            id: 2,
            name: "Computer Science 102",
        },
        {
            id: 3,
            name: "Computer Science 103",
        },
    ];

    return (
        <>
            <div className="w-full h-[100vh] flex justify-center items-center">
                <div className="justify-center">
                    <form
                        className="grid grid-rows-1 gap-3 border backdrop:blur-xl p-20 rounded"
                        onSubmit={handleSubmit}
                    >
                        <h1 className="text-2xl">Create new student</h1>

                        <div className="grid">
                            <label htmlFor="name">Student name</label>
                            <input
                                className="p-2 rounded"
                                type="text"
                                id="name"
                                placeholder="Fill student name"
                                ref={studentNameRef}
                            />
                        </div>

                        <div className="grid">
                            <label htmlFor="grade">Student class</label>
                            <select
                                className="p-2 rounded"
                                id="grade"
                                value={classId}
                                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                                    setClassId(Number(e.target.value))
                                }
                            >
                                {courseName.map((course) => (
                                    <option key={course.id} value={course.id}>
                                        {course.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <button type="submit" className="btn-primary p-2">
                            Create student
                        </button>
                    </form>
                </div>
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
