This is a repository to report a bug on the redirect() function of NextJS

## Description

This uses a middleware to redirect urls without the locale parameter to the respective locale route.

If '/login' is opened directly the middleware redirect the request to the '/en/login' without issue, and the browser
updates the url to '/en/login' too.

The problem is when we trigger a server action and inside it, we use the redirect('/login'),
without specifying the locale for the url. I want to leave the locale resolution to the middleware like it normally will.

The middleware handles the redirect perfectly, and the route '/en/login' is rendered, but the url on the browser remains at '/login'.

## Expected behavior

After using the redirect('/login') inside a server action, the browser url must be updated to '/en/login'.