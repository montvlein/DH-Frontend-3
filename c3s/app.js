const data = {
    name: "nombre",
    lastname: "apellido",
    age: "30",
    nationality: "Argentino",
    movies: [
        "pelicula1",
        "pelicula2",
        "pelicula3",
        "pelicula4"
    ],
    education: [
        "colegio",
        "universidad"
    ],
    bio: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    src: "https://randomuser.me/api/portraits/men/32.jpg"
}



const Header = () => {
    return (
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Carrera</li>
                <li>Educacion</li>
            </ul>
        </nav>
    );
}

const Content = ({ props }) => {
    return (
        <div className="d-flex">
            <div className="hero-img">
                <img src={props.src} />
            </div>
            <div className="info">
                <h2>informacion personal</h2>
                <p>Nombre: {props.name}</p>
                <p>Apellido: {props.lastname}</p>
                <p>Edad: {props.age}</p>
                <p>Nacionalidad: {props.nationality}</p>
                <p>Peliculas en las que participó:
                    <ul>
                        {props.movies.map((movie) => <li>{movie}</li>)}
                    </ul>
                </p>
                <p>Educación:
                    <ul>
                        {props.education.map((institute) => <li>{institute}</li>)}
                    </ul></p>
                <p>Bio: </p>
                <p>{props.bio}</p>
            </div>
        </div>
    );

}

const App = () => {
    return (
        <>
            <Header />
            <Content props={data} />
        </>
    )
}



ReactDOM.createRoot(document.getElementById("root")).render(<App />)
