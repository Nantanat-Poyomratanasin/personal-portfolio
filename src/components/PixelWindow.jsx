export default function PixelWindow({ title, emoji, description }) {
  return (
    <div className="pixel-window">
      <div className="pixel-window-title">{title}</div>
      <div className="pixel-window-content">
        <div className="text-5xl mb-4">{emoji}</div>
        <p className="text-center text-sm font-semibold text-gray-700 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
