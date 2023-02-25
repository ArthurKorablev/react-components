import './style.css';
import data from "../../../data/data.json";

function Sidebar() {
    return(
        <div className='Sidebar'>
            <nav>
                <ul>
                    {data.map(item => 
                        <li>
                            <a href='#'>{item.title}</a>
                        </li>
                        )}
                </ul>
            </nav>
        </div>
    );
}
export default Sidebar;