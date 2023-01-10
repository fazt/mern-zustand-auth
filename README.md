# MERN Zustand Auth

# Installation

```
git clone https://github.com/fazt/mern-zustand-auth
```

# Todo

- [ ] add environment variables
- [ ] upload images
- [ ] add tests
- [ ] password confirmation
- [ ] add forgot password
- [ ] add reset password
- [ ] add change password

    <nav>
      <ul>
        {isAuth ? (
          <>
            <li>
              <Link to="/dashboard">dashboard</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <button
                onClick={() => {
                  logout();
                  navigate("/login");
                }}
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>