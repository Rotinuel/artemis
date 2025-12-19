import withVideos from 'next-videos';

/** @type {import('next').NextConfig} */
const nextConfig = withVideos({
    turbopack: false,
    // webpack(config) {
    //     config.module.rules.push({
    //       test: /\.(mp4|webm|ogg|swf|ogv)$/,
    //       type: 'asset/resource',
    //     });
    //     return config;
    // },
});

export default nextConfig;
