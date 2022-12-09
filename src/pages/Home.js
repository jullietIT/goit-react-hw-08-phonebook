import css from './Home.module.css';

export default function Home() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>
        Phonebook
        <span role="img" aria-label="Greeting icon">
          📱
        </span>
      </h1>
      <p className={css.p}>
        Hello! <br></br> This is an application for individual storage of your
        contacts phone numbers.<br></br> To use it, you need to create your
        unique account and add the numbers you need.
      </p>
    </div>
  );
}
