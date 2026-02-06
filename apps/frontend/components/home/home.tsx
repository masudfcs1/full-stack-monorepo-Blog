"use client";
import { useRouter } from "next/navigation";

import {
  ArrowRight,
  Heart,
  PenLine,
  Share2,
  Sparkles,
  Star,
} from "lucide-react";

export default function Home() {
  const router = useRouter();

  const features = [
    {
      icon: PenLine,
      title: "Write Stories",
      description:
        "Share your creative adventures with the world through beautiful blog posts.",
      color: "from-violet-500 to-purple-600",
    },
    {
      icon: Heart,
      title: "Connect & Engage",
      description: "Like and comment on posts that inspire and move you.",
      color: "from-rose-500 to-pink-600",
    },
    {
      icon: Share2,
      title: "Share Everywhere",
      description: "Spread the creativity by sharing your favorite stories.",
      color: "from-sky-500 to-blue-600",
    },
    {
      icon: Sparkles,
      title: "Be Inspired",
      description: "Discover unique perspectives and creative voices.",
      color: "from-amber-500 to-orange-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50/50 via-white to-purple-50/50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-violet-200/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-violet-100/50 to-purple-100/50 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center max-w-3xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-soft mb-8 animate-fade-in-up">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span className="text-sm font-medium text-gray-600">
                A creative space for everyone
              </span>
            </div>

            {/* Title */}
            <h1
              className="font-display text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              Where Stories
              <span className="block bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Come to Life
              </span>
            </h1>

            {/* Description */}
            <p
              className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Join a community of creative minds sharing their stories, ideas,
              and adventures. Write, read, and connect with fellow storytellers.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-wrap justify-center gap-4 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <button
                onClick={() => router.push("/blogs")}
                className="group px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-medium rounded-2xl shadow-lg shadow-violet-500/25 hover:shadow-xl hover:shadow-violet-500/30 hover:-translate-y-1 transition-all"
              >
                <span className="flex items-center gap-2">
                  Explore Stories
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              {/* {!isAuthenticated && (
                <button
                  onClick={() => navigate("/register")}
                  className="px-8 py-4 bg-white text-gray-700 font-medium rounded-2xl border border-gray-200 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all"
                >
                  Start Writing
                </button>
              )}
              {isAuthenticated && (
                <button
                  onClick={() => navigate("/write")}
                  className="px-8 py-4 bg-white text-gray-700 font-medium rounded-2xl border border-gray-200 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all"
                >
                  Write a Story
                </button>
              )} */}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">
              Everything You Need
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A complete platform for creative expression and storytelling
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group p-8 bg-gray-50/50 rounded-3xl hover:bg-white hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-gradient-to-br from-violet-600 to-purple-700 rounded-3xl p-12 md:p-16 text-center">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full blur-3xl" />
            </div>

            <div className="relative">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Share Your Story?
              </h2>
              <p className="text-xl text-violet-100 mb-10 max-w-2xl mx-auto">
                Join thousands of creative writers and readers. Start your
                journey today.
              </p>
              {/* <button
                onClick={() =>
                  navigate(isAuthenticated ? "/write" : "/register")
                }
                className="px-8 py-4 bg-white text-violet-600 font-medium rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                {isAuthenticated ? "Start Writing" : "Get Started Free"}
              </button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-display text-lg font-semibold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                Pop Playground
              </span>
            </div>
            <p className="text-sm text-gray-500">
              Made with love for creative minds everywhere
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
