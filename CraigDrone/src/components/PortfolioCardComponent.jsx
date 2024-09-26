import './PortfolioCardComponent.css'

const PortfolioCardComponent = (props) => {

    let dateString = (props.date.toDate().toDateString()).toString();

    return (
        <div class="center">
            <div class="article-card">
                <div class="content">
                    <p class="date">{dateString}</p>
                    <p class="title">{props.title}</p>
                </div>

                {/*<video  id='portfolioVideoPlayer' autoPlay loop muted >
                    <source src={props.video} type="video/webm" />
                </video>

                                    <object
                    data={props.video} 
                    type="text/html"
                    width="640"
                    height="360"
                    autoPlay={true}
                    id='portfolioVideoPlayer'>

                    <param name="loop" value="true"></param>
                    <param name="autoplay" value="true"></param>
                </object>


                
*/}


                <iframe id='portfolioVideoPlayer' src={props.video} allowFullScreen="true" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" ></iframe>

                

            </div>
        </div>
    )
}

export default PortfolioCardComponent;