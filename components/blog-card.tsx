import Link from 'next/link'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import type { BlogPost } from "@/types/blog"

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="w-full">
      <Link href={`/blog/${post.slug}`} className="no-underline">
        <Card className="h-full hover:shadow-md transition-shadow duration-200">
          <img
            src={post.image}
            alt={`${post.title} thumbnail`}
            className="block h-[220px] w-full rounded-t-lg bg-center bg-no-repeat object-cover dark:invert"
          />
          <CardContent className="p-6 pt-6 flex flex-col h-[calc(100%-220px)]">
            <div className="flex flex-col items-start gap-4 flex-grow">
              <div className="flex flex-col items-start gap-1">
                <p className="flex flex-row items-center text-sm text-muted-foreground">
                  <span>{post.date}</span>
                  <span className="mx-2 h-1 w-1 rounded-full bg-current" />
                  <span>{post.readingTime} minutes read</span>
                </p>
                <h5 className="text-lg font-semibold leading-normal tracking-tight">
                  {post.title}
                </h5>
              </div>
              <p className="text-base leading-normal text-muted-foreground flex-grow">
                {post.description}
              </p>
              <div className="w-full pt-4">
                <Badge variant="secondary">
                  {post.category}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </article>
  )
}

