export default function BackgroundPattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-40"
      width="60"
      height="60"
      viewBox="0 0 60 60"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="genetic-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <circle cx="30" cy="30" r="2" fill="#059669" fillOpacity="0.05" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#genetic-pattern)" />
    </svg>
  )
}
