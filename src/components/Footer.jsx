export default function Footer() {
    return (
      <footer className="bg-black text-white py-4 mt-2">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} THE SOUL STORE. All rights reserved.
          </p>
          <div className="mt-4">
            <a href="/privacy" className="text-gray-400 hover:text-white px-2">Privacy Policy</a>
            <a href="/terms" className="text-gray-400 hover:text-white px-2">Terms of Service</a>
          </div>
        </div>
      </footer>
    );
  }
  