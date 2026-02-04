"use client";
import React, { useState, useMemo, useEffect } from "react";
import {
  Heart,
  Bookmark,
  Share2,
  Clock,
  Eye,
  MessageCircle,
  Calendar,
  ArrowRight,
  Tag,
  Star,
  TrendingUp,
  Search,
  Filter,
  LayoutGrid,
  List,
  MoreHorizontal,
  X,
  ChevronRight,
  Mail,
} from "lucide-react";

// --- Mock Data ---
const AUTHOR_DATA = [
  {
    name: "Alex Johnson",
    role: "Tech Lead",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100",
    articles: 12,
  },
  {
    name: "Sarah Chen",
    role: "UX Designer",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=100",
    articles: 8,
  },
  {
    name: "Michael Rodriguez",
    role: "Entrepreneur",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100",
    articles: 15,
  },
];

const BLOG_POSTS = [
  {
    id: 1,
    title: "The Future of AI in Web Development",
    excerpt:
      "Discover how artificial intelligence is revolutionizing the way we build and interact with web applications.",
    author: "Alex Johnson",
    date: "2024-03-15",
    readTime: 8,
    views: 2400,
    comments: 42,
    likes: 156,
    category: "Technology",
    tags: ["AI", "Web Dev", "Future"],
    isFeatured: true,
    isTrending: true,
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000",
    authorImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100",
  },
  {
    id: 2,
    title: "Minimalist Design Principles",
    excerpt:
      "Learn how to create clean, user-friendly interfaces that focus on essential elements and functionality.",
    author: "Sarah Chen",
    date: "2024-03-12",
    readTime: 6,
    views: 1800,
    comments: 28,
    likes: 98,
    category: "Design",
    tags: ["Design", "UI/UX", "Minimalism"],
    isFeatured: false,
    isTrending: true,
    image:
      "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?q=80&w=1000",
    authorImage:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=100",
  },
  {
    id: 3,
    title: "Building a Sustainable Tech Business",
    excerpt:
      "Strategies for creating technology companies that are both profitable and environmentally conscious.",
    author: "Michael Rodriguez",
    date: "2024-03-10",
    readTime: 10,
    views: 3200,
    comments: 56,
    likes: 210,
    category: "Business",
    tags: ["Business", "Sustainability", "Tech"],
    isFeatured: true,
    isTrending: false,
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000",
    authorImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100",
  },
  {
    id: 4,
    title: "Mindfulness and Productivity",
    excerpt:
      "How practicing mindfulness can actually increase your productivity and creativity at work.",
    author: "Emma Wilson",
    date: "2024-03-08",
    readTime: 7,
    views: 1500,
    comments: 34,
    likes: 124,
    category: "Lifestyle",
    tags: ["Wellness", "Productivity", "Mindfulness"],
    isFeatured: false,
    isTrending: false,
    image:
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=1000",
    authorImage:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100",
  },
  {
    id: 5,
    title: "Digital Nomad Essentials for 2024",
    excerpt:
      "The must-have tools and strategies for working remotely from anywhere in the world.",
    author: "David Park",
    date: "2024-03-05",
    readTime: 9,
    views: 2100,
    comments: 47,
    likes: 178,
    category: "Travel",
    tags: ["Travel", "Remote Work", "Digital Nomad"],
    isFeatured: false,
    isTrending: true,
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1000",
    authorImage:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100",
  },
  {
    id: 6,
    title: "The Science of Better Sleep",
    excerpt:
      "How modern tech can help improve your sleep quality and overall health.",
    author: "Dr. Lisa Wang",
    date: "2024-03-03",
    readTime: 11,
    views: 2800,
    comments: 39,
    likes: 195,
    category: "Health",
    tags: ["Health", "Sleep", "Science"],
    isFeatured: true,
    isTrending: false,
    image:
      "https://images.unsplash.com/photo-1548600916-dc8492f8e845?q=80&w=1000",
    authorImage:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=100",
  },
];

