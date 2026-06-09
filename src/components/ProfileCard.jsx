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
          block
    mx-auto

    lg:w-[200px]
    lg:h-[240px]

    w-[140px]
    h-[180px]
    mt-2

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
          my-4
          mx-1
          lg:px-3
          lg:py-1
          text-center
          text-[#5F5B57]
        "
        style={{
          fontFamily: "'Pixelify Sans', sans-serif",
          fontWeight: 500,
          color: "#5a5450",
        }}
      >
        • Open to work •
      </div>
    </WindowCard>
  );
}
