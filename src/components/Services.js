import React,{ Component } from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title'

class Services extends Component {

    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "Free Cocktail",
                info: "Minim mollit ipsum reprehenderit ipsum. Qui dolor officia cillum ullamco eu laborum id laboris. Excepteur aliqua amet irure nostrud exercitation magna"
            },
            {
                icon: <FaHiking />,
                title: "Endless Hiking",
                info: "Minim mollit ipsum reprehenderit ipsum. Qui dolor officia cillum ullamco eu laborum id laboris. Excepteur aliqua amet irure nostrud exercitation magna"
            },
            {
                icon: <FaShuttleVan />,
                title: "Free Shuttle",
                info: "Minim mollit ipsum reprehenderit ipsum. Qui dolor officia cillum ullamco eu laborum id laboris. Excepteur aliqua amet irure nostrud exercitation magna"
            },
            {
                icon: <FaBeer />,
                title: "Strongest Beer",
                info: "Minim mollit ipsum reprehenderit ipsum. Qui dolor officia cillum ullamco eu laborum id laboris. Excepteur aliqua amet irure nostrud exercitation magna"
            }
        ]
    }
    
    render() {
        return(
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item,index) => {
                        return <article key={index} className="service">
                            <span>
                                {item.icon}
                            </span>
                            <h6>
                                {item.title}
                            </h6>
                            <p>
                                {item.info}
                            </p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}

export default Services