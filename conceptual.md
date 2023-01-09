### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
> A JWT is a method of authentication via a token that allows an application to check whether or not a request is valid and linked to that application.

- What is the signature portion of the JWT?  What does it do?
> The signature is a unique string added on to the token that allows the application to check if the request is valid. The signature has a unique pattern when decrypted that only the application knows, like an encrypted password.

- If a JWT is intercepted, can the attacker see what's inside the payload?
> Yes; the payload is not encrypted.

- How can you implement authentication with a JWT?  Describe how it works at a high level.
> Infomation sent includes a header, the payload, and a signature. The header contains metadata such as time and language. The payload is the actual data being sent, such as a search term or comment, and the signature verifies that the request is legitimate. JWTs take the payload and add the signature when creating the token, then verify the signature on incoming requests.

- Compare and contrast unit, integration and end-to-end tests.
> Unit tests are small scale and typically test only a function in scope. Integration combines different functions in one test and can test specific routes, such as User routes or Job routes. End-to-end tests test the application as a whole. This might simulate creating a user, making a post, deleting a post, then logging out, all in one test.

- What is a mock? What are some things you would mock?
> Mocks simulate objects that are difficult to determine, such as random numbers, and allow us to focus on the code itself rather than trying to determine the random element. This helpful when testing functions with random numbers that can vary and will be overwritten with a mock function that always returns the same value.

- What is continuous integration?
> Development with smaller changes and faster pushes to deploy code quicker. Developers can set up tests to check for working code that automatically deploy new builds, allowing for more minor updates but continuous ones.

- What is an environment variable and what are they used for?
> Environment variables are like the settings of an application; they configure different setups for the application, like if the app is running in development mode or is ready for deployment.

- What is TDD? What are some benefits and drawbacks?
> Test Driven Development creates tests before working on the application's code. This can help create an idea of what needs to be completed and how to go about completing it, and sets expectations for what needs to be done. However, TDD takes more time since tests need to be created before getting to work on the actual code.

- What is the value of using JSONSchema for validation?
> JSONSchema checks the type of data being sent and can verify if it is in the correct format before sending it to the server, reducing the need for long and complicated conditionals within the code. 

- What are some ways to decide which code to test?
> A good rule of thumb can be writing tests for each path in a route to make sure the route works and functions as expected. An object model also should have tests on each method to verify that they work. Tests are also helpful on more complicated routes that might require current user or admin authentication, but not allow anonymous interactions.

- What does `RETURNING` do in SQL? When would you use it?
> `RETURNING` sends back specifically requested information from the query, rather than all of the columns in a table. This is especially useful when sending back information that is expected, like extracting only the username from the creation of a user that includes username, email, phone, etc.

- What are some differences between Web Sockets and HTTP?
> Web Sockets stay connected between a client and a server while HTTP makes a request, gets a response, and disconnects. Web Sockets allow for constant communication and updates between a client and server and are useful for applications that need constant updates between client and server.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
> Both have their pros and their cons; Express has a huge well-developed library of resources to aid in production and allows for easy integration of middleware. Flask is a bit cleaner to read and allows for easy import/export of related files in an application. The installation of required packages and creating a virtual enviornment is more tedious in Flask whereas Express installs packages relatively simply. However, Flasks routes are a bit more straightforward and easy to understand compared to Express, but testing in Express is easier than Flask (personally). I think that the more complicated a project becomes, the better Express is, and that Flask is best suited for smaller apps. I also think ORM support for Flask is much better than Express, and would hope one day that a great ORM for Express will exist.
