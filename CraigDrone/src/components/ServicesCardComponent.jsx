import './ServicesCardComponent.css'
import NatureImage from '../assets/NatureImage.jpg'

const ServicesCardComponent = () => {
    return (
        <>
            <section class="articles">
                <article>
                    <div class="article-wrapper">
                        <figure>
                            <img src="https://picsum.photos/id/1011/800/450" alt="" />
                        </figure>
                        <div class="article-body">
                            <h2>This is some title</h2>
                            <p style={{color:"black"}}>
                                Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.
                            </p>
                        </div>
                    </div>
                </article>
            </section>

        </>
    )
};

export default ServicesCardComponent

