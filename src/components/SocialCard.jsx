export default function SocialCard({ title, href }) {
  const icons = {
    LinkedIn: "/sprites/linkedin.svg",
    GitHub: "/sprites/github.png",
    Email: "/sprites/email.svg",
  };
  // const icons = {
  //   LinkedIn: (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       viewBox="0 0 24 24"
  //       fill="currentColor"
  //       className="w-10 h-10"
  //     >
  //       <path d="M20.447 20.452H17.3V14.84c0-1.334-.026-3.05-1.859-3.05-1.862 0-2.148 1.453-2.148 2.955v5.707H10.09V9h3.011v1.561h.043c.42-.796 1.445-1.634 2.975-1.634 3.18 0 3.769 2.094 3.769 4.818v6.707zM5.337 7.433a1.747 1.747 0 1 1 0-3.495 1.747 1.747 0 0 1 0 3.495zM6.763 20.452H3.905V9h2.858v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.73v20.538C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.268V1.73C24 .774 23.2 0 22.225 0z" />
  //     </svg>
  //   ),
  //   GitHub: (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       viewBox="0 0 24 24"
  //       fill="currentColor"
  //       className="w-10 h-10"
  //     >
  //       <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.262.82-.583 0-.288-.01-1.05-.016-2.06-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.238 1.84 1.238 1.07 1.835 2.807 1.305 3.492.998.108-.776.42-1.305.763-1.605-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.323 3.3 1.23a11.52 11.52 0 0 1 3.003-.405c1.02.005 2.045.138 3.003.405 2.29-1.553 3.296-1.23 3.296-1.23.654 1.653.243 2.873.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.803 5.625-5.475 5.92.431.372.815 1.102.815 2.222 0 1.606-.015 2.896-.015 3.286 0 .323.216.702.825.583C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
  //     </svg>
  //   ),
  //   Email: (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       viewBox="0 0 24 24"
  //       fill="currentColor"
  //       className="w-10 h-10"
  //     >
  //       <path d="M22 6.5c0-1.378-1.12-2.5-2.5-2.5h-15C3.62 4 2.5 5.122 2.5 6.5v11C2.5 18.88 3.62 20 5 20h15c1.38 0 2.5-1.12 2.5-2.5v-11zM20 6.5l-8 5-8-5V6.5l8 5 8-5V6.5zm0 11h-15v-8.13l7.5 4.69 7.5-4.69V17.5z" />
  //     </svg>
  //   ),
  //   // Contact: (
  //   //   <svg
  //   //     xmlns="http://www.w3.org/2000/svg"
  //   //     viewBox="0 0 24 24"
  //   //     fill="currentColor"
  //   //     className="w-10 h-10"
  //   //   >
  //   //     <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C9.85 21 3 14.15 3 5a1 1 0 0 1 1-1h2.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.24 1.01l-2.2 2.21z" />
  //   //   </svg>
  //   // ),
  // };

  // const icon = icons[title] || icons.Contact;
  const icon = icons[title];

  return (
    <a
      href={href || "#"}
      target="_blank"
      rel="noreferrer"
      className="
        w-20
        h-20
        bg-white
        border-2
        border-gray-800
        rounded-full
        flex
        items-center
        justify-center
        text-gray-900
        hover:shadow-lg
        hover:-translate-y-1
        transition-transform
      "
    >
      <img
        src={icon}
        alt={title}
        className="
    w-10
    h-10
    object-contain
  "
        style={{
          imageRendering: "pixelated",
        }}
      />
    </a>
  );
}
