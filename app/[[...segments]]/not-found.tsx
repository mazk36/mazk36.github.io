import Link from "next/link";
export default function NotFound() {
  return (
    <main className="not-found container">
      <span className="wordmark">BRUNO JAUREGUI.</span>
      <p className="section-label">404 / OFF THE MAP · FUERA DEL MAPA</p>
      <h1>
        Nothing here.
        <br />
        <span lang="es">Por aquí no es.</span>
      </h1>
      <p>
        This page doesn’t exist. Let’s get you back to the work.
        <br />
        <span lang="es">Esta página no existe. Volvamos a los proyectos.</span>
      </p>
      <div>
        <Link className="button-link" href="/" lang="en">
          English home ↗
        </Link>
        <Link className="text-link" href="/es" lang="es">
          Inicio en español ↗
        </Link>
      </div>
    </main>
  );
}
