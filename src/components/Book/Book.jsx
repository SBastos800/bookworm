import React, { Component } from "react";
import styles from "./Book.module.scss";

class BookComponent extends Component {

    render() {

        return (
            <article className={styles.book}>
                <div className={styles.image}>
                    <img className={styles.image} alt="book image" src={this.props.bookData.image} />
                </div>
                <div className={styles.textWrap}>
                    <p>{this.props.bookData.title}</p>
                    <p>by</p>
                    <p>{this.props.bookData.author}</p>
                    <p>Pages: {this.props.bookData.pageCount}</p>

                </div>

            </article>
        )
    }
}

export default BookComponent;













