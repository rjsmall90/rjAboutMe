import SplashPage from "./#/splash_page";
import HomePage from "./home";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col justify-center gap-8 md:gap-[32px] row-start-2 items-center w-full">
        <SplashPage /> 
      </main>
        <HomePage />
    </div>
  );
}
