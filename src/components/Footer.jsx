export default function Footer() {
  const now = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <footer className="bg-cream-800 text-black py-12 px-6 text-start border-t-4 border-gray-900 mt-auto">
      <p className="mb-3">&copy; 2026 My Portfolio. All rights reserved.</p>

      <p className="text-xs text-gray-400">Last update on {now}</p>
    </footer>
  );
}
