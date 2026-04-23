"use client"

import { motion } from "motion/react"
import { ArrowLeft, Heart, MapPin, Sparkles, Star, TrendingUp } from "lucide-react"
import { useRouter } from "next/navigation"
import Link from "next/link"

const destinations = [
  {
    name: "Santorini, Greece",
    tagline: "Whitewashed cliffs & endless sunsets",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80",
    rating: 4.9,
    tags: ["Romantic", "Beach", "Culture"],
    color: "from-blue-500/80 to-indigo-700/80",
    trending: true,
  },
  {
    name: "Kyoto, Japan",
    tagline: "Ancient temples & blooming cherry blossoms",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
    rating: 4.8,
    tags: ["Cultural", "Peaceful", "Scenic"],
    color: "from-pink-500/80 to-rose-700/80",
    trending: true,
  },
  {
    name: "Amalfi Coast, Italy",
    tagline: "Dramatic cliffs, azure sea & Italian charm",
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&q=80",
    rating: 4.9,
    tags: ["Luxury", "Scenic", "Foodie"],
    color: "from-amber-500/80 to-orange-700/80",
  },
  {
    name: "Bali, Indonesia",
    tagline: "Sacred temples, rice terraces & island vibes",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    rating: 4.7,
    tags: ["Spiritual", "Beach", "Adventure"],
    color: "from-green-500/80 to-teal-700/80",
  },
  {
    name: "Marrakech, Morocco",
    tagline: "Vibrant souks, desert dunes & riads",
    image: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=800&q=80",
    rating: 4.6,
    tags: ["Exotic", "Culture", "Foodie"],
    color: "from-red-500/80 to-rose-800/80",
  },
  {
    name: "Maldives",
    tagline: "Overwater bungalows & crystal lagoons",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
    rating: 5.0,
    tags: ["Luxury", "Honeymoon", "Beach"],
    color: "from-cyan-500/80 to-blue-700/80",
  },
]

const moods = [
  { label: "Romantic Getaway", emoji: "💑", color: "bg-rose-100 text-rose-700 hover:bg-rose-200" },
  { label: "Family Fun", emoji: "👨‍👩‍👧‍👦", color: "bg-yellow-100 text-yellow-700 hover:bg-yellow-200" },
  { label: "Solo Exploration", emoji: "🧭", color: "bg-blue-100 text-blue-700 hover:bg-blue-200" },
  { label: "Weekend Escape", emoji: "🌅", color: "bg-orange-100 text-orange-700 hover:bg-orange-200" },
  { label: "Luxury Travel", emoji: "✨", color: "bg-purple-100 text-purple-700 hover:bg-purple-200" },
  { label: "Budget Adventure", emoji: "🎒", color: "bg-green-100 text-green-700 hover:bg-green-200" },
]

export default function InspirePage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      {/* Header */}
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
            <Sparkles className="w-5 h-5 text-indigo-500" />
            <span className="font-semibold text-gray-800">Inspire Me</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1400&q=80")', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" /> Curated by AI Travel Experts
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Where Will Your<br />
              <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                Next Story Begin?
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Let us spark your wanderlust. Explore handpicked destinations tailored to your mood and travel style.
            </p>
            <Link href="/create-new-trip">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-indigo-600 font-bold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all"
              >
                Plan My Dream Trip ✈️
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Mood Filter */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">What's your travel mood?</h2>
          <div className="flex flex-wrap gap-3 mb-16">
            {moods.map((mood, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all ${mood.color}`}
              >
                <span>{mood.emoji}</span>
                <span>{mood.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Destinations Grid */}
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-gray-800">Top Picks For You</h2>
          <div className="flex items-center gap-2 text-indigo-600 text-sm font-medium">
            <TrendingUp className="w-4 h-4" />
            <span>Trending destinations</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-72 w-full overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${dest.color} opacity-60`} />
                {dest.trending && (
                  <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> Trending
                  </div>
                )}
                <button className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors">
                  <Heart className="w-4 h-4 text-white" />
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 opacity-90" />
                  <h3 className="text-xl font-bold">{dest.name}</h3>
                </div>
                <p className="text-white/80 text-sm mb-3">{dest.tagline}</p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {dest.tags.map((tag, t) => (
                      <span key={t} className="bg-white/20 backdrop-blur-sm text-xs px-2 py-0.5 rounded-full">{tag}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-bold">{dest.rating}</span>
                  </div>
                </div>
                <Link href="/create-new-trip">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-4 w-full bg-white text-gray-800 font-semibold py-2.5 rounded-xl text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gray-50"
                  >
                    Plan This Trip →
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
