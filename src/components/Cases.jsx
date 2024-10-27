import video1 from "../assets/avaVideo.mp4";
import video3 from "../assets/durvalVideo.mp4";
import video4 from "../assets/bangVideo.mp4";
import video5 from "../assets/anaVideo.mp4";
import video2 from "../assets/supremeVideo1.mp4";
import video6 from "../assets/supremeVideo2.mp4";
import { Element } from "react-scroll";


function Cases() {


  return (
    <Element name="cases">

    <div 
        id="cases"
        className="justify-center mt-20 mx-3 text-center">
        <span className="bg-neutral-900 text-purple-500 rounded-full h-6 text-sm font-medium px-4 py-2 uppercase border border-neutral-800/80">
          Cases
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2  gap-3 p-10 mt-7 ">
            <video 
                src={video1}
                controls
                className="rounded-lg  border border-neutral-700"
            ></video>
            <video 
                src={video3}
                controls
                className="rounded-lg  border border-neutral-700"
            ></video>
            <video 
                src={video4}
                controls
                className="rounded-lg  border border-neutral-700"
            ></video>
            <video 
                src={video5}
                controls
                className="rounded-lg  border border-neutral-700"
            ></video>
            <video 
                src={video2}
                controls
                className="rounded-lg  border border-neutral-700"
            ></video>
            <video 
                src={video6}
                controls
                className="rounded-lg  border border-neutral-700"
            ></video>
        </div>
    </div>
    </Element>
    
  )
}

export default Cases