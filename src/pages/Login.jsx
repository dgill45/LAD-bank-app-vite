const login = async (username, password) => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (response.ok) {
        const data = await response.json();
        // Handle successful login, store session data
        setIsLoggedIn(true);
        // Further processing based on the response
      } else {
        // Handle login failure
        setNotif({message: 'Wrong username and password.', style: 'danger'});
      }
    } catch (error) {
      // Handle network or other errors
      setNotif({message: 'Login failed. Please try again.', style: 'danger'});
    }
  };
  