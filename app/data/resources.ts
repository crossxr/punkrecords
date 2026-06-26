import { Resource } from '../context/CartContext'

const BASE_URL = (process.env.NEXT_PUBLIC_RESOURCES_BASE_URL || '').replace(/\/$/, '')

export const RESOURCES: Resource[] = [
  {
    id: 'molen-dream',
    title: 'Molen Dream Font',
    type: 'Font',
    price: 0, // Free
    description: 'An elegant and expressive display serif typeface. Molen Dream features high contrast strokes and graceful terminal curves, crafted for editorial headlines and high-end layouts.',
    rating: 4.8,
    downloads: '1.8K',
    fileSize: '1.43 MB',
    gradient: 'from-royal-violet to-electric-iris',
    author: 'punkrecords',
    image: 'https://ucarecdn.com/50ce5214-6289-4dd2-ae7d-d22dde92aaa8/-/preview/1000x750/',
    downloadUrl: `${BASE_URL}/Molen%20Dream%20font.zip`
  },
  {
    id: 'tribal-slashes',
    title: 'Tribal Slashes Vector Pack',
    type: 'Icons',
    price: 0, // Free
    description: 'An editable collection of modular tribal slash symbols, sharp brush strokes, and vectors. Provided as fully layered Adobe Illustrator (.ai) and high-resolution transparent PNG files.',
    rating: 4.9,
    downloads: '5.2K',
    fileSize: '3.44 MB',
    gradient: 'from-slate to-ash',
    author: 'punkrecords',
    image: 'https://ucarecdn.com/3e8c5370-a97e-464f-880c-a87fb3cac504/-/preview/1000x750/',
    downloadUrl: `${BASE_URL}/Tribal%20Slashes.zip`
  },
  {
    id: 'punk-paper-scrap',
    title: 'Punk Paper Scrap Overlay',
    type: 'UI Kit',
    price: 79, // Premium INR 79
    description: 'A premium single torn scrap paper overlay effect. Features high-resolution transparent PNG paper fiber details, organic ripped edges, and tape details.',
    rating: 4.7,
    downloads: '920',
    fileSize: '11.83 MB',
    gradient: 'from-emerald via-electric-iris to-royal-violet',
    author: 'punkrecords',
    image: 'https://ucarecdn.com/aa2e0255-aaed-4340-84e3-6773fe571524/-/preview/1000x750/',
    downloadUrl: `${BASE_URL}/Ripped%20Paper%20Scrap%20Mockup.zip`
  },
  {
    id: 'vintage-paper-textures',
    title: 'Vintage Paper Textures Deck',
    type: 'UI Kit',
    price: 0, // Free
    description: 'Curated high-resolution scanning-grade vintage paper textures with organic grain, wrinkles, and aging artifacts. Perfect for layout backgrounds.',
    rating: 4.8,
    downloads: '1.4K',
    fileSize: '93.6 MB',
    gradient: 'from-orchid via-blush to-lilac-mist',
    author: 'punkrecords',
    image: 'https://ucarecdn.com/1601e557-637c-4bb5-a58a-898e039f7d18/-/preview/1000x750/',
    downloadUrl: `${BASE_URL}/Vintage%20Paper%20Textures.zip`
  },
  {
    id: 'graffiti-record-machine',
    title: 'Graffiti Record Machine PSD',
    type: 'UI Kit',
    price: 199, // Premium INR 199
    description: 'An editable noise texture PSD template with high-quality brutalist FX. Fully layered with raw graffiti tag textures, organic film grain registers, and custom spray mask overlays.',
    rating: 4.9,
    downloads: '640',
    fileSize: '50.44 MB',
    gradient: 'from-cobalt via-electric-iris to-orchid',
    author: 'punkrecords',
    image: 'https://ucarecdn.com/7d723120-7759-41a2-ace2-d3537c510025/-/preview/1000x750/',
    downloadUrl: `${BASE_URL}/Graffiti%20Record%20Machine.zip`
  },
  {
    id: 'assembly-101',
    title: 'Assembly 101 Line Drawings',
    type: 'Icons',
    price: 219,
    description: 'A curated pack of editable brutalist technical line drawings, blueprint grids, and structural layout vectors. Fully customizable in Adobe Illustrator, Figma, or Photoshop.',
    rating: 4.8,
    downloads: '1.2K',
    fileSize: '9.05 MB',
    gradient: 'from-cobalt to-royal-violet',
    author: 'punkrecords',
    image: 'https://ucarecdn.com/91c493d9-3590-42e0-8620-5b1ea8bf23f7/-/preview/1000x750/',
    downloadUrl: `${BASE_URL}/Assembly%20101.zip`
  },
  {
    id: 'vinyl-label-mockup',
    title: 'Vinyl Label CD Mockup',
    type: 'UI Kit',
    price: 0,
    description: 'A premium music record CD and vinyl label mockup. Features smart-object PSD layers, plastic gloss overlay textures, and custom sleeve layouts for editorial music design.',
    rating: 4.9,
    downloads: '3.5K',
    fileSize: '57.75 MB',
    gradient: 'from-orchid to-electric-iris',
    author: 'punkrecords',
    image: 'https://ucarecdn.com/3403138f-f3f9-415d-894a-499aea20fc2b/-/preview/1000x750/',
    downloadUrl: `${BASE_URL}/Vinyl%20Label%20Mockup.zip`
  },
  {
    id: 'crooked-gradient-map',
    title: 'Crooked Photoshop Gradient Map',
    type: 'UI Kit',
    price: 19,
    description: 'A selection of high-contrast brutalist gradient maps for Photoshop. Instantly apply color maps, distressed film grain borders, and raw halftone styles to layout graphics.',
    rating: 4.7,
    downloads: '980',
    fileSize: '1.04 MB',
    gradient: 'from-emerald via-lemon-zest to-orchid',
    author: 'punkrecords',
    image: 'https://ucarecdn.com/46585a1a-5336-46d3-9ffe-75df757a44d1/-/preview/1000x750/',
    downloadUrl: `${BASE_URL}/Crooked%20Gradient%20Map.zip`
  },
  {
    id: 'luxe-ornaments',
    title: 'Luxe Ornaments Vector Pack',
    type: 'Icons',
    price: 99,
    description: 'An elegant collection of ornamental frames, baroque flourish drawings, and retro Victorian page borders in editable vector formats (AI, SVG, and transparent PNG).',
    rating: 4.9,
    downloads: '1.8K',
    fileSize: '20.19 MB',
    gradient: 'from-royal-violet to-orchid',
    author: 'punkrecords',
    image: 'https://ucarecdn.com/863ba34e-15ba-4ee9-95aa-7387ec46c678/-/preview/1000x750/',
    downloadUrl: `${BASE_URL}/Luxe%20Ornaments.zip`
  }
]
