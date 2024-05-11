import { useLocation } from "wouter"
import members from "../assets/members"
import Space from "../components/3D/Space"
import Header from "../components/Header"
import Title from "../components/Title"

export default function Apresentation({ delayChangeLocation }) {
    const activeApresentation = true

    return (
        <>
        <div className="absolute z-0 h-full w-full">
            <Space activeCanvas={activeApresentation} delayChangeLocation={delayChangeLocation} />
        </div>
        <div className="absolute z-20 flex h-full w-full flex-col text-white">
            <Header members={members} delayChangeLocation={delayChangeLocation} />
            <Title members={members} delayChangeLocation={delayChangeLocation} />
        </div>
        </>
    )
}