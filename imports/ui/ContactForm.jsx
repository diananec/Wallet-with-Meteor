/**
 * @format
 */
import React from "react";
import { Meteor } from "meteor/meteor";
import { ErrorAlert } from "./components/ErrorAlerts";

export const ContactForm = () => {
    const [name, setName] = React.useState();
    const [email, setEmail] = React.useState();
    const [imageURL, setImageURL] = React.useState();
    const [error, setError] = React.useState();
    const [success, setSuccess] = React.useState();

    const showError = ({ message }) => {
        setError(message);
        setTimeout(() => {
            setError(null);
        }, 5000);
    };

    const showSuccess = ({ message }) => {
        setSuccess(message);
        setTimeout(() => {
            setSuccess(null);
        }, 5000);
    };

    const saveContact = (event) => {
        Meteor.call("contacts.insert", { name, email, imageURL }, (errorResponse) => {
            if (errorResponse) {
                showError({ message: errorResponse.error });
            } else {
                setName();
                setEmail();
                setImageURL();
                showSuccess({ message: "Contact saved successfully" });
            }
        });
    };
    return (
        <form className="mt-6">
            {error && <ErrorAlert message={error} />}
            {success && <SuccessAlert message={success} />}
            <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                    <label
                        className="block text-sm font-medium text-gray-700"
                        htmlFor="name"
                    >
                        Name
                    </label>
                    <input
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={name}
                        id="name"
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                    />
                </div>
                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label
                        className="block text-sm font-medium text-gray-700"
                        htmlFor="email"
                    >
                        E-mail
                    </label>
                    <input
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={email}
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        id="email"
                    />
                </div>
                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label
                        className="block text-sm font-medium text-gray-700"
                        htmlFor="imageURL"
                    >
                        Image URL
                    </label>
                    <input
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={imageURL}
                        type="text"
                        onChange={(e) => setImageURL(e.target.value)}
                        id="imageURL"
                    />
                </div>
            </div>
            <div className="px-2 py-3 text-right">
                <button
                    className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                    type="submit"
                    onClick={saveContact}
                >
                    Save Contact
                </button>
            </div>
        </form>
    );
};
