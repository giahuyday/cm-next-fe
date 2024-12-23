import axios from "axios";
import Table from "@/components/table/StudentTable";

type Student = {
    id: number;
    name: string;
    classId: number;
};

export default async function student() {
    const response = await axios({
        method: "get",
        url: `${process.env.NEXT_PUBLIC_API_URL}/student/api/get_students`,
        headers: {
            Authorization: "Baerer admin",
        },
    });

    const students: Student[] = response.data;

    return (
        <>
            <div className={`h-[100vh] w-full z-1 grid grid-cols-7 ${students.length}`}>
                <Table students={students} />

                <div className="w-full flex justify-center items-center row-span-1 col-span-7">Pagination</div>
            </div>
        </>
    );
}
