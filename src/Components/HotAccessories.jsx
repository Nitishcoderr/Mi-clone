import React from 'react'
import HotItemCard from './HotItemCard'
import '../Style/HotAccessories.css'

const HotAccessories = ({music,musicCover,smartDevice,smartDeviceCover,home,homemusicCover,lifestyle,lifestyleCover,mobileaccessories,mobileaccessoriesCover}) => {
  return (
    <div className='HotAccessories'>
        <div>
            <img src={musicCover || smartDeviceCover || homemusicCover || lifestyleCover || mobileaccessoriesCover} alt="" />
        </div>
      

      <div>
        {/* music */}
        {music && music.map((item,index)=>(
            <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>
        ))}
        {/* smartDevice */}
        {smartDevice && smartDevice.map((item,index)=>(
            <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>
        ))}
        {/* home */}
        {home && home.map((item,index)=>(
            <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>
        ))}
        {/* lifestyle */}
        {lifestyle && lifestyle.map((item,index)=>(
            <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>
        ))}
        {/* mobileaccessories */}
        {mobileaccessories && mobileaccessories.map((item,index)=>(
            <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>
        ))}
        <HotItemCard  image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg" />
      </div>
    </div>
  )
}

export default HotAccessories
