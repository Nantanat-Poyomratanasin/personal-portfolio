export default function SocialCard({ title }) {
  return (
    <div
      className="
        w-32
        h-32
        bg-white
        border-2
        border-gray-800
        flex
        items-center
        justify-center
        font-bold
        text-lg
        cursor-pointer
        hover:shadow-lg
        transition-transform
        hover:-translate-y-1
      "
    >
      {title}
    </div>
  );
}
