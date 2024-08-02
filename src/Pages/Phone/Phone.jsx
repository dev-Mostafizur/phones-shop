import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Phone = () => {
  const [phone, setPhone] = useState({});
  const { id } = useParams();
  // console.log(id)
  const phones = useLoaderData();
  // console.log(phones)

  useEffect(() => {
    const findPhone = phones?.find((phone) => phone.id === id);
    setPhone(findPhone);
  }, [id, phones]);

  const { image, phone_name, brand_name, price, rating } = phone;

  const handleAddToFavoriteBtn = () => {
    const addedItemToFavorite = [];
    const favoriteItem = JSON.parse(localStorage.getItem("favorites"));
  // first time local storage empty that time 
  if (!favoriteItem) {
      addedItemToFavorite.push(phone)
      localStorage.setItem('favorites',JSON.stringify(addedItemToFavorite))
      Swal.fire({
        title: "Good job!",
        text: "Your Products Added!",
        icon: "success"
      });
  }
  else{
const isExisted = favoriteItem.find(phone=> phone.id===id)
if(!isExisted){
  addedItemToFavorite.push(...favoriteItem,phone)
  localStorage.setItem('favorites',JSON.stringify(addedItemToFavorite))
  Swal.fire({
    title: "Good job!",
    text: "Your Products Added!",
    icon: "success"
  });
}
else{
  Swal.fire({
    title: "Oops!",
    text: "Already Exist!",
    icon: "error"
  });
}
  }

  };

  
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[48rem] flex-row">
          <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
            <img
              src={image}
              alt="card-image"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-6">
            <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
              {phone_name}
            </h6>
            <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              {brand_name}
            </h4>
            <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
              Like so many organizations these days, Autodesk is a company in
              transition. It was until recently a traditional boxed software
              company selling licenses. Yet its own business model disruption is
              only part of the story 1.48.44
            </p>
           
              <button
                onClick={handleAddToFavoriteBtn}
                className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                type="button"
              >
                Add to favorite
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  ></path>
                </svg>
              </button>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Phone;
