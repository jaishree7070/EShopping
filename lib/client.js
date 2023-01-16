import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
//Setting up sanity
export const client = sanityClient({
  projectId: 'xsmlsx0j',
  dataset: 'production',
  apiVersion: '2023-01-15',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);