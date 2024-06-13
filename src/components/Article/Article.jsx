import React from 'react';
import './styles.css';

// ao invés de exportar o componente no final do arquivo com o export default...
// podemos simplesmente colocar um export antes da class. export class...
// mas também vai mudar a forma de importar
export class Article extends React.Component {
    render() {
        return (
            <article id='article'>
                <img src={this.props.thumbnail} alt={this.props.title} />

                <div className='article-infos'>
                    <h2>{this.props.title}</h2>
                    <h3>{this.props.provider}</h3>

                    <p>{this.props.description}</p>
                </div>
            </article>
        );
    }
}