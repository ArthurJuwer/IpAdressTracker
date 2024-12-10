export default function HeaderInfosContent( { title, result } ){
    return(
        <div className="flex flex-col gap-y-2 border-l border-gray-300 first:border-l-0 px-16">
            <p className="font-bold uppercase text-sm text-gray-500 tracking-wider">{title}</p>
            <h1 className="font-bold text-2xl text-gray-800">{result}</h1>
        </div>
    )
}