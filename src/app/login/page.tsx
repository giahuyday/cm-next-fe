export default function Login() {
    return (
        <>
            <div className="w-full h-[100vh]">
                <form action="" id="login-form" className="h-full w-full flex justify-center items-center">
                    <div className="block">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="" id="username" placeholder="Username...." />
                        <label htmlFor="password">Password</label>
                        <input type="password" name="" id="password" placeholder="Password...." />
                    </div>
                </form>
                <h1>Login</h1>
            </div>
        </>
    );
}
