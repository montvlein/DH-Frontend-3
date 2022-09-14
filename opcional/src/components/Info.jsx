import React from "react";

export default function Info() {
  return (
    <section className="info">
      <h2>Práctica integradora opcional</h2>
      <details>
        <summary>Temas posibles a implementar en el proyecto</summary>
        <ul>
          <li>Estilos</li>
          <li>Props</li>
          <li>useState</li>
          <li>useEffect</li>
          <li>API</li>
          <li>React router</li>
          <li>useParams</li>
          <li>useContext</li>
        </ul>
      </details>
      <hr />
      <h3>Consigna</h3>
      <p>
        En este proyecto trabajaremos con la API de MecadoLibre. Deberán crear
        desde 0 utilizando create-react-app, un sitio que cuente con 4 “páginas”
        (simuladas con react router).
      </p>
        <ul className="consigna">
          <li>
            <h5>Info</h5> Esta contendrá un texto introductorio y será el index del
            sitio.
          </li>
          <li>
            <h5>Productos</h5> Permitirá a través de un input, la búsqueda de cualquier
            producto que el usuario escriba. Esto devolverá un detalle de
            producto con un stock
          </li>
          <li>
            <h5>Producto Detalle</h5> Mostrará el detalle de un producto. Para ello
            habrá que implementar una ruta segmentada. La obtención de la
            información del producto queda sujeto a como deseen implementarlo,
            ya sea enviando el detalle del producto desde un navigate como
            empleando la recuperación del mismo desde la API
          </li>
        </ul>
      <p>
        <span>Importante</span>:
        El objetivo de esta actividad es exclusivamente la práctica y repaso de
        contenidos. Este documento constituye solo una guía que pretende abarcar
        todos los contenidos vistos. No implica que deban realizarlo en su
        totalidad. Siéntanse libres de modificar, limitar o extender el
        desarrollo de acuerdo a sus tiempos y posibilidades.
      </p>
      <p>¡Exitos! 💪</p>
    </section>
  );
}
