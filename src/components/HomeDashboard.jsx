import { useState, useEffect } from 'react';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import { loginRequest } from '../config/msalConfig';

// Generate random stars for background
const stars = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  top: Math.random() * 100,
  delay: Math.random() * 3,
}));

function HomeDashboard() {
  const isAuthenticated = useIsAuthenticated();
  const { instance, accounts } = useMsal();
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserInfo = async () => {
      if (accounts.length > 0) {
        try {
          // Get access token for Microsoft Graph API
          const response = await instance.acquireTokenSilent({
            ...loginRequest,
            account: accounts[0],
          });

          // Fetch user profile from Microsoft Graph
          const graphResponse = await fetch('https://graph.microsoft.com/v1.0/me', {
            headers: {
              Authorization: `Bearer ${response.accessToken}`,
            },
          });

          if (graphResponse.ok) {
            const data = await graphResponse.json();
            setUserInfo(data);
          }
        } catch (error) {
          console.error('Error fetching user info:', error);
          // Fallback to account info from token
          setUserInfo({
            displayName: accounts[0]?.name,
            mail: accounts[0]?.username,
            userPrincipalName: accounts[0]?.username,
          });
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, [accounts, instance]);

  const handleLogout = () => {
    // Logout and clear account selection so user can choose different account next time
    instance.logoutPopup({
      account: instance.getActiveAccount(),
      postLogoutRedirectUri: window.location.origin,
    });
  };

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
      <div className="relative z-10 w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            SugarBuddy
          </h1>
          <p className="text-text-grey text-sm md:text-base">
            Your diabetes habit tracker
          </p>
        </div>

        {/* Dashboard Card */}
        <div className="card-glow rounded-2xl p-6 md:p-8 mb-6">
          {/* User Info */}
          <div className="mb-6 pb-6 border-b border-purple-medium/30">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex-1">
                <p className="text-text-grey text-sm mb-1">Welcome back</p>
                {loading ? (
                  <p className="text-white text-xl font-semibold">Loading...</p>
                ) : (
                  <>
                    <p className="text-white text-xl font-semibold">
                      {userInfo?.displayName || accounts[0]?.name || accounts[0]?.username || 'User'}
                    </p>
                    <p className="text-text-grey text-sm mt-1">
                      {userInfo?.mail || userInfo?.userPrincipalName || accounts[0]?.username || ''}
                    </p>
                    {userInfo?.jobTitle && (
                      <p className="text-text-grey text-xs mt-1">
                        {userInfo.jobTitle}
                      </p>
                    )}
                  </>
                )}
              </div>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-card-dark/80 border border-purple-medium/30 rounded-xl text-white hover:bg-card-dark transition-all duration-200"
              >
                Logout
              </button>
            </div>
          </div>

          {/* Signed In User Details */}
          {!loading && userInfo && (
            <div className="mb-6 pb-6 border-b border-purple-medium/30">
              <h3 className="text-white font-semibold mb-3">Signed In User Details</h3>
              <div className="bg-card-dark/30 rounded-xl p-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-text-grey text-sm">Display Name:</span>
                  <span className="text-white text-sm">{userInfo.displayName || 'N/A'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-grey text-sm">Email:</span>
                  <span className="text-white text-sm">{userInfo.mail || userInfo.userPrincipalName || 'N/A'}</span>
                </div>
                {userInfo.jobTitle && (
                  <div className="flex justify-between">
                    <span className="text-text-grey text-sm">Job Title:</span>
                    <span className="text-white text-sm">{userInfo.jobTitle}</span>
                  </div>
                )}
                {userInfo.officeLocation && (
                  <div className="flex justify-between">
                    <span className="text-text-grey text-sm">Office:</span>
                    <span className="text-white text-sm">{userInfo.officeLocation}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-text-grey text-sm">User ID:</span>
                  <span className="text-white text-sm font-mono text-xs">{userInfo.id || 'N/A'}</span>
                </div>
              </div>
            </div>
          )}

          {/* Dashboard Content */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              Today's Overview
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-card-dark/50 rounded-xl p-4 border border-purple-medium/20">
                <p className="text-text-grey text-sm mb-2">Blood Glucose</p>
                <p className="text-white text-2xl font-bold">--</p>
                <p className="text-text-grey text-xs mt-1">No reading today</p>
              </div>
              
              <div className="bg-card-dark/50 rounded-xl p-4 border border-purple-medium/20">
                <p className="text-text-grey text-sm mb-2">Sugar Intake</p>
                <p className="text-white text-2xl font-bold">-- g</p>
                <p className="text-text-grey text-xs mt-1">No entry today</p>
              </div>
              
              <div className="bg-card-dark/50 rounded-xl p-4 border border-purple-medium/20">
                <p className="text-text-grey text-sm mb-2">Water Intake</p>
                <p className="text-white text-2xl font-bold">--</p>
                <p className="text-text-grey text-xs mt-1">No entry today</p>
              </div>
              
              <div className="bg-card-dark/50 rounded-xl p-4 border border-purple-medium/20">
                <p className="text-text-grey text-sm mb-2">Exercise</p>
                <p className="text-white text-2xl font-bold">-- min</p>
                <p className="text-text-grey text-xs mt-1">No entry today</p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-purple-medium/30">
              <p className="text-text-grey text-center text-sm">
                Dashboard features Coming Soon...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeDashboard;
