import React from "react";

const SearchSection = () => {
  const options = [
    { title: "Địa điểm bất kỳ", action: "open" },
    { title: "Tuần bất kỳ", action: "open" },
    { title: "Thêm khách", action: "open" },
  ];

  return (
    <div className="flex items-center justify-items-center gap-x-10 rounded-full border-2 border-gray-300 px-3 py-1">
      {options.map((value, index, array) => {
        return <p key={index}>{value.title}</p>;
      })}
    </div>
  );
};

export default SearchSection;
