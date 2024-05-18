import { ContextProvider } from './context/context'
import { Montserrat } from 'next/font/google'
import Header from '@/app/components/header/header'
import Footer from '@/app/components/footer/footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.scss' 
import Head from 'next/head'

const montserrat = Montserrat({ subsets: ['latin'], weight: ['200'] });

// export const metadata = {
//   title: 'Royal House Makers',
//   description: "Visit Royal House Maker's and Choose Your Dream House",
// }

export const metadata = {
  title: "Royal House Makers",
  description:
    "Visit Royal House Maker's and Choose Your Dream House",
  keywords: [
    "Royal House Makers",
    "House Design",
    "Interior Design ",
    "Structure Design",
    "2D Elevation Design",
    "3D Elevation Design",
    "Floor Plan Design",
    "Walk THrough",
    "Landscape Design",
    "Smart home technology",
    "Co-living",
    "Eco-friendly homes",
    "Co-working",
    "Sustainable homes",
    "Home decor",
    "Living room ideas",
    "Interior designer near me",
    "Modern interior design",
    "How to decorate a bedroom",
    "house plan design",
    "Luxury House designs",
    "ghar ka naksha online",
    "Architect Design",
    "Home Design",
    "Home Renovation",
    "House Civil Design",
    "Civil Drawings",
    "House Planners",
    "House Construction Design",
    "Build a dream house",
    "Dream Home",
    "RHM",
    "ROYAL HOUSE",
    "House Makers",
    "Home Decor",
    "Home Design",
    "House Interior",
    "home Interior Design",
    "Interior Design",
    "luxury house Interior",
    "Bedroom Interior",
    "Kids Room Interior",
    "Kitchen Interior Design",
    "Living Interior Design",
    "G+1 House Design",
    "Ground Floor House Design",
    "Simplex Designs",
    "Simplex House",
    "duplex House Designs",
    "duplex House",
    "Foreign luxury Villa",
    "Villa Designs",
    "Bungalow Makers",
    "Bungalow Design",
    "G+2 House Design",
    "G+2 Bungalow Designs ",
    "Commercial House Planning",
    "Commercial Designs",
    "Apartment Designs",
    "Flat Interior Designs",
    "Flat Renovation",
    "Renovation",
    "Constriction",
    "Building Design",
    "India Best house design",
    "Indias new house design",    
    "Architecture designs",

  ],
  additionalMetaTags: [
    { name: "author", content: "Royal House Makers" },
    { name: "robots", content: "luxury" },
    // Add more additional meta tags as needed
  ],
};

export default async function RootLayout({ children }) {

  return (
    <>
    <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Keywords meta tag */}
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        {/* Additional meta tags */}
        {metadata.additionalMetaTags.map((tag, index) => (
          <meta key={index} name={tag.name} content={tag.content} />
        ))}
        {/* OpenGraph and Twitter meta tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content="https://royalhousemakers.vercel.app/" />
        <meta
          property="og:image"
          content="	https://royalhousemakers.vercel.app/777.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta
          name="twitter:image"
          content="https://www.yourwebsite.com/twitter-image.jpg"
        />
      </Head>
    <html lang='en'>
      <body id='body' style={{overflowX:"hidden", margin:"0px", padding:"0px"}} className={montserrat.className}>
        <ContextProvider>
          <Header />
          {children}
          <Footer />
        </ContextProvider>
      </body>
    </html>
    </>
  )
}
