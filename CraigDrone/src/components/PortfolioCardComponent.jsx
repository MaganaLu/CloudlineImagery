import './PortfolioCardComponent.css'

const PortfolioCardComponent = (props) => {

    return (
        <div class="center">
            <div class="article-card">
                <div class="content">
                    <p class="date">{props.date}</p>
                    <p class="title">{props.title}</p>
                </div>
                <img src={props.image} alt="article-cover" />
            </div>
        </div>
    )
}

export default PortfolioCardComponent;