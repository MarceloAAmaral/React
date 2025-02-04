import Filter from '../components/Filter.jsx';
import TodosList from '../components/TodosList.jsx';
import FooterFilters from '../components/FooterFilters.jsx';
function Home() {

    return (
    <>
        <div className="container">
            <Filter />        
            <TodosList />
            <FooterFilters />
        </div>
    </>
    )
  }
  
  export default Home
