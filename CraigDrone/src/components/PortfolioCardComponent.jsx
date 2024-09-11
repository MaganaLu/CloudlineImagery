import './PortfolioCardComponent.css'

const PortfolioCardComponent = (props) => {

    return (
        <div class="center">
            <div class="article-card">
                <div class="content">
                    <p class="date">{props.date}</p>
                    <p class="title">{props.title}</p>
                </div>
                <img src="https://placehold.co/9000x400" alt="article-cover" />
            </div>
        </div>
    )
}

export default PortfolioCardComponent;