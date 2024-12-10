import HeaderInfosContent from "./HeaderInfosContent"

export default function HeaderInfos({informations}){

    const infomationsContet = [
        {title: 'Ip Adress', result: `${informations?.ip}`},
        {title: 'Location', result: `${informations?.city}, ${informations?.region} ${informations?.zip}`},
        {title: 'Timezone', result: `${informations?.timeZone}`},
        {title: 'Isp', result: `${informations?.org}`},
    ]

    infomationsContet.filter((word) => 
        word.result == 'undefined' || word.result == 'undefined, undefined undefined' ? word.result = '' : word.result    
    )

    return(
        <div className="-mb-20 bg-white p-8 shadow-2xl max-w-screen-xl h-auto flex justify-center items-center rounded-xl z-0">
            {infomationsContet.map((item, index)=>(
                <HeaderInfosContent key={index} title={item.title} result={item.result}  />
            ))}
        </div>
    )
}