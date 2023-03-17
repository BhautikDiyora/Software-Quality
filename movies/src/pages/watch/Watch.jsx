import { ArrowBackOutlined } from "@mui/icons-material"
import "./Watch.scss"
import ReactPlayer from 'react-player'
import Myvideo from "../watch/watch_video.mp4"

export default function Watch() {
    return (
        <div className="watch">
            <div className="back">
                <ArrowBackOutlined />
                Home
            </div>
            <video
                className="video"
                autoPlay
                progress
                controls
                src={Myvideo} type="video/mp4"
                
            />

        </div>
    )
}
