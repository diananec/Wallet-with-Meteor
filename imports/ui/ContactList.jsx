/**
 * @format
 */

import React from "react";
import { ContactsCollection } from "../api/ContactsCollection";
import { useTracker } from "meteor/react-meteor-data";

export const ContactList = () => {
    const contacts = useTracker(() => {
        return ContactsCollection.find(
            {},
            {
                sort: {
                    createdAt: -1,
                },
            }
        ).fetch();
    }); // Tracker

    const removeContact = (event, _id) => {
        event.preventDefault();
        Meteor.call("contacts.remove", { contactId: _id });
    };

    return (
        <div>
            <div className="mt-10">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Contact List
                </h3>
                <ul
                    role="list"
                    className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200"
                >
                    {contacts.map((person, personIdx) => (
                        <li
                            key={personIdx}
                            className="py-4 flex items-center justify-between space-x-3"
                        >
                            <div className="min-w-0 flex-1 flex items-center space-x-3">
                                <div className="flex-shrink-0">
                                    <img
                                        className="h-10 w-10 rounded-full"
                                        src={person.imageURL}
                                        alt=""
                                    />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="text-sm font-medium text-gray-900 truncate">
                                        {person.name}
                                    </p>
                                    <p className="text-sm font-medium text-gray-500 truncate">
                                        {person.email}
                                    </p>
                                </div>
                                <div>
                                    <a
                                        href="#"
                                        onClick={(event) =>
                                            removeContact(event, person._id)
                                        }
                                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"
                                    >
                                        Remove
                                    </a>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
