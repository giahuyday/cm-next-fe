import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

function createApolloClient() {
    const httpLink = createHttpLink({
        uri: process.env.NEXT_PUBLIC_API_URL,
    });

    const authLink = setContext((_, { headers }) => {
        return {
            headers: {
                ...headers,
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_PERM}`,
            },
        };
    });

    const client = new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache(),
    });

    return client;
}

export default createApolloClient;
