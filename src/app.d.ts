// See https://svelte.dev/docs/kit/types#app.d.ts
// For information about these interfaces
declare global {
  namespace App {
    interface Platform {
      env: Env
      ctx: ExecutionContext
      caches: CacheStorage
      cf?: IncomingRequestCfProperties
    }

    // Interface Error {}
    // Interface Locals {}
    // Interface PageData {}
    // Interface PageState {}
  }
}
