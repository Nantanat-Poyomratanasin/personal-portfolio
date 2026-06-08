export default function Footer() {
  const now = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <footer
      className=" text-black py-12 px-6 text-start border-t-4 border-gray-900 mt-auto"
      style={{ backgroundColor: "#b8a89d" }}
    >
      <p className="mb-3">&copy; 2026 My Portfolio. All rights reserved.</p>

      <p className="text-xs text-black">Last update on {now}</p>
    </footer>
  );
}
