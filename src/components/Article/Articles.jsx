import React from "react";
import './styles.css';
import { Article } from "./Article";
import articleImg1 from '../../assets/images/article1.png'
import articleImg2 from '../../assets/images/article2.png'
import articleImg3 from '../../assets/images/article3.png'
// import 

export class Articles extends React.Component {
    render() {
        return (
            <section id='articles'>
                <Article thumbnail={articleImg1} title='Designing Dashboards' provider='NASA' description='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet' />


                <Article thumbnail={articleImg2} title='Vibrant Portraits of 2020' provider='SpaceNews' description='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet' />

                <Article thumbnail={articleImg3} title='36 Days of Malayalam type' provider='Spaceflight Now' description='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet' />

                <Article thumbnail={articleImg1} title='Designing Dashboards' provider='NASA' description='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet' />

            </section>
        );
    }
}