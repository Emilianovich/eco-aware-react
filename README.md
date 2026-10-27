# Eco Aware

Proyecto vacío con React, TypeScript y TanStack Router y Tailwind CSS sobre Vite+.

## Desarrollo

```sh
vp install
vp run dev
```

La ruta inicial `/` está vacía y se define en `src/routes/index.tsx`.
Añade archivos en `src/routes/` para crear rutas. El plugin genera
`src/routeTree.gen.ts` al ejecutar el servidor o compilar; no lo edites a mano.
Los estilos globales y Tailwind se cargan desde `src/styles.css`.

## Validación

```sh
vp check
vp test
vp run build
```

Todavía no hay pruebas; el comando de tests permite una suite vacía.

## Cloudflare

`vp run preview` compila y sirve la aplicación con Wrangler.
`vp run deploy` compila y publica los archivos de `build/` en Cloudflare.

El lint incluye reglas de React, hooks y accesibilidad JSX. React Compiler está
explícitamente desactivado en `vite.config.ts`.
