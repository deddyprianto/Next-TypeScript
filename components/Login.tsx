import Image from "next/image";
import { signIn } from "next-auth/client";
function Login() {
  return (
    <div className="grid place-items-center">
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/768px-Facebook_f_logo_%282019%29.svg.png"
        height={400}
        width={400}
        objectFit="contain"
      />
      <h1
        onClick={signIn}
        className="p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer"
      >
        Login With Facebook
      </h1>
    </div>
  );
}

export default Login;
