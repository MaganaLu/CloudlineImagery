import './ServicesCardComponent.css'

const ServicesCardComponent = (props) => {
    return (
        <>
            <section class="articles">
                <article>
                    <div class="article-wrapper">
                        <figure>
                            <img src={props.image} alt="image" />
                        </figure>
                        <div class="article-body">
                            <h2>{props.title}</h2>
                            <p style={{color:"black"}}>{props.subtext}</p>
                        </div>
                    </div>
                </article>
            </section>

        </>
    )
};

export default ServicesCardComponent

