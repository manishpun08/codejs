"use client";

import { Button, TextField } from "@mui/material";
import { Search } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [search, setSearch] = useState("");

  return (
    <nav className="w-full p-4 bg-white shadow-md flex items-center justify-between md:justify-around flex-col md:flex-row gap-4 md:gap-0">
      <Image priority src="/images/J.png" height={100} width={100} alt="Logo" />

      <div className="relative w-full md:w-1/3">
        <Search
          className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500"
          size={18}
        />
        <TextField
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-8 pr-4 py-2 w-full border rounded-lg"
        />
      </div>

      <Button
        variant="contained"
        sx={{
          background: "teal",
        }}
        className="w-full md:w-auto"
      >
        Send Enquiry
      </Button>
    </nav>
  );
}
