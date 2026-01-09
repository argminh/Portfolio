import { HiHeart } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="py-8 px-4 bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2">
          Built with <HiHeart className="text-red-500" /> using Next.js & Tailwind CSS
        </p>
        <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">
          © {new Date().getFullYear()} Minh Nguyen. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
