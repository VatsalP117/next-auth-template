import { useSession, signIn, signOut } from "next-auth/react";
export default function LoginPage() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div>
        <h1>Welcome, {session.user.email}</h1>
        <button onClick={() => signOut()}>Log out</button>
      </div>
    );
  } else
    return (
      <div>
        <p>You are not signed in.</p>
        <button onClick={() => signIn()}>Login</button>
      </div>
    );
}
