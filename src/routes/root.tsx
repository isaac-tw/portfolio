import { useEffect, useState } from "react";
import {
    Outlet,
    NavLink,
    Link,
    useLoaderData,
    Form,
    redirect,
    useNavigation,
    useSubmit,
} from "react-router-dom";

import { getContacts, createContact } from "../contacts";

export async function action() {
    const contact = await createContact();
    return redirect(`/contacts/${contact.id}/edit`);
}

export default function Root() {
    const { contacts, q } = useLoaderData() as any;
    const navigation = useNavigation();
    const submit = useSubmit();

    useEffect(() => {
        (document.getElementById("q") as HTMLInputElement).value = q;
    }, [q]);

    const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has(
      "q"
    );

    // const [query, setQuery] = useState(q);
    // useEffect(() => {
    //     setQuery(q);
    // }, [q]);

    return (
        <>
            <div id="sidebar">
                <h1>React Router Contacts</h1>
                <div>
                    <form id="search-form" role="search">
                        <input
                            id="q"
                            className={searching ? "loading" : ""}
                            aria-label="Search contacts"
                            placeholder="Search"
                            type="search"
                            name="q"
                            defaultValue={q}
                            // value={query}
                            // onChange={(e) => {
                            //     console.log('e.target.value', e.target.value)
                            //     setQuery(e.target.value);
                            // }}
                            onChange={(event) => {
                                const isFirstSearch = q == null;
                                submit(event.currentTarget.form, {
                                  replace: !isFirstSearch,
                                });
                                // submit(event.currentTarget.form);
                            }}
                        />
                        <div
                            id="search-spinner"
                            aria-hidden
                            hidden={!searching}
                        />
                        <div
                            className="sr-only"
                            aria-live="polite"
                        ></div>
                    </form>
                    {/* <form method="post">
                        <button type="submit">New</button>
                    </form> */}
                    <Form method="post">
                        <button type="submit">New</button>
                    </Form>
                </div>
                <nav>
                    {/* <ul>
                        <li>
                            <Link to={`contacts/1`}>Your Name</Link>
                        </li>
                        <li>
                            <Link to={`contacts/2`}>Your Friend</Link>
                        </li>
                    </ul> */}
                    {contacts.length ? (
                        <ul>
                            {contacts.map((contact: ContactType) => (

                                <NavLink
                                    to={`contacts/${contact.id}`}
                                    className={({ isActive, isPending }) =>
                                        isActive
                                            ? "active"
                                            : isPending
                                                ? "pending"
                                                : ""
                                    }
                                >
                                    <li key={contact.id}>
                                        <Link to={`contacts/${contact.id}`}>
                                            {contact.first || contact.last ? (
                                                <>
                                                    {contact.first} {contact.last}
                                                </>
                                            ) : (
                                                <i>No Name</i>
                                            )}{" "}
                                            {contact.favorite && <span>★</span>}
                                        </Link>
                                    </li>
                                </NavLink>
                            ))}
                        </ul>
                    ) : (
                        <p>
                            <i>No contacts</i>
                        </p>
                    )}
                </nav>
            </div>
            <div
                id="detail"
                className={
                    navigation.state === "loading" ? "loading" : ""
                }
            >
                <Outlet />
            </div>
        </>
    );
}

export async function loader({ request }: { request: any }) {
    const url = new URL(request.url);
    const q = url.searchParams.get("q");
    const contacts = await getContacts(q);
    return { contacts, q };
}