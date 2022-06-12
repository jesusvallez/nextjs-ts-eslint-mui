/** @type {import('next').NextConfig} */

const cloudinaryBaseUrl = `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/`

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
    formats: ['image/webp'],
    loader: 'cloudinary',
    path: cloudinaryBaseUrl,
  },
}