const CATEGORIES = [
  "All",
  "Technology",
  "Design",
  "Business",
  "Lifestyle",
  "Travel",
  "Health",
];

// --- Components ---

const SkeletonCard = ({ viewMode }: any) => (
  <div
    className={`bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm ${viewMode === "list" ? "flex h-48" : "h-[460px]"}`}
  >
    <div
      className={`bg-gray-200 animate-pulse ${viewMode === "list" ? "w-1/3 h-full" : "w-full h-56"}`}
    />
    <div className="p-6 flex-1 space-y-4">
      <div className="flex gap-2">
        <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
        <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
      </div>
      <div className="h-8 w-3/4 bg-gray-200 rounded animate-pulse" />
      <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
      <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse" />
      <div className="flex justify-between pt-4">
        <div className="h-10 w-10 rounded-full bg-gray-200 animate-pulse" />
        <div className="h-6 w-20 bg-gray-200 rounded animate-pulse" />
      </div>
    </div>
  </div>
);

const BlogCards = () => {
  // --- State ---
  const [liked, setLiked] = useState([]);
  const [saved, setSaved] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid"); // 'grid' | 'list'
  const [sortBy, setSortBy] = useState("newest"); // 'newest' | 'popular' | 'fastest'
  const [loading, setLoading] = useState(false);
  const [activeFilterMenu, setActiveFilterMenu] = useState(false);

  // --- Handlers ---
  const handleLike = (id: any) => {
    setLiked((prev: any) =>
      prev.includes(id) ? prev.filter((pid: any) => pid !== id) : [...prev, id],
    );
  };

  const handleSave = (id: any) => {
    setSaved((prev: any) =>
      prev.includes(id) ? prev.filter((pid: any) => pid !== id) : [...prev, id],
    );
  };

  // Simulate loading when filtering
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, [activeCategory, searchQuery, sortBy]);

  // --- Filtering & Sorting Logic ---
  const processedPosts = useMemo(() => {
    let posts = [...BLOG_POSTS];

    // Filter by Category
    if (activeCategory !== "All") {
      posts = posts.filter((post) => post.category === activeCategory);
    }

    // Filter by Search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      posts = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.tags.some((tag) => tag.toLowerCase().includes(query)) ||
          post.author.toLowerCase().includes(query),
      );
    }

    // Sort
    if (sortBy === "popular") {
      posts.sort((a, b) => b.views - a.views);
    } else if (sortBy === "fastest") {
      posts.sort((a, b) => a.readTime - b.readTime);
    } else {
      // Newest
      posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    return posts;
  }, [activeCategory, searchQuery, sortBy]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-700 pb-20 py-16">
      {/* --- Navigation / Header --- */}

      <div className="max-w-7xl mx-auto px-4 pt-8">
        {/* --- Featured Header --- */}
        {!searchQuery && activeCategory === "All" && (
          <div className="mb-12 relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-900 via-violet-900 to-slate-900 p-8 md:p-12 text-white shadow-2xl shadow-indigo-900/20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-200 text-xs font-semibold mb-6">
                  <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                  Featured Story
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  The Future of AI in Web Development
                </h2>
                <p className="text-indigo-100/80 text-lg mb-8 max-w-xl">
                  Artificial intelligence is not just a buzzword anymore. It's
                  revolutionizing how we write code, design interfaces, and
                  deploy applications.
                </p>
                <div className="flex items-center gap-4">
                  <button className="px-6 py-3 bg-white text-indigo-900 rounded-xl font-bold hover:bg-indigo-50 transition-colors">
                    Read Article
                  </button>
                  <button className="p-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors">
                    <Bookmark className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="hidden md:block relative group">
                <div className="absolute inset-0 bg-indigo-500/30 blur-2xl transform group-hover:scale-105 transition-transform duration-700"></div>
                <img
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000"
                  alt="Featured"
                  className="relative rounded-2xl shadow-2xl border border-white/10 transform group-hover:-translate-y-2 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        )}

        {/* --- Main Content Area --- */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Feed */}
          <div className="flex-1">
            {/* Filters Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              {/* Category Pills */}
              <div className="flex overflow-x-auto pb-2 sm:pb-0 gap-2 w-full sm:w-auto scrollbar-hide">
                {CATEGORIES.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                      activeCategory === category
                        ? "bg-gray-900 text-white border-gray-900 shadow-md"
                        : "bg-white text-gray-600 border-gray-200 hover:border-indigo-300 hover:text-indigo-600"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* View & Sort Controls */}
              <div className="flex items-center gap-2 ml-auto">
                <div className="relative">
                  <button
                    onClick={() => setActiveFilterMenu(!activeFilterMenu)}
                    className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors"
                  >
                    <Filter className="h-4 w-4" />
                    <span className="hidden sm:inline">
                      Sort: {sortBy.charAt(0).toUpperCase() + sortBy.slice(1)}
                    </span>
                    <ChevronRight
                      className={`h-3 w-3 transition-transform ${activeFilterMenu ? "rotate-90" : ""}`}
                    />
                  </button>

                  {/* Dropdown */}
                  {activeFilterMenu && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 z-30 overflow-hidden animate-in fade-in slide-in-from-top-2">
                      {[
                        { id: "newest", label: "Newest First" },
                        { id: "popular", label: "Most Popular" },
                        { id: "fastest", label: "Quick Reads" },
                      ].map((opt) => (
                        <button
                          key={opt.id}
                          onClick={() => {
                            setSortBy(opt.id);
                            setActiveFilterMenu(false);
                          }}
                          className={`w-full text-left px-4 py-3 text-sm hover:bg-gray-50 flex items-center justify-between ${sortBy === opt.id ? "text-indigo-600 font-medium bg-indigo-50/50" : "text-gray-600"}`}
                        >
                          {opt.label}
                          {sortBy === opt.id && (
                            <div className="h-2 w-2 rounded-full bg-indigo-600"></div>
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex items-center bg-white border border-gray-200 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-1.5 rounded transition-all ${viewMode === "grid" ? "bg-gray-100 text-indigo-600 shadow-sm" : "text-gray-400 hover:text-gray-600"}`}
                  >
                    <LayoutGrid className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-1.5 rounded transition-all ${viewMode === "list" ? "bg-gray-100 text-indigo-600 shadow-sm" : "text-gray-400 hover:text-gray-600"}`}
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Results Grid/List */}
            {loading ? (
              <div
                className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"}`}
              >
                {[1, 2, 3, 4].map((n) => (
                  <SkeletonCard key={n} viewMode={viewMode} />
                ))}
              </div>
            ) : processedPosts.length > 0 ? (
              <div
                className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"}`}
              >
                {processedPosts.map((post) => (
                  <div
                    key={post.id}
                    className={`group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-indigo-100 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-100/40 flex ${viewMode === "list" ? "flex-col sm:flex-row" : "flex-col"}`}
                  >
                    {/* Image Section */}
                    <div
                      className={`relative overflow-hidden ${viewMode === "list" ? "sm:w-64 h-56 sm:h-auto" : "h-56"}`}
                    >
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="absolute top-4 left-4 flex gap-2">
                        {post.isFeatured && (
                          <span className="px-2.5 py-1 bg-white/95 backdrop-blur text-xs font-bold text-indigo-600 rounded-lg shadow-sm flex items-center gap-1">
                            <Star className="h-3 w-3 fill-indigo-600" />{" "}
                            Featured
                          </span>
                        )}
                        {post.isTrending && (
                          <span className="px-2.5 py-1 bg-white/95 backdrop-blur text-xs font-bold text-orange-500 rounded-lg shadow-sm flex items-center gap-1">
                            <TrendingUp className="h-3 w-3" /> Hot
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 p-6 flex flex-col">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md uppercase tracking-wider">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-3 text-gray-400">
                          <button
                            onClick={() => handleSave(post.id)}
                            className="hover:text-indigo-600 transition-colors"
                          >
                            <Bookmark
                              className={`h-5 w-5 ${saved.includes(post.id) ? "fill-indigo-600 text-indigo-600" : ""}`}
                            />
                          </button>
                        </div>
                      </div>

                      <h3
                        className={`font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors ${viewMode === "list" ? "text-2xl" : "text-xl"}`}
                      >
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2 flex-grow">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center gap-2 mb-6 flex-wrap">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-md flex items-center gap-1"
                          >
                            <Tag className="h-3 w-3" /> {tag}
                          </span>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-3">
                          <img
                            src={post.authorImage}
                            alt={post.author}
                            className="h-9 w-9 rounded-full object-cover ring-2 ring-white shadow-sm"
                          />
                          <div className="text-xs">
                            <p className="font-semibold text-gray-900">
                              {post.author}
                            </p>
                            <p className="text-gray-500">{post.date}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 text-xs text-gray-500 font-medium">
                          <span className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-md">
                            <Clock className="h-3 w-3" /> {post.readTime} min
                          </span>
                          <button
                            onClick={() => handleLike(post.id)}
                            className={`flex items-center gap-1 transition-colors ${liked.includes(post.id) ? "text-red-500" : "hover:text-red-500"}`}
                          >
                            <Heart
                              className={`h-4 w-4 ${liked.includes(post.id) ? "fill-red-500" : ""}`}
                            />
                            {post.likes + (liked.includes(post.id) ? 1 : 0)}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // Empty State
              <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
                <div className="bg-gray-100 p-6 rounded-full mb-6">
                  <Search className="h-10 w-10 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  No matches found
                </h3>
                <p className="text-gray-500 max-w-sm mx-auto mb-6">
                  We couldn't find any articles matching "{searchQuery}". Try
                  adjusting your search or filters.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("All");
                  }}
                  className="px-6 py-2.5 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}

            {/* Pagination / Load More */}
            {!loading && processedPosts.length > 0 && (
              <div className="mt-12 flex justify-center">
                <button className="group flex items-center gap-2 px-8 py-3.5 bg-white border border-gray-200 text-gray-700 rounded-2xl font-semibold hover:border-indigo-200 hover:text-indigo-600 hover:shadow-lg hover:shadow-indigo-50 transition-all active:scale-95">
                  Load More Articles
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="lg:w-80 space-y-8 h-fit lg:sticky lg:top-24">
            {/* Newsletter Widget */}
            <div className="bg-indigo-900 rounded-2xl p-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10">
                <h3 className="font-bold text-xl mb-2">Weekly Digest</h3>
                <p className="text-indigo-200 text-sm mb-4">
                  Get the latest insights delivered straight to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-indigo-400/30 text-white placeholder-indigo-300 focus:outline-none focus:bg-white/20 transition-colors text-sm"
                  />
                  <button className="w-full py-3 bg-white text-indigo-900 font-bold rounded-xl text-sm hover:bg-indigo-50 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Trending Tags */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-indigo-600" /> Trending
                Topics
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Artificial Intelligence",
                  "React 19",
                  "Sustainability",
                  "Mental Health",
                  "Minimalism",
                  "Remote Work",
                ].map((tag) => (
                  <button
                    key={tag}
                    className="px-3 py-1.5 bg-gray-50 hover:bg-indigo-50 text-gray-600 hover:text-indigo-600 text-xs font-medium rounded-lg transition-colors border border-transparent hover:border-indigo-100"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Top Authors */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Top Contributors</h3>
              <div className="space-y-4">
                {AUTHOR_DATA.map((author, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 group cursor-pointer"
                  >
                    <img
                      src={author.avatar}
                      alt={author.name}
                      className="h-10 w-10 rounded-full object-cover group-hover:ring-2 ring-indigo-500 transition-all"
                    />
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                        {author.name}
                      </h4>
                      <p className="text-xs text-gray-500">{author.role}</p>
                    </div>
                    <span className="text-xs font-medium bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      {author.articles} articles
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCards;
