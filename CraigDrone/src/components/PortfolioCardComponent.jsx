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

                <video id='portfolioVideoPlayer' autoPlay loop muted >
                    <source src={props.video} type="video/webm" />
                </video>
                
            </div>
        </div>
    )
}

export default PortfolioCardComponent;