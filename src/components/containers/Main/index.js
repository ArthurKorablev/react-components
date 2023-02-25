import './style.css';
import Header from '../../Simple/Header';
import Center from '../../Simple/Center';
import Sidebar from '../../Simple/Sidebar';

function Main() {
    return (
      <div className='Main'>
        <Header/>
        <Center/>
        <Sidebar/>
      </div>
    );
  }
  
  export default Main;