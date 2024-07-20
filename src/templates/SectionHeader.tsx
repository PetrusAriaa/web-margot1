import { FC } from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  theme?: "light" | "dark"
}

const constructTitle = (title: string) => {
  let _splitted = title.split(" ")
  const highligthed = _splitted[_splitted.length - 1]
  _splitted = _splitted.splice(0, _splitted.length - 1)
  const _title = _splitted.join(" ")
  return {_title, highligthed}
}

const SectionHeader: FC<SectionHeaderProps> = ({title, subtitle, theme="light"}) => {
  const {_title, highligthed} = constructTitle(title)
  const textColor = theme === "light" ? "text-blue-primary" : "text-neutral-white"
  const lineColor = theme === "light" ? "bg-blue-primary" : "bg-neutral-white"
  return (
    <div className="flex flex-col items-center gap-4 py-2 mt-4 mb-28">
      <div>
        <h1 className={"text-3xl sm:text-5xl text-center " + textColor}>
          {_title} <span className="font-bold">{highligthed}</span>
        </h1>
        <p className={"text-lg sm:text-2xl text-center " + textColor}>
          {subtitle}
        </p>
      </div>
      <div className={"h-[6px] w-14 " + lineColor} />
    </div>
  )
}

export default SectionHeader;