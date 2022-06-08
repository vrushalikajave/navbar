// import React from 'react'

// const Navbar = () => {
//   return (
//     <div>
//      <nav class="navbar navbar-expand-lg bg-light">
//   <div class="container-fluid">
//     <a class="navbar-brand" href="#">LOGOBAKERY</a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="#">Services</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Projects</a>
//         </li>
//         {/* <li class="nav-item dropdown">
//           <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Dropdown
//           </a>
//           <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
//             <li><a class="dropdown-item" href="#">Action</a></li>
//             <li><a class="dropdown-item" href="#">Another action</a></li>
//             <li><hr class="dropdown-divider"/></li>
//             <li><a class="dropdown-item" href="#">Something else here</a></li>
//           </ul>
//         </li> */}
//         <li class="nav-item">
//           <a class="nav-link disabled">About</a>
//         </li>
//       </ul>
//       <form class="d-flex" role="search">
//         {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
//         <button class="btn btn-outline-success" type="submit">Contact</button>
//       </form>
//     </div>
//   </div>
// </nav>
    
//     </div>
//   )
// }

// export default Navbar


import React from 'react'
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.mainDiv}>
     <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">LOGOBAKERY</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarSupportedContent" className={styles.spa}>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0" className={styles.spa1}>
        <li class="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Services</a>
        </li>
        <li class="nav-item" >
          <a className="nav-link  "  href="#" >Projects</a>
        </li>
        {/* <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
        <li class="nav-item">
          <a class="nav-link disabled">About</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
        <button class="btn btn-outline-success" type="submit" className={styles.submit}>Contact</button>
      </form>

      
    </div>
  </div>
</nav>
    
    
    </div>
  )
}

export default Navbar











