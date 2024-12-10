export default function Main({valuesLat, valuesLong}){
    let lat = valuesLat;
    let long = valuesLong;
    
        if(lat != undefined && lon != undefined){
            return(
                <div className=" z-10 h-full ">
                    <iframe 
                    className="w-full h-full"
                    loading="lazy" 
                    allowFullScreen 
                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${lat}%2C${long}&zoom=10&maptype=roadmap`}>
                    </iframe>
        
                </div>
            )
        }
    

    
}