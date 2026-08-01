import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import OurStory from '@/components/OurStory'
import SignaturePizzas from '@/components/SignaturePizzas'
import MenuSection from '@/components/MenuSection'
import ChefSection from '@/components/ChefSection'
import Ingredients from '@/components/Ingredients'
import Gallery from '@/components/Gallery'
import Testimonials from '@/components/Testimonials'
import Reservation from '@/components/Reservation'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'
import ScrollProgress from '@/components/ScrollProgress'
import PinnedBackgroundVideo from '@/components/PinnedBackgroundVideo'
import CinematicAtmosphere from '@/components/CinematicAtmosphere'
import AmbientSound from '@/components/AmbientSound'

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-transparent text-luxury-cream overflow-x-hidden selection:bg-luxury-gold selection:text-luxury-black">
      {/* Pinned continuous background camera-rig video */}
      <PinnedBackgroundVideo />

      {/* Cinematic canvas sparks, sparks glow, heatwaves, and turbulence filter */}
      <CinematicAtmosphere />

      {/* Ambient sound manager */}
      <AmbientSound />

      {/* Cinematic Overlays & Progress */}
      <ScrollProgress />
      <CustomCursor />

      {/* Header Navigation */}
      <Navbar />

      {/* Main Narrative Blocks */}
      <Hero />

      <OurStory />

      <SignaturePizzas />

      <MenuSection />

      <ChefSection />

      <Ingredients />

      <Gallery />

      <Testimonials />

      <Reservation />

      {/* Footer Details */}
      <Footer />
    </main>
  )
}
