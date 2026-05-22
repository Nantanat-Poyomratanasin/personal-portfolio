import WindowCard from "./WindowCard";

export default function ProfileCard() {
  return (
    <WindowCard title="Profile">
      {/* profile image */}
      <img
        src="../image/profile.jpg"
        alt="profile"
        className="
          w-full
          h-[320px]
          object-cover
          rounded-2xl
        "
      />

      {/* description */}
      <div
        className="
          mt-5
          bg-[#F1ECE5]
          rounded-xl
          px-4
          py-3
          text-center
          text-[#5F5B57]
        "
      >
        • Open to work •
      </div>
    </WindowCard>
  );
}
