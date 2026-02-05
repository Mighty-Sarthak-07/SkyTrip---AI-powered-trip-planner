"use client";

import { PricingTable } from '@clerk/nextjs';
import { Check, Globe, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import React from 'react';

export default function PricingPage() {
  return (
    <div className="min-h-screen w-full bg-white relative overflow-hidden flex flex-col items-center">
      {/* Background Gradients - Adjusted for Light Mode */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-50/80 via-purple-50/50 to-transparent pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 -left-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />

      {/* Content Container */}
      <div className="w-full max-w-7xl mx-auto px-4 py-16 md:px-8 md:py-24 relative z-10">

        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 bg-clip-text text-transparent"
          >
            Transparent Pricing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Choose the perfect plan for your travel adventures. No hidden fees, cancel anytime.
          </motion.p>
        </div>

        {/* Pricing Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative w-full max-w-xl mx-auto flex justify-center mb-24"
        >
          {/* Glow effect behind the table - Subtler for light mode */}
          <div className="absolute inset-0 bg-blue-100/50 blur-[80px] rounded-full pointer-events-none" />
          <div className="relative z-10 w-full flex justify-center">
            <PricingTable />
          </div>
        </motion.div>

        {/* Features / Extra Elements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
          <FeatureCard
            icon={<Globe className="w-6 h-6 text-blue-600" />}
            title="Global Access"
            description="Plan trips to any destination worldwide with our extensive database."
            delay={0.3}
          />
          <FeatureCard
            icon={<Sparkles className="w-6 h-6 text-purple-600" />}
            title="AI Powered"
            description="Get personalized itineraries tailored to your preferences using advanced AI."
            delay={0.4}
          />
          <FeatureCard
            icon={<Check className="w-6 h-6 text-green-600" />}
            title="Smart Savings"
            description="Find the best deals on hotels, flights, and activities automatically."
            delay={0.5}
          />
        </div>
      </div>
    </div>
  )
}

function FeatureCard({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
    >
      <div className="mb-4 bg-gray-50 w-12 h-12 rounded-lg flex items-center justify-center border border-gray-100">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}