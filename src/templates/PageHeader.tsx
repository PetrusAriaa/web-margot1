import { FC } from "react";

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    theme?: "light" | "dark"
    image?: string;
}

const constructTitle = (title: string) => {
    if (!title) {
        return { _title: "", highligthed: "" };
    }
    let _splitted = title.split(" ")
    const highligthed = _splitted[_splitted.length - 1]
    _splitted = _splitted.splice(0, _splitted.length - 1)
    const _title = _splitted.join(" ")
    return { _title, highligthed }
}

const PageHeader: FC<PageHeaderProps> = ({ title, subtitle, theme = "light" , image}) => {
    const { _title, highligthed } = constructTitle(title)
    const textColor = theme === "light" ? "text-blue-primary" : "text-neutral-white"
    const lineColor = theme === "light" ? "bg-blue-primary" : "bg-neutral-white"
    return (

        <div 
            className={`w-full h-[60vh] bg-cover bg-center ${image ? '' : 'bg-neutral-black/75'}`} 
            style={image ? { backgroundImage: `url(${image})` } : {}}
        >
            <div className='w-full h-[60vh] flex items-center justify-center'>
                <div className='w-3/4 max-w-[1024px] flex flex-col items-center text-center'>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-4xl md:text-5xl font-black text-neutral-white xs:text-2xl'>{_title}</h1>
                        <div>
                            <h4 className='text-2xl md:text-4xl text-neutral-white xs:text-1xl'>{subtitle}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default PageHeader;