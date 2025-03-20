import type { NextConfig } from "next";
// to tell next js to accept the link for image comming from this
const nextConfig: NextConfig = {
 images:{
  remotePatterns:[
    {
      protocol:"https",
      hostname:"lh3.googleusercontent.com"
    }
  ]
 }
};

export default nextConfig;
