import { useFetch } from "../hooks/useFetch";

export default function Notes() {
  const { data, isPending } = useFetch("http://localhost:8000/api/");

  //   console.log(data);

  return (
    <>
    {isPending && <div>HOLD ON im loading</div>}
      <div>
        {data &&
          data.map((item) => (
            <div key={item.id}>
              {item.title}
              {item.content}
              {item.excerpt}
            </div>
          ))}
      </div>
    </>
  );
}
