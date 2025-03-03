"use client";
import { useState, useRef, useEffect } from "react";
import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaComment } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { icon: <FaHome />, label: "HOME", to: "/" },
  { icon: <FaUser />, label: "About", to: "/about" },
  { icon: <FaBriefcase />, label: "Work", to: "/work" },
  { icon: <FaEnvelope />, label: "Messages", to: "/contact" },
  { icon: <FaComment />, label: "Blog", to: "/blog" },
];

export default function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const pathname = usePathname();
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [textWidths, setTextWidths] = useState<number[]>(new Array(menuItems.length).fill(0));

  useEffect(() => {
    setTextWidths(
      textRefs.current.map((ref) => (ref ? ref.getBoundingClientRect().width + 24 : 0))
    );
  }, []);

  return (
    <nav className="fixed z-50 right-0 top-1/4 h-full bg-black p-4" role="navigation">
      <div className="flex flex-col gap-4 items-end">
        {menuItems.map((item, index) => {
          const isActive = pathname === item.to;
          const expandedWidth = textWidths[index] + 56;

          return (
            <Link href={item.to} key={item.to} className="relative h-14 flex items-center uppercase">
              <div
                ref={(el: HTMLDivElement | null): void => {
                  textRefs.current[index] = el;
                }}
                className="absolute opacity-0 pointer-events-none whitespace-nowrap font-bold"
              >
                {item.label}
              </div>

              <div
                className={`absolute right-0 transition-all duration-300 h-8 ${
                  hoveredIndex === index
                    ? "bg-yellow-400 text-white"
                    : isActive
                    ? "bg-yellow-400 text-white w-14"
                    : "bg-gray-800 text-gray-400 w-14"
                }`}
                style={{ width: hoveredIndex === index ? `${expandedWidth}px` : "6px" }}
              />

              <div
                className={`absolute right-16 transition-all duration-300 font-bold text-white ${
                  hoveredIndex === index ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
                }`}
              >
                {item.label}
              </div>

              <button
                className="absolute cursor-pointer right-0 flex items-center justify-center h-10 w-10 text-lg z-10"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                role="menuitem"
                aria-label={item.label}
                tabIndex={0}
              >
                {item.icon}
              </button>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}