import { useSession } from "next-auth/react";
export default function Account() {
  const { data: session } = useSession({ required: true });
  return <h1>Hey</h1>;
}
