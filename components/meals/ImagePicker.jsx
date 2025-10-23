"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
export default function ImagePicker({ label, name }) {
  const fileRef = useRef();
  const [pickedimage, setImage] = useState();
  function handlePickClick() {
    fileRef.current.click();
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (!file) {
      setImage(null);
      return;
    }
    const filereader = new FileReader();
    filereader.onload = () => {
      setImage(filereader.result);
    };
    filereader.readAsDataURL(file);
  };
  return (
    <div className="flex flex-col justify-center items-center ">
      <label htmlFor={name}>{label}</label>
      <div>
        <div className="flex ">
          {!pickedimage && <p>No image picked yet</p>}
          {pickedimage && (
            <Image
              src={pickedimage}
              alt="the image selected by the user"
              width={400}
              height={600}
            />
          )}
        </div>
        <input
          ref={fileRef}
          className="invisible"
          type="file"
          id={name}
          accept="image/png,image/jpeg"
          name={name}
          onChange={handleImageChange}
          required
        />
        <button
          className="rounded p-2 border bg-blue-400 hover:bg-blue-300"
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
