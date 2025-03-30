"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ClaimLink = () => {
  const router = useRouter();

  const handleForm = (event: React.FormEvent) => {
    event.preventDefault();
    router.push("/create");
  };

  return (
    <form
      className="w-[80vw] flex flex-col lg:grid lg:grid-cols-3 gap-6"
      onSubmit={handleForm}
      id="create"
    >
      <div className="w-full rounded-lg border-[#9C6644] border-2 bg-[#E6CCB2] col-span-2 p-6 flex items-center space-x-3 h-18">
        <Image
          width={18}
          height={18}
          src="/logos/input-logo.svg"
          alt="Dark Link logo"
        />
        <div className="text-xl flex text-[#593116] font-bold">
          links.com/
          <input
            type="text"
            id="username"
            name="username"
            placeholder="name"
            required
            className="bg-transparent text-xl text-[#593116] focus:outline-none placeholder-[#B08968] font-bold caret-[#593116]"
            aria-label="Username for your link"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-[#B08968] text-[#EDE0D4] p-5 space-x-3 border-2 border-[#E6CCB2] rounded-lg text-xl font-bold transition-colors duration-300"
      >
        Claim your link
      </button>
    </form>
  );
};

export default ClaimLink;
