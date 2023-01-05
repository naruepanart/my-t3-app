/* eslint-disable @typescript-eslint/no-explicit-any */
import { type NextPage } from "next";
import { api } from "../utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const users0 = api.example.users0.useQuery();
  const users1 = api.example.users1.useQuery();

  return (
    <>
      <p>{hello?.data?.greeting}</p>
      <hr />
      {users0?.data?.map((x: any) => (
        <div key={x.id}>
          <p>
            {x.id} {x.name}
          </p>
        </div>
      ))}
      <hr />
      {users1?.data?.map((x: any) => (
        <div key={x.id}>
          <p>
            {x.id} {x.name}
          </p>
        </div>
      ))}
    </>
  );
};

/* export const getServerSideProps = async () => {
  const f = await axios.get("https://jsonplaceholder.typicode.com/users");
  return { props: { posts: f.data } };
}; */

export default Home;
