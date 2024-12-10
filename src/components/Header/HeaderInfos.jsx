import HeaderInfosContent from "./HeaderInfosContent"

export default function HeaderInfos({passIP}){

    const infomationsContet = [
        {title: 'Ip Adress', result: `${passIP}`},
        {title: 'Location', result: ''},
        {title: 'Timezone', result: ''},
        {title: 'Isp', result: ''},
    ]

    return(
        <div className="-mb-20 bg-white p-8 shadow-2xl w-9/12 flex justify-center items-center rounded-xl">
            {infomationsContet.map((item, index)=>(
                <HeaderInfosContent key={index} title={item.title} result={item.result}  />
            ))}
        </div>
    )
}