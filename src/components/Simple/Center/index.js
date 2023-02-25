import './style.css';
import data from '../../../data/data.json';

function Center() {
    return(
        <div className="Center">
           {data.map(item =>
            <section>
                <h2>{item.title}</h2>
                <div>{item.body}</div>
            </section>
            )}
        </div>
    );
}
export default Center;