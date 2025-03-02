import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://globalaisummit.isfnetwork.org/',
      lastModified: new Date().toISOString(),
    },
    {
      url: 'https://globalaisummit.isfnetwork.org/register',
      lastModified: new Date().toISOString(),
    },
  ];
}
