import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    id: 1,
    title: "Understanding Genetic Testing: A Comprehensive Guide",
    excerpt: "Learn about the different types of genetic tests available and what they can tell you about your health.",
    date: "June 10, 2025",
    category: "Education",
    image: "/blog/genetic-testing-guide.png",
  },
  {
    id: 2,
    title: "The Future of Personalized Medicine",
    excerpt: "How genetic information is revolutionizing healthcare and enabling tailored treatments.",
    date: "June 5, 2025",
    category: "Research",
    image: "/blog/personalized-medicine.png",
  },
  {
    id: 3,
    title: "Genetic Privacy: What You Need to Know",
    excerpt: "Important considerations about your genetic data privacy and how to protect your information.",
    date: "May 28, 2025",
    category: "Privacy",
    image: "/blog/genetic-privacy.png",
  },
  {
    id: 4,
    title: "Common Myths About Genetics Debunked",
    excerpt: "Separating fact from fiction when it comes to genetics and inherited traits.",
    date: "May 20, 2025",
    category: "Education",
    image: "/blog/genetics-myths.png",
  },
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Blog</h1>
        <p className="text-gray-700 mb-8">
          Stay up to date with the latest news, research, and insights in genetics and personalized healthcare.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-pink-100 text-pink-800">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <Link href={`/blog/${post.id}`}>
                  <Button variant="outline">Read More</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button variant="outline" className="mr-2">
            Previous
          </Button>
          <Button variant="outline">Next</Button>
        </div>
      </div>
    </div>
  )
}
