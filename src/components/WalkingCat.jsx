import { useEffect, useState } from "react";

export default function WalkingCat() {
  const [frame, setFrame] = useState(0);
  //   console.log(frame);
  const [x, setX] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const frameTimer = setInterval(() => {
      setFrame((prev) => (prev + 1) % 5);
    }, 320);

    return () => clearInterval(frameTimer);
  }, []);

  useEffect(() => {
    const moveTimer = setInterval(() => {
      setX((prev) => {
        const next = prev + direction * 0.25;

        const CAT_AREA = 1080;

        if (next >= CAT_AREA) {
          setDirection(-1);
        }

        if (next <= 0) {
          setDirection(1);
        }

        return next;
      });
    }, 16);

    return () => clearInterval(moveTimer);
  }, [direction]);

  return (
    <div
      className="walking-cat"
      style={{
        left: `${x}px`,
      }}
    >
      <div
        className="cat-sprite"
        style={{
          backgroundImage:
            direction === 1
              ? "url('/sprites/walk-right.png')"
              : "url('/sprites/walk-left.png')",

          backgroundPositionX: `-${frame * 64}px`,
        }}
      />
    </div>
  );
}
