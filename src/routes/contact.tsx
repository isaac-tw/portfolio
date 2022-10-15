import {
    Form,
    useLoaderData,
    useFetcher,
} from "react-router-dom";
import { getContact, updateContact } from "../contacts";

export async function action({ request, params }: { request: any, params: any }) {
    console.log('request', request);
    console.log('params', params);
    let formData = await request.formData();
    return updateContact(params.contactId, {
      favorite: formData.get("favorite") === "true",
    });
  }

export async function loader({ params }: { params: any }) {
    // return getContact(params.contactId);
    const contact = await getContact(params.contactId);
    if (!contact) {
      throw new Response("", {
        status: 404,
        statusText: "Not Found",
      });
    }
    return contact;
}

export default function Contact() {
    const contact = useLoaderData() as ContactType;

    // const contact: ContactType = {
    //     first: "Your",
    //     last: "Name",
    //     avatar: "https://placekitten.com/g/200/200",
    //     twitter: "your_handle",
    //     notes: "Some notes",
    //     favorite: true,
    // };

    return (
        <div id="contact">
            <div>
                <img
                    key={contact.avatar}
                    src={contact.avatar || undefined}
                    alt="contact description"
                />
            </div>

            <div>
                <h1>
                    {contact.first || contact.last ? (
                        <>
                            {contact.first} {contact.last}
                        </>
                    ) : (
                        <i>No Name</i>
                    )}{" "}
                    <Favorite contact={contact} />
                </h1>

                {contact.twitter && (
                    <p>
                        <a
                            target="_blank"
                            href={`https://twitter.com/${contact.twitter}`}
                            rel="noreferrer"
                        >
                            {contact.twitter}
                        </a>
                    </p>
                )}

                {contact.notes && <p>{contact.notes}</p>}

                <div>
                    <Form action="edit">
                        <button type="submit">Edit</button>
                    </Form>
                    <Form
                        method="post"
                        action="destroy"
                        onSubmit={(event) => {
                            if (
                                !window.confirm(
                                    "Please confirm you want to delete this record."
                                )
                            ) {
                                event.preventDefault();
                            }
                        }}
                    >
                        <button type="submit">Delete</button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

function Favorite({ contact }: { contact: ContactType }) {
    const fetcher = useFetcher();
    // yes, this is a `let` for later
    let favorite = contact.favorite;

    // When the action is done, the fetcher.formData will no longer exist and we're back to using the actual data.
    if (fetcher.formData) {
      favorite = fetcher.formData.get("favorite") === "true";
    }

    return (
        <fetcher.Form method="post">
            {/* <Form method="post"> */}
            <button
                name="favorite"
                value={favorite ? "false" : "true"}
                aria-label={
                    favorite
                        ? "Remove from favorites"
                        : "Add to favorites"
                }
            >
                {favorite ? "★" : "☆"}
            </button>
            {/* </Form> */}
        </fetcher.Form>
    );
}