import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`Computer Science graduate from the University of California, San Diego. I'm passionate about software engineering and design. Areas of interest include AI, crypto, sports.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
