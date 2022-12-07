const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 68,
    textAlign: 'center',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Phonebook
        <span role="img" aria-label="Greeting icon">
          📱
        </span>
      </h1>
    </div>
  );
}
