"use client";

export default function Footer() {
  return (
    <footer className="border-t border-pink-100 py-10 text-center">
      <p
        className="text-lg"
        style={{ fontFamily: "'Pinyon Script', cursive", color: "#D4707A" }}
      >
        SylveonSoles23
      </p>
      <p className="mt-1 text-xs text-gray-400">
        &copy; {new Date().getFullYear()} &middot; All rights reserved
      </p>
    </footer>
  );
}
