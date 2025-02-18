"use client"
import React, { useState } from "react";

const Table = () => {
  // 1) สร้างข้อมูลจำลอง 30 รายการ
  const dummyData = Array.from({ length: 30 }, (_, i) => ({
    id: `EMP${String(i + 1).padStart(3, "0")}`, // e.g. EMP001, EMP002 ...
    name: `Name ${i + 1}`,
    department: `Department ${i + 1}`,
    position: `Position ${i + 1} - Lorem ipsum dolor sit amet...`,
    kpiCategory: `KPI ${i + 1}`,
  }));

  // 2) สร้าง State สำหรับ pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // กำหนดจำนวนรายการต่อหน้า

  // 3) คำนวณว่าจะ slice ข้อมูลจาก index ไหนถึงไหน
  const indexOfLastItem = currentPage * itemsPerPage; // เช่น หน้า 1 = 1*5 = 5
  const indexOfFirstItem = indexOfLastItem - itemsPerPage; // หน้า 1 = 5 - 5 = 0
  const currentData = dummyData.slice(indexOfFirstItem, indexOfLastItem);

  // 4) สร้างฟังก์ชันเปลี่ยนหน้า
  const totalPages = Math.ceil(dummyData.length / itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="overflow-x-auto">
        <div className="min-w-full inline-block align-middle">
          <div className="overflow-hidden border border-gray-300 rounded-lg">
            <table className="table-auto w-full border-separate border-spacing-2">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-5 text-center text-sm font-semibold text-gray-900 w-40 rounded-[50px]">
                    รหัสพนักงาน
                  </th>
                  <th className="p-5 text-center text-sm font-semibold text-gray-900 w-40 rounded-[50px]">
                    ชื่อ - นามสกุล
                  </th>
                  <th className="p-5 text-center text-sm font-semibold text-gray-900 w-40 rounded-[50px]">
                    Department
                  </th>
                  <th className="p-5 text-center text-sm font-semibold text-gray-900 w-48 rounded-[50px]">
                    Position
                  </th>
                  <th className="p-5 text-center text-sm font-semibold text-gray-900 w-40 rounded-[50px]">
                    KPI Category
                  </th>
                  <th className="p-5 text-center text-sm font-semibold text-gray-900 w-20 rounded-[50px]">
                    Definition
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300">
                {currentData.map((item) => (
                  <tr key={item.id} className="bg-white hover:bg-gray-50">
                    <td className="p-5 text-sm font-medium text-gray-900 whitespace-normal break-words">
                      {item.id}
                    </td>
                    <td className="p-5 text-sm font-medium text-gray-900 whitespace-normal break-words">
                      {item.name}
                    </td>
                    <td className="p-5 text-sm font-medium text-gray-900 whitespace-normal break-words">
                      {item.department}
                    </td>
                    <td className="p-5 text-sm font-medium text-gray-900 whitespace-normal break-words">
                      {item.position}
                    </td>
                    <td className="p-5 text-sm font-medium text-gray-900 whitespace-normal break-words">
                      {item.kpiCategory}
                    </td>
                    <td className="p-5 text-sm leading-6 font-medium text-gray-900">
                      <div className="flex justify-center items-center">
                        <button className="p-2 rounded-full bg-white group transition-all duration-500 hover:bg-red-600 flex items-center justify-center">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              className="stroke-black group-hover:stroke-white"
                              d="M10.0161 14.9897V15.0397M10.0161 9.97598V10.026M10.0161 4.96231V5.01231"
                              stroke="black"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ส่วนควบคุมการเปลี่ยนหน้า (Pagination Controls) */}
      <div className="flex justify-center items-center gap-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded-2xl hover:bg-gray-300 disabled:opacity-50"
        >
          Prev
        </button>
        <span>
          Page {currentPage} / {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 rounded-2xl hover:bg-gray-300 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
