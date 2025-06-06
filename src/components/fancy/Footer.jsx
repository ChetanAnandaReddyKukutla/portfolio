import React from "react";

export default function Footer() {
  return (
    <footer className="mt-14 flex w-full items-center justify-center p-4">
      <div className="flex w-full justify-around font-mono">
        <p>Chetan Reddy's portfolio</p>
        <p>{new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
