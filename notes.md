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
- basic setup is
```
  @Get //handler
  methodName() : methodReturnInterface {
      return datahere
  }
```
- Controllers should handle HTTP requests.
- `@Controller('[routeName]')`
  - use the controller decorator to define the route prefix
  - applies to all routes in the controller
- `@Get()`, `@Post()`, `@Put()`, `@Delete()`
  - use basic HTTP req decorators to create a handler for each request type
- `@Get('x')` to further define the route
- then use other decorators like `@Param()` or `@Query()` or `@Body()` as tokens inside the method defined by the route
- don't forget to add the class constructor in the controller to access the service/provider `  constructor(private pokemonService: PokemonService) {}`
  - the `private` syntax shorthand allows us to both declare and initialize the service member immediately in the same location.

# Services/Providers -THE BRAIN 🧠
- do all the heavy lifting/complex tasks
- call services from methods in the controller
-
