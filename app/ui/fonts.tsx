// app/fonts.ts
import { Inter, Lusitana } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400'], // atau ['400', '700'] jika kamu ingin dua opsi weight
  variable: '--font-lusitana',
})