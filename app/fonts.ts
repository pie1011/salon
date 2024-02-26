import { Inter, Roboto, Roboto_Condensed, Pacifico, Playfair_Display } from 'next/font/google'
 

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
 
export const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const roboto_condensed = Roboto_Condensed({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const pacifico = Pacifico({
    subsets: ['latin'],
    display: 'swap',
    weight: '400'
})

export const playfair_display = Playfair_Display({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '900']

})