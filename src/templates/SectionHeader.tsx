import { FC } from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

const constructTitle = (title: string) => {
  let _splitted = title.split(" ")
  const highligthed = _splitted[_splitted.length - 1]
  _splitted = _splitted.splice(0, _splitted.length - 1)
  const _title = _splitted.join(" ")
  return {_title, highligthed}
}

const SectionHeader: FC<SectionHeaderProps> = ({title, subtitle}) => {
  const {_title, highligthed} = constructTitle(title)
  return (
    <div className="flex flex-col items-center gap-4 py-2 mt-4 mb-28">
      <div>
        <h1 className="text-5xl text-blue-primary text-center">
          {_title} <span className="font-bold">{highligthed}</span>
        </h1>
        <p className="text-2xl text-blue-primary text-center">
          {subtitle}
        </p>
      </div>
      <div className="h-[6px] w-14 bg-blue-primary" />
    </div>
  )
}

export default SectionHeader;