import React from 'react';
import Cloudyicon from '../weather-icon/cloudy.svg';
import Hazeicon from '../weather-icon/haze.svg';
import HeavyRainicon from '../weather-icon/heavy-rain.svg';
import PartlyCloudyicon from '../weather-icon/partly-cloudy.svg';
import Rainicon from '../weather-icon/rain.svg';
import Sleeticon from '../weather-icon/sleet.svg';
import Snowicon from '../weather-icon/snow.svg';
import Sunnyicon from '../weather-icon/sunny.svg';
import Thunderstormicon from '../weather-icon/thunderstorm.svg';
const Icon = ({icon}) => {
    let icons;
    switch (icon) {
        // Clear
        case 800:
          icons = Sunnyicon;
          break;
    
        // Cloud
        case 801:
        case 802:
          icons = PartlyCloudyicon;
          break;
        case 803:
        case 804:
          icons = Cloudyicon;
          break;
    
        // Rain
        case 500:
        case 501:
        case 520:
        case 521:
        case 511:
        case 300:
        case 301:
        case 302:
        case 310:
        case 311:
        case 312:
        case 313:
        case 314:
        case 321:
          icons = Rainicon;
          break;
        case 502:
        case 503:
        case 504:
        case 522:
        case 531:
          icons = HeavyRainicon;
          break;    
        // Thunderstorm
        case 200:
        case 201:
        case 202:
        case 210:
        case 211:
        case 212:
        case 221:
        case 230:
        case 231:
        case 232:
          icons = Thunderstormicon;
          break;
    
        // Snow
        case 600:
        case 601:
        case 602:
        case 612:
        case 613:
        case 615:
        case 616:
        case 620:
        case 621:
        case 622:
          icons = Snowicon;
          break;
        case 611:
          icons = Sleeticon;
          break;
    
        // Atmosphere
        case 701:
        case 711:
        case 721:
        case 731:
        case 741:
        case 751:
        case 761:
        case 762:
        case 771:
        case 781:
          icons = Hazeicon;
          break;
        default:
          icons = Sunnyicon;
      }
  return (
    <img src={icons} alt="" />
  )
}

export default Icon;