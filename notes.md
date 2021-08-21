### Basic steps
1. `$ nest new [progjectname]`
2. create module `nest g module [x]`
   - create the feature module first so that the following controllers/services are properly linked into the module and imported into main, instead of imported as individual controllers/providers
3. create controller `nest g controller [x]` which defines the route
4. create service where you put all the functions `nest g service[x]`

### Main elements:
1. module
2. controller - routing mechanism
3. service


# Controller - THE BRAWN 💪
- Routing Mechanism
- Controllers should handle HTTP requests.
- `@Controller('[routeName]')` use the controller decorator to define the route
- `@Get()`, `@Post()`, `@Put()`, `@Delete()` use basic HTTP req decorators to define the type of req
- `@Get('x')` to further define the route

# Services/Providers -THE BRAIN 🧠
