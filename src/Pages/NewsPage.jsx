import { useState } from "react";
import Navbar from "../Components/Navbar";

const News = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Breaking News: React 18 Released!",
      summary: "React 18 introduces concurrent rendering and more...",
      content: "React 18 introduces new features such as concurrent rendering, automatic batching, and much more. The release focuses on performance improvements and developer experience...",
      author: "John Doe",
      date: "2024-11-29"
    },
    {
      id: 2,
      title: "Tailwind CSS 4.0: What's New?",
      summary: "Tailwind 4.0 brings dark mode enhancements and powerful utilities...",
      content: "Tailwind CSS 4.0 has arrived with amazing features like better dark mode handling, container queries, and improved performance. This release ensures faster load times and more flexibility for developers...",
      author: "Jane Smith",
      date: "2024-11-25"
    },
    // Add more posts as needed
  ];

  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <>
   <Navbar /> 
    
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          News and Updates
        </h1>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-lg rounded-lg p-4 cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => setSelectedPost(post)}
            >
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-500 text-sm mb-2">{post.date}</p>
              <p className="text-gray-700">{post.summary}</p>
            </div>
          ))}
        </div>

        {/* Modal for detailed view */}
        {selectedPost && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl relative">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                onClick={() => setSelectedPost(null)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <h2 className="text-3xl font-semibold mb-4">{selectedPost.title}</h2>
              <p className="text-gray-600 mb-2">By {selectedPost.author}</p>
              <p className="text-gray-500 text-sm mb-6">{selectedPost.date}</p>
              <p className="text-gray-700 leading-relaxed">{selectedPost.content}</p>
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default News;
