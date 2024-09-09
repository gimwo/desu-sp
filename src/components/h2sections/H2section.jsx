import '../../styles/styles.css';
import BarcodeEffect from "../brcd/BarcodeEffect";

export default function H2Sec() {
    return (
        <div className="product-content">
            <div className="section section-bg-prst1">
                <div className="column">
                    {/* Adding 'barcode' class to apply the scroll effect */}
                    <p className='barcode brcd-h2-s1'>NLB 225 SERIES WATER JETTING PUMP</p>
                    <img src={require("../../assets/images/univ/x1.webp")} alt="Placeholder" className='p-image1 p-image1-spacing'/>
                </div>
                <div className="column1 text-column rajdhani-semibold">
                    <p className='list-paragraph-1'>powerhouse in hydro demolition, expertly engineered to deliver water efficiently to the accessory for precise material removal. Its robust design ensures consistent high-pressure performance.</p>
                    <ul>
                        <li className='bullet-list'>High Efficiency: Delivers powerful, high-pressure water.</li>
                        <li className='bullet-list'>Durable: Ensures long-lasting, reliable performance.</li>
                        <li className='bullet-list'>Advanced Technology: Delivers precision and performance.</li>
                        <li className='bullet-list'>Versatile Applications: Ideal for maintenance and demolition.</li>
                    </ul>
                </div>
            </div>

            <div className="divider"></div>
            
            <div className="section section-bg-prst2">
                <div className="section-imgtxt2 text-column rajdhani-semibold">
                    <p className='list-paragraph-2 h2-p-s2'>Durable and flexible accessory for manual hydro demolition, ensuring precise water delivery and reliable performance in tough environments. Lightweight and easy to handle, it enhances productivity and maintains safety standards.</p>
                    <ul>
                        <li className='bullet-list left-spacing-2'>High Flexibility: Ensures precise, efficient water delivery.</li>
                        <li className='bullet-list left-spacing-2'>Lightweight Design: Eases handling, reduces fatigue.</li>
                        <li className='bullet-list left-spacing-2'>User-Friendly: Simplifies operation for all skill levels.</li>
                        <li className='bullet-list left-spacing-2'>Reliable: Consistently delivers high-pressure water for demolition.</li>
                    </ul>
                </div>
                <div className="column image-column spir-barcode">
                    {/* Adding 'barcode' class to apply the scroll effect */}
                    <p className='barcode barcode-h2 brcd-h2-s2'>SPIR STAR HIGH PRESSURE HOSE</p>
                    <img src={require("../../assets/images/univ/x2.webp")} alt="Placeholder" className='p-image2'/>
                </div>
            </div>
            <BarcodeEffect />
        </div>
    );
}
