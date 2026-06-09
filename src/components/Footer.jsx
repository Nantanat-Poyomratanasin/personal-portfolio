export default function Footer() {
  const now = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <footer
      className=" text-black pb-5 pt-3 px-4 text-start border-t-4 border-gray-900 "
      style={{ backgroundColor: "#b8a89d" }}
    >
      <p className="mb-2 text-[12px]">
        &copy; 2026 My Portfolio. All rights reserved.
      </p>

      <p className="text-[10px] text-black">Last update on {now}</p>
    </footer>
  );
}
