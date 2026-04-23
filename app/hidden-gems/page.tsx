"use client"

import { motion } from "motion/react"
import { ArrowLeft, Camera, Compass, Eye, Heart, MapPin, Star } from "lucide-react"
import { useRouter } from "next/navigation"
import Link from "next/link"

const hiddenGems = [
  {
    name: "Faroe Islands, Denmark",
    tagline: "Dramatic cliffs over the North Atlantic — virtually untouched",
    image: "https://images.unsplash.com/photo-1504706886208-fb20e5d2b0bb?w=800&q=80",
    rating: 4.9,
    visitors: "2K/year",
    tags: ["Off-Beat", "Nature", "Scenic"],
    badge: "Under the Radar",
    badgeColor: "bg-emerald-500",
    color: "from-teal-600/80 to-emerald-900/80",
    fact: "Only 54,000 people live here — outnumbered by sheep 3:1",
  },
  {
    name: "Kotor, Montenegro",
    tagline: "A medieval gem hidden between mountains and the sea",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    rating: 4.8,
    visitors: "5K/year",
    tags: ["Medieval", "Coastal", "Culture"],
    badge: "Secret Find",
    badgeColor: "bg-blue-500",
    color: "from-blue-700/80 to-slate-900/80",
    fact: "Old city walls built in the 9th century, still perfectly preserved",
  },
  {
    name: "Jiufen, Taiwan",
    tagline: "Lantern-lit alleys that inspired Studio Ghibli's Spirited Away",
    image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&q=80",
    rating: 4.7,
    visitors: "8K/year",
    tags: ["Cinematic", "Food", "Culture"],
    badge: "Hidden Gem",
    badgeColor: "bg-red-500",
    color: "from-orange-600/80 to-red-900/80",
    fact: "Said to be the visual inspiration for the iconic Ghibli film",
  },
  {
    name: "Socotra, Yemen",
    tagline: "The Galápagos of the Indian Ocean — alien landscapes await",
    image: "https://images.unsplash.com/photo-1504884790557-80daa3a9e621?w=800&q=80",
    rating: 4.9,
    visitors: "<1K/year",
    tags: ["Exotic", "Wildlife", "Unique"],
    badge: "Rare & Remote",
    badgeColor: "bg-purple-500",
    color: "from-purple-700/80 to-indigo-900/80",
    fact: "Home to Dragon Blood Trees — found nowhere else on Earth",
  },
  {
    name: "Hallstatt, Austria",
    tagline: "A fairy-tale alpine village reflected in a mirror lake",
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&q=80",
    rating: 4.9,
    visitors: "3K/year",
    tags: ["Romantic", "Alpine", "Scenic"],
    badge: "Fairy-tale",
    badgeColor: "bg-pink-500",
    color: "from-pink-600/80 to-rose-900/80",
    fact: "So beautiful, China built an exact replica of the entire village",
  },
  {
    name: "Colmar, France",
    tagline: "Pastel-coloured Alsatian buildings straight from a storybook",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80",
    rating: 4.7,
    visitors: "6K/year",
    tags: ["Romantic", "Culture", "Foodie"],
    badge: "Local Favourite",
    badgeColor: "bg-amber-500",
    color: "from-amber-600/80 to-yellow-900/80",
    fact: "Famous for Christmas markets — one of France's best-kept secrets",
  },
]

const stats = [
  { icon: Eye, value: "200+", label: "Hidden Gems Curated" },
  { icon: Compass, value: "50+", label: "Countries Covered" },
  { icon: Camera, value: "4.9★", label: "Avg. Visitor Rating" },
  { icon: Heart, value: "10K+", label: "Happy Explorers" },
]

export default function HiddenGemsPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-emerald-50">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-500 hover:text-gray-800 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back</span>
          </button>
          <div className="h-5 w-px bg-gray-200" />
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-emerald-500" />
            <span className="font-semibold text-gray-800">Hidden Gems</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-r from-emerald-700 via-teal-600 to-cyan-700 text-white">
        <div
          className="absolute inset-0 opacity-25"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1531804155340-a5c492364f01?w=1400&q=80")', backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Compass className="w-4 h-4" /> Places 99% of travellers haven't found yet
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Discover<br />
              <span className="bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
                Hidden Gems
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Skip the tourist traps. Explore secret destinations handpicked by our AI — extraordinary places only the savviest travellers know about.
            </p>
            <Link href="/create-new-trip">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-emerald-700 font-bold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all"
              >
                Plan a Secret Escape 🗺️
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="flex flex-col items-center text-center gap-2"
            >
              <stat.icon className="w-6 h-6 text-emerald-500" />
              <span className="text-2xl font-bold text-gray-800">{stat.value}</span>
              <span className="text-sm text-gray-500">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-14">
          <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-4xl font-bold text-gray-800 mb-4">
            World's Best Kept Secrets
          </motion.h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            These destinations are awe-inspiring — and still blissfully crowd-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hiddenGems.map((gem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -10, scale: 1.01 }}
              className="group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={gem.image}
                  alt={gem.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${encodeURIComponent(gem.name)}/800/600`
                  }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${gem.color}`} />
                <div className={`absolute top-4 left-4 ${gem.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                  {gem.badge}
                </div>
                <button className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors">
                  <Heart className="w-4 h-4 text-white" />
                </button>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-1 mb-1">
                    <MapPin className="w-3 h-3 text-white/90" />
                    <h3 className="text-white font-bold text-lg">{gem.name}</h3>
                  </div>
                  <p className="text-white/75 text-sm">{gem.tagline}</p>
                </div>
              </div>

              <div className="p-5">
                {/* Fun Fact */}
                <div className="bg-emerald-50 border border-emerald-100 rounded-xl px-4 py-3 mb-4 text-sm text-emerald-700">
                  💡 <span className="font-medium">Did you know?</span> {gem.fact}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {gem.tags.map((tag, t) => (
                      <span key={t} className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-bold text-gray-700">{gem.rating}</span>
                  </div>
                </div>

                <Link href="/create-new-trip">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-4 w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold py-3 rounded-xl text-sm hover:from-emerald-600 hover:to-teal-600 transition-all"
                  >
                    Plan This Secret Trip →
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
