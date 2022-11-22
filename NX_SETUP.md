## Nx showcase

1. Install **Nx Console** VS Code extension

2. Create new Nx workspace

```
yarn create nx-workspace
```

3. Create new React host application

```
nx g @nrwl/react:application dashboard --routing
nx g @nrwl/react:host dashboard
```

4. Create new React remote application

```
nx g @nrwl/react:application login
nx g @nrwl/react:remote login --host=dashboard
```

5. Create new React component library

```
nx g @nrwl/react:library components --buildable --publishable --importPath=components --component=false
nx g @nrwl/react:component login-form --project=components
```

6. Create a storybook for the component library

```
nx g @nrwl/react:storybook-configuration components
```

7. Add cypress component testing to the component library

```
nx g @nrwl/react:cypress-component-configuration --project=components
```

6. Create new Mock-API application

```
nx g @nrwl/express:app mock-api --frontendProject=dashboard
```

```
app.get('/api/dashboard', (req, res) => {
  res.send('Received a GET HTTP method');
});
```

```
const [data, setData] = useState(null)

useEffect(() => {
  fetch('http://localhost:4400/api/books')
    .then((res) => res.json())
    .then((data) => setData(data))
}, [])
```

7. Create a new interfaces library

```
nx g @nrwl/workspace:library interfaces
```

8. Create fake data using faker

```
yarn add @faker-js/faker --dev
```

9. Set up CI

```
nx g @nrwl/workspace:ci-workflow
```
