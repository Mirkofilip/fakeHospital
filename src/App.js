// import logo from './logo.svg';
import './App.css';
import SideMenu from './components/sideMenu';
import Calendar from './components/calendar';
import Datapicker from './components/dataPicker';

function App() {
  return (
    <>
    <div className="fullContainer">
      <SideMenu />
      <div className="dashboard">
        <div className="breacrumb">Application / <span>Calendar</span></div>
        <div className="borderHrBlue" aria-hidden="true"></div>
        <div className="row">
          <div className="col-md-12 title">
            <h2>Calendar</h2>
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-12 xl:col-span-4 2xl:col-span-3">
            <div className="col-span-12 box box-top">
              <button className="btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" icon-name="edit-3" className="lucide lucide-edit-3 w-4 h-4 mr-2" data-lucide="edit-3"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
              Add New Schedule </button>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam veniam voluptates fugit assumenda atque, quod accusamus consequatur temporibus adipisci laudantium qui molestiae numquam iste non asperiores illo. Odit, voluptate laudantium!</p>  
            </div>
            <div className="col-span-12 box">
              <Datapicker />
            </div>
          </div>
          <div className="col-span-12 xl:col-span-8 2xl:col-span-9 box">
            <Calendar />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
