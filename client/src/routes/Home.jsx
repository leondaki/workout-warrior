import { Link } from "react-router-dom";

function Home() {
    return (
    <>
      <div class='shadow-md rounded-md bg-white m-8'>
        <h1>HOME: BECOME A WORKOUT WARRIOR!</h1>
        <button class="bg-green-500 p-2 px-8 text-white rounded-md">
            <Link to="/login">LOGIN</Link>
        </button>
        </div>
    </>
);
}

export default Home