export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen flex">
      {/* Left Section (Branding) */}
      <div className="hidden md:flex w-1/2 bg-blue-600 text-white flex-col justify-center items-center p-10">
        <h1 className="text-4xl font-bold">JobPortal</h1>
        <p className="mt-4 text-lg text-blue-100 text-center max-w-md">
          Discover opportunities, connect with recruiters, and grow your career—all in one place.
        </p>
      </div>

      {/* Right Section (Form) */}
      <div className="flex w-full md:w-1/2 items-center justify-center bg-gray-50 p-6">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">
          {children}
        </div>
      </div>
    </div>
  );
}