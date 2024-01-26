import React from 'react'
import '../../style/services.css'
import ServiceCard from '../service-card/ServiceCard'
import { faPaperPlane, faLayerGroup, faHashtag, faSun, faSignal, faMicrochip} from '@fortawesome/free-solid-svg-icons'

export default function Services() {
    const services = [
        {
            name: "Photography Sessions",
            body: "Professional photography sessions tailored to various needs, including portraits, family gatherings, events, weddings, and commercial projects.",
            icon: faSun
        },
        {
            name: "Photo Editing and Retouching",
            body: "Enhancing and refining photos through color correction, retouching, background removal, and overall image enhancement.",
            icon: faHashtag
        },
        {
            name: "Photography Workshops",
            body: "Educational services offering photography classes and workshops, covering basic to advanced techniques, as well as post-processing skills.",
            icon: faLayerGroup
        },
        {
            name: "Stock Photography",
            body: "Providing high-quality photos for licensing or sale to individuals, businesses, and organizations through stock photo platform.",
            icon: faMicrochip
        },
        {
            name: "Photography Printing Services",
            body: "Producing high-quality prints of photographs, as well as creating custom photo books and canvas prints.",
            icon: faPaperPlane
        },
        {
            name: "Photography Equipment Rental",
            body: "Offering the rental of cameras, lenses, and other photography equipment, along with studio space for photo shoots.",
            icon: faSignal
        },
    ]
  return (
    <div className='service-section'>
        <div className='contianer'>
              <div>
              <h2 className='section-title text-center'>Services</h2>
              <p className='paragraph-service text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sequi sed voluptate tenetur corrupti, minus ea deleniti, quisquam expedita numquam reprehenderit beatae perferendis dolorem, nobis sit aperiam modi cupiditate similique! Quod, necessitatibus mollitia, suscipit sint animi veritatis cum quos delectus soluta culpa, minima assumenda vero. Molestiae molestias debitis quos repellendus.</p>
              </div>
            <div className='services-wrap'>
                {services.map(service => <ServiceCard service={service}/>)}
            </div>
        </div>
    </div>
  )
}
