import { auth, signOut } from "@/auth";

const Settings = async () => {
  // console.log(auth(),"Auth Session")
  const user = await auth();
  return (
    <>
      <div>{JSON.stringify(user)}</div>
      <form action={async() => {
        "use server";
        await signOut()
      }}>
        <button type="submit"> Logout</button>
      </form>
    </>
  );
};

export default Settings;
