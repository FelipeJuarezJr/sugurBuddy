import { useState } from 'react'

function LoginScreen({ onSwitchToRegister }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Generate random stars for background
  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 3,
  }))

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
      {/* Star field background */}
      <div className="star-field">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Purple gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-dark/30 to-purple-bright/40 pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            SugarBuddy
          </h1>
          <p className="text-text-grey text-sm md:text-base">
            Your diabetes habit tracker
          </p>
        </div>

        {/* Login Card */}
        <div className="card-glow rounded-2xl p-6 md:p-8 mb-6">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            {/* Email/Username Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-white text-sm mb-2 font-medium"
              >
                Email or Username
              </label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-card-dark/80 border border-purple-medium/30 rounded-xl px-4 py-3 text-white placeholder-text-grey focus:outline-none focus:ring-2 focus:ring-purple-medium focus:border-transparent transition-all"
                placeholder="Enter your email"
              />
            </div>

            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="block text-white text-sm mb-2 font-medium"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-card-dark/80 border border-purple-medium/30 rounded-xl px-4 py-3 text-white placeholder-text-grey focus:outline-none focus:ring-2 focus:ring-purple-medium focus:border-transparent transition-all"
                placeholder="Enter your password"
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="mr-2 w-4 h-4 rounded border-purple-medium bg-card-dark/80 text-purple-medium focus:ring-purple-medium"
                />
                <span className="text-text-grey">Remember me</span>
              </label>
              <a
                href="#"
                className="text-purple-medium hover:text-purple-bright transition-colors"
              >
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-button-gradient rounded-xl py-4 text-white font-bold text-lg btn-gradient transition-all duration-200 shadow-lg"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-purple-medium/30"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-transparent text-text-grey">or</span>
            </div>
          </div>

          {/* Microsoft Login Button */}
          <button
            type="button"
            className="w-full bg-card-dark/80 border border-purple-medium/30 rounded-xl py-4 text-white font-semibold hover:bg-card-dark transition-all duration-200 flex items-center justify-center gap-3"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0H10.8571V10.8571H0V0Z" fill="#F25022" />
              <path
                d="M12.1429 0H23V10.8571H12.1429V0Z"
                fill="#7FBA00"
              />
              <path
                d="M0 12.1429H10.8571V23H0V12.1429Z"
                fill="#00A4EF"
              />
              <path
                d="M12.1429 12.1429H23V23H12.1429V12.1429Z"
                fill="#FFB900"
              />
            </svg>
            Continue with Microsoft
          </button>
        </div>

        {/* Sign Up Link */}
        <div className="text-center text-text-grey text-sm">
          Don't have an account?{' '}
          <button
            onClick={onSwitchToRegister}
            className="text-purple-medium hover:text-purple-bright transition-colors font-medium"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginScreen

