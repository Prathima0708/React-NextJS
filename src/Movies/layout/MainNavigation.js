import classes from './MainNavigation.module.css';
import Link from 'next/link'

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo} onClick={()=>window.scroll(0,0)} style={{cursor:'pointer'}} >Entertainment Hub</div>
      <nav>
        <ul>
          <li>
            <Link href='/trending'>Trending</Link>
          </li>
          <li>
            <Link href='/movies'>Movies</Link>
          </li>
          <li>
            <Link href='/tv'>Tv Series</Link>
          </li>
          <li>
            <Link href='/search'>Search</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;