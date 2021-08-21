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
- `@Controller('[routeName]')`
- Routing Mechanism
- basic setup is
```js
  @Get //handler
  methodName() : methodReturnInterface {
      return datahere
  }
```
- Controllers should handle HTTP requests.
  - use the controller decorator to define the route prefix
  - applies to all routes in the controller
- `@Get()`, `@Post()`, `@Put()`, `@Delete()`
  - use basic HTTP req decorators to create a handler for each request type
- `@Get('x')` to further define the route
- then use other decorators like `@Param()` or `@Query()` or `@Body()` as tokens inside the method defined by the route
  - can also pass in specific tokens for param/query to reference them explicitly
- don't forget to add the class constructor in the controller to access the service/provider `  constructor(private pokemonService: PokemonService) {}`
  - the `private` syntax shorthand allows us to both declare and initialize the service member immediately in the same location.

# Services/Providers - THE BRAIN 🧠
- do all the heavy lifting/complex tasks
- call services from methods in the controller
- NOTE: fetch doesn't exist in node (TIL), which is why we use axios in backend
- has the `@Injectable()` decorator so an INSTANCE of the service class can be INJECTED into a CONTROLLERS CONSTRUCTOR via `constructor(private pokemonService: PokemonService) {}` (???)

# Module - THE ORGANIZATION 📦
```js
@Module({
  imports: [SomeotherModule], // import a module
  controllers: [PokemonController], // controllers/services in the same dir as module
  providers: [PokemonService],
  exports: [PokemonService] // exports from module
})
export class PokemonModule {}
```
- for the sole purpose of organization
- define `providers`, `controllers`, `imports`, `exports` inside an OBJECT that is passed into the `@Module()` decorator
- rootmodule should import all the other nested modules (like a 🌳)
- you can import/export a module through a "middleware" module that basically just hands it off to any other module that imports the middleware module
- globally scope a module with the `@Global()` decorator

## Middleware
- put middleware into a function or a service class with the @Injectable() decorator
  - if in a class, class needs to `implements NestMiddleware` interface
  - if in a functional middleware
    - use when middleware doesnt need any dependencies
-  Put the middleware on a route path by putting it on the module when exporting said module `export class [ModuleName] implements NestModule`
- then configure the middleware by passing in the `middlewareconsumer` helper function
  - what middleware function you're applying
  - what routes you're applying it to
  - what routes you want to exclude
  -


# Other
- #### Exceptions
  - nest has built in exceptions, and if an HTTP exception is not explicitly handled, it does it for you w/ the built-in global exception filter
  - only for HTTP exceptions, random exceptions like stupid typos return a generic error response
- #### Pipes
  - use pipes to transform/manipulate incoming requests and throw errors if the request is bad
- #### Guards
  - determine whether a req will be handled by the route handler or not (AKA AUTH)
  - instead of checking auth conditions in middleware
  - guards execute after each middleware
  - Every guard must implement the `canActivate()` function and return a `boolean`
  - the `ExecutionContext` ???????