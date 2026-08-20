/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**.supabase.co" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async headers() {
    return [
      {
        // Applies to every route
        source: "/:path*",
        headers: [
          // Prevents the site being embedded in an iframe elsewhere (clickjacking protection)
          { key: "X-Frame-Options", value: "DENY" },
          // Stops the browser from guessing content types (MIME-sniffing protection)
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Limits how much referrer info is sent to other sites
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Restricts access to sensitive browser features this site doesn't use
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      {
        // Extra layer specifically on the admin panel
        source: "/admin/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
