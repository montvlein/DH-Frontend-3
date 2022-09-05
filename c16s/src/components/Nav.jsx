import { Link } from 'react-router-dom'

export default function Nav() {
    return(
        <header>
            <nav>
                <ul>
                    <li><Link to='/'>🏘Home🏘</Link></li>
                    <li><Link to='/guaguau'>🐶Guaguau🐶</Link></li>
                    <li><Link to='/miaumiau'>🐱Miaumiau🐱</Link></li>
                </ul>
            </nav>
        </header>
    )
}