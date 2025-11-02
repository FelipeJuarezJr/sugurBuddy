import { useState } from 'react'

function RegisterScreen({ onSwitchToLogin }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle registration logic here
    console.log('Register:', formData)
  }

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
            Create your account
          </p>
        </div>

        {/* Register Card */}
        <div className="card-glow rounded-2xl p-6 md:p-8 mb-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block text-white text-sm mb-2 font-medium"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-card-dark/80 border border-purple-medium/30 rounded-xl px-4 py-3 text-white placeholder-text-grey focus:outline-none focus:ring-2 focus:ring-purple-medium focus:border-transparent transition-all"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-white text-sm mb-2 font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-card-dark/80 border border-purple-medium/30 rounded-xl px-4 py-3 text-white placeholder-text-grey focus:outline-none focus:ring-2 focus:ring-purple-medium focus:border-transparent transition-all"
                placeholder="Enter your email"
                required
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
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-card-dark/80 border border-purple-medium/30 rounded-xl px-4 py-3 text-white placeholder-text-grey focus:outline-none focus:ring-2 focus:ring-purple-medium focus:border-transparent transition-all"
                placeholder="Create a password"
                required
                minLength={8}
              />
            </div>

            {/* Confirm Password Input */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-white text-sm mb-2 font-medium"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full bg-card-dark/80 border border-purple-medium/30 rounded-xl px-4 py-3 text-white placeholder-text-grey focus:outline-none focus:ring-2 focus:ring-purple-medium focus:border-transparent transition-all"
                placeholder="Confirm your password"
                required
                minLength={8}
              />
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start text-sm">
              <input
                type="checkbox"
                id="terms"
                className="mt-1 mr-2 w-4 h-4 rounded border-purple-medium bg-card-dark/80 text-purple-medium focus:ring-purple-medium"
                required
              />
              <label htmlFor="terms" className="text-text-grey cursor-pointer">
                I agree to the{' '}
                <a
                  href="#"
                  className="text-purple-medium hover:text-purple-bright transition-colors"
                >
                  Terms of Service
                </a>{' '}
                and{' '}
                <a
                  href="#"
                  className="text-purple-medium hover:text-purple-bright transition-colors"
                >
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-button-gradient rounded-xl py-4 text-white font-bold text-lg btn-gradient transition-all duration-200 shadow-lg"
            >
              Create Account
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

          {/* Microsoft Sign Up Button */}
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
            Sign up with Microsoft
          </button>
        </div>

        {/* Sign In Link */}
        <div className="text-center text-text-grey text-sm">
          Already have an account?{' '}
          <button
            onClick={onSwitchToLogin}
            className="text-purple-medium hover:text-purple-bright transition-colors font-medium"
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  )
}

export default RegisterScreen

