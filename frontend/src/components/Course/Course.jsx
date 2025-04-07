import React, { useEffect, useState } from "react";
import list from "../list.json";
import axios from "axios"
import Card from "../FreeBook/Card";
import { Link } from "react-router-dom";

const Course = () => {

  const [book, setBook] = useState([])

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:3000/v1/api/book");        
        setBook(res.data.book);
      } catch (error) {
        console.log(error)
      }      
    }

    getBook();
  }, [])

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-16 text-black dark:text-white">
        <div className="pt-10 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>{" "}
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
            assumenda? Repellendus, iste corrupti? Tempore laudantium
            repellendus accusamus accusantium sed architecto odio, nisi expedita
            quas quidem nesciunt debitis dolore non aspernatur praesentium
            assumenda sint quibusdam, perspiciatis, explicabo sequi fugiat amet
            animi eos aut. Nobis quisquam reiciendis sunt quis sed magnam
            consequatur!
          </p>
          <div className="mt-6 mb-6">          
            <Link to={"/"} className="bg-pink-500 text-white rounded-md duration-200 hover:bg-pink-700 px-5 py-2 ">
                Back
            </Link >
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
            {book.length === 0 ? <div><h1>No Data Found</h1></div> :
                book.map((item) => (
                <Card key={item.id} item={item}/>
                ))
            }
        </div>
      </div>
    </>
  );
};

export default Course;
