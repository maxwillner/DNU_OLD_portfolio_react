import React from "react";
import movieland from "../../assets/movieland.png";
import daily_wellness_tracker from "../../assets/daily_wellness_tracker.png"
import weather_dashboard from "../../assets/weather_dashboard.png";
import note_taker from "../../assets/note_taker.png";
import pizza_hunt from "../../assets/pizza_hunt.png";
import zookeepr from "../../assets/zookeepr.png";

function Portfolio() {

    // const project = {
    //     title: "movieland",
    //     link: "https://rocky-castle-66414.herokuapp.com/",
    //     github: "https://github.com/maxwillner/MovieLand"
    // }
        return (
        <section>
            <div>
                <h1>movieland</h1>
                <a href="https://rocky-castle-66414.herokuapp.com/">Application Link</a>
                <a href="https://github.com/maxwillner/MovieLand">Application GitHub</a>
                <div>
                    <img src={movieland} alt="The Movieland Application" className="img-thumbnail mx-1"></img>
                </div>

            </div>
            <div>
                <h1>Daily Wellness Tracker</h1>
                <a href="https://maxwillner.github.io/daily_wellness_tracker/">Application Link</a>
                <a href="https://github.com/maxwillner/daily_wellness_tracker">Application GitHub</a>
                <div>
                    <img src={daily_wellness_tracker} alt="The Daily Wellness Tracker Application" className="img-thumbnail mx-1"></img>
                </div>
            </div>
            <div>
                <h1>Weather Dashboard</h1>
                <a href="https://maxwillner.github.io/weather_dashboard/">Application Link</a>
                <a href="https://github.com/maxwillner/weather_dashboard">Application GitHub</a>
                <div>
                    <img src={weather_dashboard} alt="The Weather Dashboard Application" className="img-thumbnail mx-1"></img>
                </div>
            </div>
            <div>
                <h1>Note Taker</h1>
                <a href="https://notetaker-mwillner.herokuapp.com/">Application Link</a>
                <a href="https://github.com/maxwillner/note_taker">Application GitHub</a>
                <div>
                    <img src={note_taker} alt="The Note Taker Application" className="img-thumbnail mx-1"></img>
                </div>
            </div>
            <div>
                <h1>Pizza Hunt</h1>
                <a href="https://morning-river-10600.herokuapp.com/">Application Link</a>
                <a href="https://github.com/maxwillner/pizza-hunt">Application GitHub</a>
                <div>
                    <img src={pizza_hunt} alt="The Pizza Hunt Application" className="img-thumbnail mx-1"></img>
                </div>
            </div>
            <div>
                <h1>Zookeepr</h1>
                <a href="https://zookeepr-mw.herokuapp.com/">Application Link</a>
                <a href="https://github.com/maxwillner/zookeepr">Application GitHub</a>
                <div>
                    <img src={zookeepr} alt="The Zookeepr Application" className="img-thumbnail mx-1"></img>
                </div>
            </div>
        </section>
        
    );
}

export default Portfolio;