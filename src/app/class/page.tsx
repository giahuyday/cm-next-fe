import axios from "axios";
import Table from "@/components/table/ClassTable";
import SearchBar from "@/components/search/ClassSearchBar";
import { Class } from "@/type/type";

export default async function course() {
    const response = await axios({
        method: "get",
        url: `${process.env.NEXT_PUBLIC_API_URL}/class/api/get_courses`,
        headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_PERM}`,
        },
    });

    const courses: Class[] = response.data;

    return (
        <>
            <div className={`h-[100vh] w-full z-1 grid grid-cols-7 grid-rows-${courses.length + 1}`}>
                <div id="search" className="w-full row-span-1 col-span-7 md:flex justify-evenly items-center xs:hidden">
                    <SearchBar></SearchBar>
                </div>

                <div className="mt-[10px] ml-[10px] mb-[10px] mr-[10px] col-span-7">
                    <Table courses={courses} />
                </div>

                <div className="w-full flex justify-center items-center row-span-1 col-span-7">Pagination</div>
            </div>
        </>
    );
}
