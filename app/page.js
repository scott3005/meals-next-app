import Link from "next/link";
import classes from "./home.module.css";
import ImageSlideshow from "@/components/images/ImageSlideshow";
export default function Home() {
  return (
    <div className={classes["main-container"]}>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>Next level food</h1>
            <p>Taste and share health from all over the world</p>
          </div>
          <div className={classes.cta}>
            <p>
              <Link href="/community">join the community</Link>
            </p>
            <p>
              <Link href="/meals">Explore meals</Link>
            </p>
          </div>
        </div>
      </header>
      <main className="flex flex-col  justify-center items-center">
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </div>
  );
}
