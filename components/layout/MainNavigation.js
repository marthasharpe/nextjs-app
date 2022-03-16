import Link from "next/link";

const MainNavigation = () => {
  return (
    <header className="w-full h-20 flex items-center justify-between bg-rose-700 py-0 px-8">
      <div className="text-4xl text-white font-bold">React Meetups</div>
      <nav>
        <ul className="flex">
          <li className="ml-12">
            <Link href="/">
              <a className="text-rose-300 hover:text-white text-2xl">
                All Meetups
              </a>
            </Link>
          </li>
          <li className="ml-12">
            <Link href="/new-meetup">
              <a className="text-rose-300 hover:text-white text-2xl">
                + New Meetup
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
