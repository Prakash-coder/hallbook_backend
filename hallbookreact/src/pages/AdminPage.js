import React, { useEffect, useState } from "react";
import AdminHallCard from "../components/Admin/AdminHallCard";

const buttonfixedclass = `buttonfixedclass`

function AdminPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let getHallList = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/hall/halls/");
        if (response.ok) {
          const data = await response.json();
          setData(data);
          setLoading(false);
        }
      } catch (error) {
        console.error("error", error);
        setError(error);
      }
    };
    getHallList();
  }, []);

  if (loading) return "Loading";
  if (error) return "error";

  return (
    <div className="md:grid grid-cols-[200px_1fr]">
      <div className="mt-6 md:mt-16">
        <div>
          <button className={buttonfixedclass+` bg-green-500 text-black hover:bg-green-700 focus:bg-green-700 active:bg-green-800`}>
                Add New Hall
          </button>
        </div>
      </div>
      <div className="mx-auto  mt-2 md:mt-14 flex min-h-screen max-w-3xl flex-col gap-12 p-2  md:w-2/3 md:gap-8">
        {data.map((item) => (
          <AdminHallCard
            key={item.id}
            id={item.id}
            name={item.hallName}
            capacity={item.capacity}
            location={item.location}
          />
        ))}
      </div>
    </div>
  );
}

export default AdminPage;
