- BUG #1: router.get("/users") returns all info about users, not just username, firstname, lastname.

- BUG #2: router.post("/auth/login") allows a user to login with an incorrect password.

- BUG #3: router.get("/users/:username") returns empty JSON and not a 404 for an invalid username.

- BUG #4: router.patch("/users/:username) does not allow logged in user to update own info.