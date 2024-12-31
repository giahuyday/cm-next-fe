"use client";
import axios from "axios";
import { useRef } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";
import ToastNotification from "@/components/toast/toastify";

export default function CreateCoursePage() {
    const router = useRouter();
    const courseNameRef = useRef<HTMLInputElement>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Ngăn không cho trang reload
        const courseName = courseNameRef.current?.value || "";
        const data = {
            name: courseName,
        };
        try {
            await axios({
                method: "post",
                url: `${process.env.NEXT_PUBLIC_API_URL}/class/api/create`,
                data: data,
                headers: {
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_PERM}`,
                },
            });

            toast.success("Course created successfully!");
            setTimeout(() => {
                router.push("/class");
            }, 4000);
        } catch (error: any) {
            toast.error(error.response.data.devMessage);
            console.error("Failed to add course:", error.response.data.devMessage);
        }
    };

    return (
        <>
            <div className="w-full h-[100vh] flex justify-center items-center">
                <div className="justify-center">
                    <form
                        className="grid grid-rows-1 gap-3 border backdrop:blur-xl p-20 rounded"
                        onSubmit={handleSubmit}
                    >
                        <h1 className="text-2xl">Create new course</h1>

                        <div className="grid">
                            <label htmlFor="name">Course name</label>
                            <input
                                className="p-2 rounded"
                                type="text"
                                id="name"
                                placeholder="Fill course name"
                                ref={courseNameRef}
                            />
                        </div>
                        <button type="submit" className="btn-primary p-2">
                            Create course
                        </button>
                    </form>
                </div>
            </div>
            <ToastNotification />
        </>
    );
}
