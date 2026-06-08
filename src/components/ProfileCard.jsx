import WindowCard from "./WindowCard";
import profileImage from "../data/image/profile.jpg";

export default function ProfileCard() {
  return (
    <WindowCard title="Profile">
      {/* profile image */}
      <img
        src={profileImage}
        alt="profile"
        className="
          w-[200px]
          h-[240px]
          object-cover
          rounded-2xl
        "
      />

      {/* description */}
      <div
        className="
          mt-4
          bg-[#F1ECE5]
          rounded-xl
          px-4
          py-2
          text-center
          text-[#5F5B57]
        "
      >
        • Open to work •
      </div>
    </WindowCard>
  );
}
