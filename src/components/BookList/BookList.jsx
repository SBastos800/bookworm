import React, { Component } from "react";
import styles from "./BookList.module.scss";
import Book from "../Book/Book";
import data from "../../static/data/data";

import firebase, { firestore } from "../../firebase";

class BookList extends Component {

    state = { 
        books: []
    }


    componentDidMount() {   //this is like an event listener
        firestore
            .collection("books")
            .get()
            .then((query) => {
                const books = query.docs.map(doc => doc.data());
                this.setState({ books });
                
            })
    }


    render() {
        return (
            <section className={styles.bookListWrapper}>
   
               {this.state.books.map((person, index) => (        //replaced data.map for this.state.books.map when with firebase
                    <Book bookData={person} key={index} />
                ))}
               
            </section>
        )
    }


}

export default BookList;