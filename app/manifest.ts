import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'TeamSolve - Knowledge Twin',
    short_name: 'TeamSolve',
    description: 'Transform the complexity of infrastructure operations into actionable insights that teams can trust',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#00BCD4',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
