export default function SearchNav() {
    return (
      <div className="flex justify-center mt-8">
        <input
          type="text"
          placeholder="Search..."
          className="w-11/12 max-w-2xl h-10 rounded-full px-5 bg-[#FFEDCC] text-base shadow-sm focus:outline-none focus:shadow-lg"
        />
      </div>
    );
  }