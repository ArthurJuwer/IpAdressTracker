export default function Main(){
    return(
        <div className=" z-10 h-[calc(100%-17.5rem)] ">

            <iframe 
            className="w-full h-full"
            loading="lazy" 
            allowfullscreen 
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${lat}%2C${lon}&zoom=10&maptype=roadmap`}>
            </iframe>

        </div>
    )
}