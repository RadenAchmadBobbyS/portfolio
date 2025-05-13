export default function Footer() {
    return (
      <footer className="py-6 px-4 border-t border-white/10 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Raden Achmad Bobby Syakir. All rights reserved.</p>
          <p className="mt-2">Designed and built with Next.js and Tailwind CSS</p>
        </div>
      </footer>
    )
  }
  