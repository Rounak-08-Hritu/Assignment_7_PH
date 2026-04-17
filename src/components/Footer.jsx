import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white mt-0">
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
        
        {/* Title */}
        <h1 className="text-4xl font-bold mb-4">KeenKeeper</h1>

        {/* Description */}
        <p className="text-gray-200 text-sm max-w-xl mx-auto mb-6">
          Your personal shelf of meaningful connections. Browse, tend, and nurture 
          the relationships that matter most.
        </p>

        {/* Social Links */}
        <p className="text-sm mb-3">Social Links</p>
        <div className="flex justify-center gap-4 mb-8">
          <img src={facebook} className="w-8 h-8 bg-white p-1 rounded-full" />
          <img src={instagram} className="w-8 h-8 bg-white p-1 rounded-full" />
          <img src={twitter} className="w-8 h-8 bg-white p-1 rounded-full" />
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-300 border-t border-green-700 pt-4">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          
          <div className="flex gap-4 mt-2 md:mt-0">
            <span className="cursor-pointer hover:underline">Privacy Policy</span>
            <span className="cursor-pointer hover:underline">Terms of Service</span>
            <span className="cursor-pointer hover:underline">Cookies</span>
          </div>
        </div>

      </div>
    </footer>
  );
}