import Image from "next/image";

export default function createStudentPage() {
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
                <div className="w-1/2 flex justify-center">
                    <Image
                        className="dark:invert flex justify-center"
                        src="/next.svg"
                        alt="Next.js logo"
                        width={180}
                        height={38}
                        priority
                    />
                </div>
                <div className="w-1/2 flex justify-start">
                    <form className="grid grid-rows-1 gap-3 bg-slate-600 rounded p-10">
                        <h1 className="text-2xl">Create new student</h1>

                        <div className="grid">
                            <label htmlFor="name">Student name</label>
                            <input className="p-2 rounded" type="text" id="name" placeholder="Fill student name" />
                        </div>

                        <div className="grid">
                            <label htmlFor="grade">Student class</label>
                            <select className="p-2 rounded" id="grade">
                                {courseName.map((course) => (
                                    <option key={course.id} value={course.id} className="">
                                        {course?.name}
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
        </>
    );
}
