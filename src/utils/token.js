// Function to set the token in local storage
const TOKENKEY = "token";
function setToken(token) {
  localStorage.setItem(TOKENKEY, token);
}

// Function to get the token from local storage
function getToken() {
  return localStorage.getItem(TOKENKEY);
}

// Function to remove the token from local storage
function removeToken() {
  localStorage.removeItem(TOKENKEY);
}

// Export the token-related functions
export { setToken, getToken, removeToken };
