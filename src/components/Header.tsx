import Image from "next/image";

export default function Header() {
    return (
        <>
            <Image className="dark:invert" src="/next.svg" alt="Next.js logo" width={64} height={64} priority />
            {/* Avatar */}
            <div className="flex items-center space-x-2">
                <span className="text-sm">User Name</span>
                <img
                    src="/avatar.jpg" // Đường dẫn tới ảnh avatar
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full"
                />
            </div>
        </>
    );
}
