import "./daily-prayers.css";

// Here the daily prayer times will be printed, currently I've inputted dummy values.

const PrayerTimes = () => {
 return(
 <>
 <label className="welcome">Salam, Huda!</label>
 <br></br>
 <br></br>
 <br></br>
 <br></br>
 <br></br>

 <label className="title">Daily Timings</label><br></br>
 <br></br><br></br>
 <br></br>
 <label className="prayer1">Fajr :  04:09 </label>
 <label className="prayer2">Dhuhr:  13:10 </label>
 <label className="prayer3">Asr :  17:03 </label>
 <label className="prayer4">Maghrib : 20:24 </label>
 <label className="prayer5">Isha'a : 21:31 </label>
     </>
 )

}

export default PrayerTimes;
