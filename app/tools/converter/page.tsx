"use client";
import React from "react";
import TripPlannerAddon from "@/app/create-new-trip/_component/TripPlannerAddon";
import { Sparkles, Globe, Shield } from "lucide-react";
import { motion } from "motion/react";

export default function StandaloneConverterPage() {
  return (
    <div className="min-h-screen w-full bg-white relative overflow-hidden flex flex-col items-center">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-50/80 via-purple-50/50 to-transparent pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 -left-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />

      {/* Content Container */}
      <div className="w-full max-w-4xl mx-auto px-4 py-16 md:py-24 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-10 space-y-4">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="bg-orange-50 text-orange-600 border border-orange-100 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 fill-orange-500/10 animate-pulse" />
              Global Travel Toolkit
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 bg-clip-text text-transparent tracking-tight">
            Currency & Timezone Companion
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Plan currency conversions, calculate timezone differences, and get localized AI companion tips for any routes worldwide.
          </p>
        </div>

        {/* Companion Card container */}
        <div className="w-full max-w-2xl mx-auto">
          <TripPlannerAddon />
        </div>

        {/* Feature Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-16 text-left border-t border-gray-100 pt-10">
          <div className="flex gap-3">
            <div className="p-2.5 bg-orange-50 border border-orange-100 rounded-xl h-fit">
              <Globe className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-sm">Dual City Planner</h3>
              <p className="text-xs text-gray-500 mt-1 leading-normal">
                Easily search and configure timezone mappings and currency pairs for any two cities globally.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="p-2.5 bg-blue-50 border border-blue-100 rounded-xl h-fit">
              <Sparkles className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-sm">AI Companion Insights</h3>
              <p className="text-xs text-gray-500 mt-1 leading-normal">
                Retrieve custom AI tips regarding cash-vs-card usage, connectivity/eSIM options, and regional protocols.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="p-2.5 bg-green-50 border border-green-100 rounded-xl h-fit">
              <Shield className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-sm">Offline Failsafe</h3>
              <p className="text-xs text-gray-500 mt-1 leading-normal">
                Static conversion and timezone computations run 100% locally and instantly if you're offline or out of credits.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
