import { useEffect, useState } from "react";

export default function PixelCat() {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setFrame((prev) => (prev + 1) % 4);
    }, 250);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="navbar-cat">
      <div
        className="cat-idle"
        style={{
          backgroundPositionX: `-${frame * 32}px`,
        }}
      />
    </div>
  );
}
