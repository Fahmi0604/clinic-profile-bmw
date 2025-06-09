import { Metadata } from "next";

interface GenerateMetadataParams {
  title: string;
  description: string;
  images?: { url: string }[];
  path?: string;
}

export function metaData({
  title,
  description,
  images = [],
  path = "",
}: GenerateMetadataParams): Metadata {
  const baseUrl = process.env.BASE_URL || "https://yourdomain.com";
  const url = path ? `${baseUrl}${path}` : baseUrl;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: images.map((img) => ({
        // url: img.url.startsWith("http") ? img.url : `${baseUrl}${img.url}`,
        url: img.url,
      })),
      siteName: "Your Site Name",
    },
    // twitter: {
    //   card: "summary_large_image",
    //   title,
    //   description,
    //   images: images.map((img) => img.url),
    // },
  };
}
