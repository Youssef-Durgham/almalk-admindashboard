import Navbar from '../../components/Navbar'
import { useEffect ,useState } from 'react';
import Banner from '../../components/Banner'
export default function vipAds(){
    const [VipAds,setVipAds]=useState([]);
    const [diamondAds,setdiamondAds]=useState([]);
    useEffect(() => {
        async function fetchData() {
          const responseVip = await fetch("http://ap.almalk.org:3000/vip-ads");
          const dataVip = await responseVip.json();
          const responseDiamond = await fetch("http://ap.almalk.org:3000/diamond-ads");
          const dataDiamond = await responseDiamond.json();
          setVipAds(dataVip.vipAds);
          setdiamondAds(dataDiamond.diamondAds);
       
          console.log(dataDiamond);
        }
        fetchData();
      }, []);
    return(
        <>
        <Navbar/>
        {VipAds ?
        <h1 className='text-4xl font-bold p-2 ml-2'>Vip Ads</h1>
        :
        <h1 className='text-4xl font-bold p-2 ml-2'>No Vip Ads</h1>
      }
        <Banner bannerdata={VipAds}/>
        {
          diamondAds?
          <h1 className='text-4xl font-bold p-2 ml-2'>Diamond Ads</h1>
          :
          <h1 className='text-4xl font-bold p-2 ml-2'>No Diamond Ads</h1>
        }
        <Banner bannerdata={diamondAds}/>
        </>
    )
}