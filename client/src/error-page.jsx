import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return(
        <div class='text-center pt-52'>
            <h1 class="text-3xl font-bold mb-10">Oh no!</h1>
            <p class="mb-10">An unexpected error has occurred 😖</p>
            <p><i>{ error.statusText || error.message }</i></p>
        </div>
    );
}

