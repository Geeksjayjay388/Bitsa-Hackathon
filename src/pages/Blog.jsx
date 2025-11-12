import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
function Blog() {
  const [selectedTag, setSelectedTag] = useState('All');

  const tags = ['All', 'Tech Trends', 'Tutorials', 'Career Advice', 'Community'];

  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with Cloud Computing: A Beginner's Guide",
      excerpt: "Dive into the world of cloud computing and learn about AWS, Azure, and Google Cloud Platform. Perfect for beginners looking to start their cloud journey.",
      author: "Sarah Kamau",
      authorRole: "Cloud Architect",
      date: "December 5, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      tag: "Tutorials",
      featured: true
    },
    {
      id: 2,
      title: "The Future of AI in Software Development",
      excerpt: "Explore how artificial intelligence is revolutionizing the way we write code, debug, and deploy applications in modern software development.",
      author: "David Ochieng",
      authorRole: "AI Researcher",
      date: "December 3, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      tag: "Tech Trends",
      featured: false
    },
    {
      id: 3,
      title: "How to Land Your First Tech Internship",
      excerpt: "Practical tips and strategies for students looking to secure their first internship in the tech industry. Learn from those who've been there.",
      author: "Grace Mwangi",
      authorRole: "Career Coach",
      date: "November 28, 2024",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
      tag: "Career Advice",
      featured: false
    },
    {
      id: 4,
      title: "Building a Scalable Database: Best Practices",
      excerpt: "Master the art of database design with these proven best practices. Learn about normalization, indexing, and query optimization.",
      author: "James Kiprono",
      authorRole: "Database Engineer",
      date: "November 25, 2024",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80",
      tag: "Tutorials",
      featured: false
    },
    {
      id: 5,
      title: "BITSA Hackathon 2023 Highlights",
      excerpt: "Relive the excitement of our biggest hackathon yet! See the innovative projects, meet the winners, and discover what made this event unforgettable.",
      author: "BITSA Team",
      authorRole: "Community Manager",
      date: "November 20, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
      tag: "Community",
      featured: false
    },
    {
      id: 6,
      title: "Cybersecurity Fundamentals Every Developer Should Know",
      excerpt: "Security isn't just for security experts. Learn the essential cybersecurity practices every developer needs to build secure applications.",
      author: "Michael Otieno",
      authorRole: "Security Specialist",
      date: "November 15, 2024",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
      tag: "Tutorials",
      featured: false
    },
    {
      id: 7,
      title: "Web3 and Blockchain: What You Need to Know",
      excerpt: "Demystifying blockchain technology and Web3. Understand the fundamentals and explore career opportunities in this emerging field.",
      author: "Patricia Wanjiru",
      authorRole: "Blockchain Developer",
      date: "November 10, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
      tag: "Tech Trends",
      featured: false
    },
    {
      id: 8,
      title: "Building Your Personal Brand as a Developer",
      excerpt: "Stand out in the tech industry by building a strong personal brand. Tips on networking, content creation, and professional growth.",
      author: "Brian Mutua",
      authorRole: "Tech Influencer",
      date: "November 5, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
      tag: "Career Advice",
      featured: false
    },
    {
      id: 9,
      title: "React Best Practices for 2024",
      excerpt: "Stay ahead with the latest React patterns and best practices. From hooks to performance optimization, level up your React skills.",
      author: "Lucy Akinyi",
      authorRole: "Frontend Developer",
      date: "October 30, 2024",
      readTime: "11 min read",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
      tag: "Tutorials",
      featured: false
    }
  ];

  const filteredPosts = selectedTag === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.tag === selectedTag);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const getTagColor = (tag) => {
    const colors = {
      'Tech Trends': 'from-cyan-500 to-blue-500',
      'Tutorials': 'from-blue-500 to-indigo-500',
      'Career Advice': 'from-indigo-500 to-purple-500',
      'Community': 'from-purple-500 to-pink-500'
    };
    return colors[tag] || 'from-cyan-500 to-blue-500';
  };

  return (
    <div className="min-h-screen bg-black text-white">
        <Navbar />
      {/* Animated Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 px-6 py-20">
        {/* Header */}
        <div className="max-w-7xl mx-auto mb-16 text-center">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-md border border-cyan-400/30 rounded-full mb-6">
            <p className="text-cyan-300 text-sm font-semibold tracking-widest">INSIGHTS & STORIES</p>
          </div>
          <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent mb-6">
            BITSA Blog
          </h1>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Discover the latest in tech, learn from tutorials, get career advice, and stay connected with the BITSA community.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mt-8"></div>
        </div>

        {/* Tag Filter */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="flex flex-wrap justify-center gap-4">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${
                  selectedTag === tag
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-400/50 scale-105'
                    : 'bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10 hover:border-cyan-400/50'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        {selectedTag === 'All' && featuredPost && (
          <div className="max-w-7xl mx-auto mb-20">
            <div className="relative group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-400/20">
              <div className="grid md:grid-cols-2 gap-8 p-8">
                {/* Image */}
                <div className="relative h-80 md:h-full rounded-2xl overflow-hidden">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      Featured
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center">
                  <div className="mb-4">
                    <span className={`px-4 py-2 bg-gradient-to-r ${getTagColor(featuredPost.tag)} text-white text-sm font-bold rounded-full`}>
                      {featuredPost.tag}
                    </span>
                  </div>
                  <h2 className="text-4xl font-black text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-slate-300 text-lg leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-lg">
                      {featuredPost.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-white font-bold">{featuredPost.author}</p>
                      <p className="text-slate-400 text-sm">{featuredPost.authorRole}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 text-slate-400 text-sm mb-6">
                    <span className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <button className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/50 group-hover:scale-105">
                    Read Full Article
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <div 
                key={post.id}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/20"
                style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both` }}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className={`px-4 py-1 bg-gradient-to-r ${getTagColor(post.tag)} text-white text-xs font-bold rounded-full`}>
                      {post.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-black text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/10">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold">
                      {post.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">{post.author}</p>
                      <p className="text-slate-400 text-xs">{post.authorRole}</p>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-slate-400 text-xs">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {post.readTime}
                    </span>
                  </div>

                  <button className="w-full mt-4 py-3 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-cyan-500 hover:border-cyan-500 transition-all duration-300 group-hover:scale-105">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="max-w-4xl mx-auto mt-20">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 backdrop-blur-xl border border-cyan-400/30 p-12 text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 animate-pulse"></div>
            <div className="relative">
              <h3 className="text-3xl font-black text-white mb-4">Never Miss a Post</h3>
              <p className="text-slate-300 mb-8">Subscribe to our newsletter and get the latest tech insights delivered to your inbox.</p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400/50 transition-all"
                />
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/50 hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
      <Footer/>
    </div>
  );
}

export default Blog;