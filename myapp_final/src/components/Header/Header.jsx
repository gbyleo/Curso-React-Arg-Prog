import "../Header/Header.css"


export default function Header() {
  return (
    <header>

      <nav class="navbar">

        <ul class="navbar-nav">
          
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Inicio</a>
          </li>

          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Contacto</a>
          </li>

          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Acerca de</a>
          </li>

         

        </ul>
      </nav>
    </header>


  );
}