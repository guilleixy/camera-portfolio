export default function NowPlayingIcon({ size = 10, color = "#ffffffff" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform="rotate(180) translate(0 3)"
    >
      <rect x="3" width="2" height="12" fill={color}>
        <animate
          attributeName="height"
          values="4;12;4"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="8" width="2" height="8" fill={color}>
        <animate
          attributeName="height"
          values="2;10;2"
          dur="0.5s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="13" width="2" height="16" fill={color}>
        <animate
          attributeName="height"
          values="6;16;6"
          dur="0.7s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="18" width="2" height="10" fill={color}>
        <animate
          attributeName="height"
          values="4;12;4"
          dur="0.55s"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
  );
}
