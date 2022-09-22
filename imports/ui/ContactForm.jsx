/**
 * @format
 */
import React from "react";
import { ContactsCollection } from "../api/ContactsCollection";

export const ContactForm = () => {
    const [name, setName] = React.useState();
    const [email, setEmail] = React.useState();
    const [imageURL, setImageURL] = React.useState();

    const saveContact = (event) => {
        console.log({ name, email, imageURL });
        ContactsCollection.insert({ name, email, imageURL });
        setName();
        setEmail();
        setImageURL();

        /*event.preventDefault();
        const contact = {
            name: event.target.name.value,
            email: event.target.email.value,
            imageURL: event.target.imageURL.value,
        };
        console.log(contact);*/
    };
    return (
        <form>
            <div>
                <label htmlFor="name">Name</label>
                <input
                    value={name}
                    id="name"
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                />
            </div>
            <div>
                <label htmlFor="email">E-mail</label>
                <input
                    value={email}
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                />
            </div>
            <div>
                <label htmlFor="imageURL">Image URL</label>
                <input
                    value={imageURL}
                    type="text"
                    onChange={(e) => setImage(e.target.value)}
                    id="imageURL"
                />
            </div>
            <div>
                <button type="submit" onClick={saveContact}>
                    Save Contact
                </button>
            </div>
        </form>
    );
};
