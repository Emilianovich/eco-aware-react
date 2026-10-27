import type { SVGProps } from "react"

export type FooterLandscapeProps = SVGProps<SVGSVGElement> & {
  title?: string
}

const FooterLandscape = ({ title, className, ...props }: FooterLandscapeProps) => {
  const titleId = title ? "footer-landscape-title" : undefined
  return (
    <svg
      viewBox="0 0 3072 318"
      preserveAspectRatio="xMidYMax slice"
      role={title ? "img" : undefined}
      aria-labelledby={titleId}
      aria-hidden={title ? undefined : true}
      className={["block h-auto w-full", className].filter(Boolean).join(" ")}
      {...props}
    >
      {title && <title id={titleId}>{title}</title>}

      <rect width="3072" height="318" className="fill-muted" />

      <path
        className="fill-accent"
        d="M0 194C115 160 220 176 342 213C485 256 598 289 774 264C889 248 920 252 1029 292C1124 327 1222 306 1321 287C1439 264 1548 297 1654 303C1784 310 1855 263 1974 238C2103 211 2194 258 2304 252C2426 245 2503 191 2605 184C2710 177 2776 215 2865 219C2940 222 3004 207 3072 208V318H0Z"
      />

      <path
        className="fill-secondary opacity-30"
        d="M0 252C119 201 215 205 351 247C492 291 623 317 789 310C945 303 1029 275 1171 292C1306 308 1407 328 1545 310C1675 292 1760 303 1881 317C2012 332 2095 322 2198 287C2328 242 2429 259 2536 285C2656 315 2755 246 2871 250C2948 252 3007 260 3072 254V318H0Z"
      />

      <g
        fill="none"
        className="stroke-secondary"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2916 318C2911 276 2905 235 2896 195C2888 157 2888 121 2894 82C2898 58 2904 35 2915 15" />
        <path d="M2900 211C2867 183 2839 171 2806 168" />
        <path d="M2907 252C2940 225 2970 213 3005 211" />
        <path d="M2893 166C2920 135 2946 119 2980 112" />
        <path d="M2894 128C2857 108 2826 102 2788 105" />
        <path d="M2896 91C2875 70 2863 52 2860 27" />
        <path d="M2897 86C2925 71 2942 52 2951 25" />

        <path d="M2806 168C2838 153 2872 155 2899 180C2869 183 2834 180 2806 168Z" />
        <path d="M3005 211C2979 207 2947 219 2910 246C2948 252 2982 238 3005 211Z" />
        <path d="M2980 112C2951 108 2923 124 2895 158C2930 161 2964 142 2980 112Z" />
        <path d="M2788 105C2820 87 2856 88 2893 119C2854 125 2819 119 2788 105Z" />
        <path d="M2860 27C2882 42 2892 62 2897 88C2872 74 2860 53 2860 27Z" />
        <path d="M2951 25C2927 35 2908 57 2898 85C2923 78 2943 55 2951 25Z" />
      </g>
    </svg>
  )
}

export default FooterLandscape
