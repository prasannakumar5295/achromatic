import { BlogCard } from "@/components/blog-card"
import { blogPosts } from "@/data/blog-posts"
import { Footer } from "@/components/footer"

export default function BlogPage() {
  return (
    <div className="container flex-1 items-start">
      <section className="container relative">
        <div className="bg-background pt-16 sm:pt-20 lg:pt-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                Blog
              </h2>
              <p className="mt-6 hidden text-lg leading-7 text-muted-foreground sm:block">
                Discover the latest tips and news for building your product.
              </p>
            </div>
            <div className="py-8">
              {/* All cards in a single grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {blogPosts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

