export default function Login() {
    return (
        <>
            <div className="w-full h-[100vh] flex justify-center items-center">
                <div className="justify-center">
                    <form
                        action=""
                        id="login-form"
                        className="grid grid-rows-1 gap-4 backdrop:blur-xl p-20 rounded border xs:border-0 sm:border"
                    >
                        <h1 className="text-xl bold">Login</h1>
                        <div className="grid">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                name=""
                                className="p-2 rounded"
                                id="username"
                                placeholder="Username...."
                            />
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name=""
                                className="p-2 rounded"
                                id="password"
                                placeholder="Password...."
                            />
                        </div>
                        <button type="submit" className="btn-primary p-2">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
