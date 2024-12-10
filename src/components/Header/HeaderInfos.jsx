import { useEffect, useState } from "react";
import HeaderInfosContent from "./HeaderInfosContent"

export default function HeaderInfos({informations}){

// 206.71.50.230

    const infomationsContet = [
        {title: 'Ip Adress', result: `${informations?.ip}`},
        {title: 'Location', result: `${informations?.city}, ${informations?.region} ${informations?.zip}`},
        {title: 'Timezone', result: `${informations?.timeZone}`},
        {title: 'Isp', result: `${informations?.org}`},
    ]

    return(
        <div className="-mb-20 bg-white p-8 shadow-2xl w-9/12 flex justify-center items-center rounded-xl z-0">
            {infomationsContet.map((item, index)=>(
                <HeaderInfosContent key={index} title={item.title} result={item.result}  />
            ))}
        </div>
    )
}