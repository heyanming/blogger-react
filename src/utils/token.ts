// Function to set the token in local storage
const TOKENKEY = "token";
function setToken(token: string) {
  localStorage.setItem(TOKENKEY, token);
}

// Function to get the token from local storage
function getToken(): string | null {
  return localStorage.getItem(TOKENKEY);
}

// Function to remove the token from local storage
function removeToken(): void {
  localStorage.removeItem(TOKENKEY);
}

// Export the token-related functions
export { setToken, getToken, removeToken };
