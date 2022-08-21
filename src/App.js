import './App.css';
import Search from './components/search/search';
import CurrentPrayer from './components/current-prayer/current-prayer';
import { PRAYER_API_URL, PRAYER_API_KEY } from './api';
import PrayerTimes from './components/daily-prayers/daily-prayers';


function App() {

  //const [NextPrayer, setNextPrayer] = useState(null);
 // const [PrayerTimes, setPrayerTimes] = useState(null);
  
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
  }

  // fetch data about next prayer // need to edit this 47:33
  const NextPrayerFetch = fetch('${PRAYER_API_URL}/timingsByCity?country=%3CREQUIRED%3E&city=%3CREQUIRED%3E&appid=${PRAYER_API_URL}')

  // fetch data from daily prayers

  const DailyPrayerFetch = fetch('${PRAYER_API_URL}/timingsByCity?country=%3CREQUIRED%3E&city=%3CREQUIRED%3E&appid=${PRAYER_API_URL}')
  
  Promise.all([NextPrayerFetch, DailyPrayerFetch])
  .then (async (response) => {
    const currentPrayerResponse = await response[0].json();
    const dailyPrayerResponse = await response[1].json();

    //setNextPrayer({nextPrayerResponse});
    //setPrayerTimes({dailyPrayerResponse})
  })


  return (
    <div className='container'>
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentPrayer />
      <PrayerTimes/>
    </div>

  );
}

export default App;
